import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Container,
  Typography,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Stack,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ACCENT, ACCENT_HOVER } from "../Theme";
import Footer from "./Footer";
import Navbar from "./Navbar";

const RULE = "1px solid #e4ded7";

const BASE_URL = "https://lawyer-backend-xi.vercel.app/api";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 15000,
});

function createCrudApi(resource, fieldMap, listKey, itemKey) {
  const toDbPayload = (form) => {
    const payload = {};
    fieldMap.forEach(({ key, dbKey }) => {
      payload[dbKey] = form[key] ?? "";
    });
    return payload;
  };

  const fromDbRow = (row) => {
    const item = { id: row.id };
    fieldMap.forEach(({ key, dbKey }) => {
      item[key] = row[dbKey] ?? "";
    });
    return item;
  };

  return {
    async getAll() {
      const { data } = await axiosClient.get(`/${resource}/`);
      const rows = Array.isArray(data) ? data : data[listKey] || [];
      return rows.map(fromDbRow);
    },
    async create(form) {
      const { data } = await axiosClient.post(
        `/${resource}/`,
        toDbPayload(form),
      );
      return fromDbRow(data[itemKey] || data);
    },
    async update(id, form) {
      const { data } = await axiosClient.put(
        `/${resource}/${id}`,
        toDbPayload(form),
      );
      return fromDbRow(data[itemKey] || data);
    },
    async remove(id) {
      await axiosClient.delete(`/${resource}/${id}`);
      return { id };
    },
  };
}

const ACQUISITION_FIELDS = [
  {
    key: "description",
    dbKey: "description",
    label: "Description of Property with address",
    type: "text",
    multiline: true,
    required: true,
  },
  {
    key: "titleOpinionStatus",
    dbKey: "title_opinion_status",
    label: "Status of Title Opinion",
    type: "select",
    options: ["Pending", "In Progress", "Completed"],
  },
  {
    key: "titleCertificationDate",
    dbKey: "title_certification_date",
    label: "Date of Title Certification",
    type: "date",
  },
];

const acquisitionApi = createCrudApi(
  "acquisition-properties",
  ACQUISITION_FIELDS,
  "properties",
  "property",
);

const ACQUISITION_STATUS_COLOR = {
  Pending: { bg: "#fbead9", color: "#a5651c" },
  "In Progress": { bg: "#e6eefb", color: "#1d5bb0" },
  Completed: { bg: "#e3f3e6", color: "#2e7d32" },
};

const RENTAL_FIELDS = [
  {
    key: "description",
    dbKey: "description",
    label: "Description of Property with address",
    type: "text",
    multiline: true,
    required: true,
  },
  {
    key: "ownershipStatus",
    dbKey: "ownership_status",
    label: "Status of Ownership",
    type: "select",
    options: ["Owned", "Leased", "Disputed"],
  },
  {
    key: "availabilityStatus",
    dbKey: "availability_status",
    label: "Status of Availability",
    type: "select",
    options: ["Available", "Not Available", "Under Negotiation"],
  },
];

const rentalApi = createCrudApi(
  "rental-properties",
  RENTAL_FIELDS,
  "properties",
  "property",
);

const RENTAL_STATUS_COLOR = {
  Owned: { bg: "#e3f3e6", color: "#2e7d32" },
  Leased: { bg: "#e6eefb", color: "#1d5bb0" },
  Disputed: { bg: "#fbe3e0", color: "#c62828" },
  Available: { bg: "#e3f3e6", color: "#2e7d32" },
  "Not Available": { bg: "#fbe3e0", color: "#c62828" },
  "Under Negotiation": { bg: "#fbead9", color: "#a5651c" },
};

const StatusPill = ({ value, colorMap }) => {
  const c = colorMap[value] || { bg: "#eee", color: "#555" };
  return (
    <Chip
      label={value || "—"}
      size="small"
      sx={{
        bgcolor: c.bg,
        color: c.color,
        fontWeight: 700,
        borderRadius: "4px",
      }}
    />
  );
};

const emptyFormFromFields = (fields) => {
  const form = {};
  fields.forEach((f) => {
    form[f.key] = "";
  });
  return form;
};

const PropertyTableBlock = ({
  title,
  fields,
  api,
  statusColorMap,
  statusFieldKey,
}) => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(() => emptyFormFromFields(fields));

  const [deleteTarget, setDeleteTarget] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const loadRows = async () => {
    setLoading(true);
    try {
      const data = await api.getAll();
      setRows(data);
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Could not load data.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openAddDialog = () => {
    setEditingId(null);
    setForm(emptyFormFromFields(fields));
    setDialogOpen(true);
  };

  const openEditDialog = (row) => {
    setEditingId(row.id);
    setForm({ ...row });
    setDialogOpen(true);
  };

  const closeDialog = () => {
    if (saving) return;
    setDialogOpen(false);
  };

  const handleFormChange = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = async () => {
    const missingRequired = fields.some((f) => f.required && !form[f.key]);
    if (missingRequired) {
      setSnackbar({
        open: true,
        message: "Please fill the required fields.",
        severity: "error",
      });
      return;
    }
    setSaving(true);
    try {
      if (editingId) {
        await api.update(editingId, form);
        setSnackbar({
          open: true,
          message: "Entry updated.",
          severity: "success",
        });
      } else {
        await api.create(form);
        setSnackbar({
          open: true,
          message: "Entry added.",
          severity: "success",
        });
      }
      setDialogOpen(false);
      await loadRows();
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Save failed. Please try again.",
        severity: "error",
      });
    } finally {
      setSaving(false);
    }
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    try {
      await api.remove(deleteTarget.id);
      setSnackbar({
        open: true,
        message: "Entry deleted.",
        severity: "success",
      });
      setDeleteTarget(null);
      await loadRows();
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Delete failed. Please try again.",
        severity: "error",
      });
    }
  };

  const colCount = fields.length + 2; // Sl.No + fields + Actions

  return (
    <Box sx={{ mb: { xs: 7, md: 9 } }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        spacing={2}
        sx={{ mb: 2.5 }}
      >
        <Typography
          component="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: 19, md: 21 },
            color: "#1c1c1c",
          }}
        >
          {title}
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={openAddDialog}
          disableElevation
          size="small"
          sx={{
            bgcolor: ACCENT,
            borderRadius: 0,
            px: 2.5,
            py: 1,
            fontWeight: 600,
            textTransform: "none",
            "&:hover": { bgcolor: ACCENT_HOVER },
          }}
        >
          Add Entry
        </Button>
      </Stack>

      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ border: RULE, borderRadius: 0 }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#faf8f5" }}>
              <TableCell
                sx={{
                  fontWeight: 700,
                  color: "#1c1c1c",
                  borderBottom: RULE,
                  width: 70,
                }}
              >
                Sl.No
              </TableCell>
              {fields.map((f) => (
                <TableCell
                  key={f.key}
                  sx={{
                    fontWeight: 700,
                    color: "#1c1c1c",
                    borderBottom: RULE,
                    whiteSpace: "nowrap",
                  }}
                >
                  {f.label}
                </TableCell>
              ))}
              <TableCell
                sx={{ fontWeight: 700, color: "#1c1c1c", borderBottom: RULE }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {loading && (
              <TableRow>
                <TableCell colSpan={colCount} align="center" sx={{ py: 5 }}>
                  <CircularProgress size={26} sx={{ color: ACCENT }} />
                </TableCell>
              </TableRow>
            )}

            {!loading && rows.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={colCount}
                  align="center"
                  sx={{ py: 5, color: "#888" }}
                >
                  No entries yet. Click "Add Entry" to create one.
                </TableCell>
              </TableRow>
            )}

            {!loading &&
              rows.map((row, i) => (
                <TableRow key={row.id} hover>
                  <TableCell sx={{ borderBottom: RULE, color: "#888" }}>
                    {i + 1}
                  </TableCell>
                  {fields.map((f) => (
                    <TableCell
                      key={f.key}
                      sx={{ borderBottom: RULE, color: "#555" }}
                    >
                      {f.key === statusFieldKey ? (
                        <StatusPill
                          value={row[f.key]}
                          colorMap={statusColorMap}
                        />
                      ) : (
                        row[f.key] || "—"
                      )}
                    </TableCell>
                  ))}
                  <TableCell sx={{ borderBottom: RULE }}>
                    <Stack direction="row" spacing={0.5}>
                      <IconButton
                        size="small"
                        onClick={() => openEditDialog(row)}
                        aria-label="Edit"
                      >
                        <EditIcon fontSize="small" sx={{ color: ACCENT }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => setDeleteTarget(row)}
                        aria-label="Delete"
                      >
                        <DeleteIcon
                          fontSize="small"
                          sx={{ color: "#c62828" }}
                        />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add / Edit dialog */}
      <Dialog open={dialogOpen} onClose={closeDialog} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700 }}>
          {editingId ? "Edit Entry" : "Add Entry"} — {title}
        </DialogTitle>
        <DialogContent dividers>
          <Stack spacing={2.5} sx={{ pt: 1 }}>
            {fields.map((f) => {
              if (f.type === "select") {
                return (
                  <TextField
                    key={f.key}
                    select
                    label={f.label}
                    value={form[f.key] || ""}
                    onChange={handleFormChange(f.key)}
                    fullWidth
                  >
                    {f.options.map((opt) => (
                      <MenuItem key={opt} value={opt}>
                        {opt}
                      </MenuItem>
                    ))}
                  </TextField>
                );
              }
              if (f.type === "date") {
                return (
                  <TextField
                    key={f.key}
                    label={f.label}
                    type="date"
                    value={form[f.key] || ""}
                    onChange={handleFormChange(f.key)}
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                );
              }
              return (
                <TextField
                  key={f.key}
                  label={f.label}
                  value={form[f.key] || ""}
                  onChange={handleFormChange(f.key)}
                  required={f.required}
                  multiline={f.multiline}
                  minRows={f.multiline ? 2 : undefined}
                  fullWidth
                />
              );
            })}
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button
            onClick={closeDialog}
            disabled={saving}
            sx={{ textTransform: "none", color: "#666" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            disabled={saving}
            disableElevation
            sx={{
              bgcolor: ACCENT,
              borderRadius: 0,
              px: 3,
              textTransform: "none",
              fontWeight: 600,
              "&:hover": { bgcolor: ACCENT_HOVER },
            }}
          >
            {saving ? "Saving…" : editingId ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete confirmation */}
      <Dialog
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 700 }}>Delete this entry?</DialogTitle>
        <DialogContent>
          <Typography sx={{ color: "#555" }}>
            This entry will be permanently removed. This can't be undone.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button
            onClick={() => setDeleteTarget(null)}
            sx={{ textTransform: "none", color: "#666" }}
          >
            Cancel
          </Button>
          <Button
            onClick={confirmDelete}
            variant="contained"
            disableElevation
            sx={{
              bgcolor: "#c62828",
              borderRadius: 0,
              px: 3,
              textTransform: "none",
              fontWeight: 600,
              "&:hover": { bgcolor: "#a91f1f" },
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={snackbar.severity}
          variant="filled"
          sx={{ borderRadius: 0 }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

/* ============================================================
   5. PAGE
   ============================================================ */
const PropertyApprovals = () => {
  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
      {/* Header */}
      <Box sx={{ bgcolor: "#1c1c1c", color: "#fff" }}>
        <Navbar />
        <Container
          maxWidth={false}
          sx={{ maxWidth: 1280, px: { xs: 2.5, sm: 4 }, py: { xs: 5, md: 6 } }}
        >
          <Typography
            sx={{ color: ACCENT, fontSize: 14, fontWeight: 600, mb: 0.5 }}
          >
            Admin
          </Typography>
          <Typography
            component="h1"
            sx={{ fontWeight: 800, fontSize: { xs: 26, md: 32 } }}
          >
            Property Register
          </Typography>
        </Container>
      </Box>

      <Container
        maxWidth={false}
        sx={{ maxWidth: 1280, px: { xs: 2.5, sm: 4 }, py: { xs: 5, md: 7 } }}
      >
        <PropertyTableBlock
          title="List of Properties for Acquisition"
          fields={ACQUISITION_FIELDS}
          api={acquisitionApi}
          statusColorMap={ACQUISITION_STATUS_COLOR}
          statusFieldKey="titleOpinionStatus"
        />

        <PropertyTableBlock
          title="List of Properties for Rentals / Lease / License"
          fields={RENTAL_FIELDS}
          api={rentalApi}
          statusColorMap={RENTAL_STATUS_COLOR}
          statusFieldKey="availabilityStatus"
        />
      </Container>
      <Footer />
    </Box>
  );
};

export default PropertyApprovals;
