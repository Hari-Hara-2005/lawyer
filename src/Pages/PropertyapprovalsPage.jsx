import { useEffect, useState } from "react";
import axios from "axios";

import {
  Box,
  Container,
  Typography,
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
  Stack,
  CircularProgress,
  TextField,
  InputAdornment,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

import { ACCENT } from "../Theme";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RULE = "1px solid #e4ded7";

const BASE_URL = "https://lawyer-backend-xi.vercel.app/api";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

function createReadOnlyApi(resource, fieldMap, listKey) {
  const fromDbRow = (row) => {
    const item = {
      id: row.id,
    };

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
  };
}

const getDateOnly = (date) => {
  if (!date) {
    return "Date not available";
  }

  return String(date).split("T")[0];
};

const ACQUISITION_FIELDS = [
  {
    key: "description",
    dbKey: "description",
    label: "Description of Property with address",
  },
  {
    key: "titleOpinionStatus",
    dbKey: "title_opinion_status",
    label: "Status of Title Opinion",
  },
  {
    key: "titleCertificationDate",
    dbKey: "title_certification_date",
    label: "Date of Title Certification",
  },
];

const acquisitionApi = createReadOnlyApi(
  "acquisition-properties",
  ACQUISITION_FIELDS,
  "properties",
);

const ACQUISITION_STATUS_COLOR = {
  Pending: {
    bg: "#fbead9",
    color: "#a5651c",
  },

  "In Progress": {
    bg: "#e6eefb",
    color: "#1d5bb0",
  },

  Completed: {
    bg: "#e3f3e6",
    color: "#2e7d32",
  },
};

const RENTAL_FIELDS = [
  {
    key: "description",
    dbKey: "description",
    label: "Description of Property with address",
  },
  {
    key: "ownershipStatus",
    dbKey: "ownership_status",
    label: "Status of Ownership",
  },
  {
    key: "availabilityStatus",
    dbKey: "availability_status",
    label: "Status of Availability",
  },
];

const rentalApi = createReadOnlyApi(
  "rental-properties",
  RENTAL_FIELDS,
  "properties",
);

const RENTAL_STATUS_COLOR = {
  Owned: {
    bg: "#e3f3e6",
    color: "#2e7d32",
  },

  Leased: {
    bg: "#e6eefb",
    color: "#1d5bb0",
  },

  Disputed: {
    bg: "#fbe3e0",
    color: "#c62828",
  },

  Available: {
    bg: "#e3f3e6",
    color: "#2e7d32",
  },

  "Not Available": {
    bg: "#fbe3e0",
    color: "#c62828",
  },

  "Under Negotiation": {
    bg: "#fbead9",
    color: "#a5651c",
  },
};

const StatusPill = ({ value, colorMap }) => {
  const c = colorMap[value] || {
    bg: "#eee",
    color: "#555",
  };

  return (
    <Chip
      label={value || "Pending"}
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

const DetailRow = ({ label, value }) => (
  <Box
    sx={{
      display: "flex",
      py: 1.25,
      borderBottom: RULE,

      "&:last-of-type": {
        borderBottom: "none",
      },

      flexDirection: {
        xs: "column",
        sm: "row",
      },

      gap: {
        xs: 0.5,
        sm: 0,
      },
    }}
  >
    <Typography
      sx={{
        width: {
          xs: "100%",
          sm: 200,
        },
        flexShrink: 0,
        color: "#888",
        fontSize: 14,
      }}
    >
      {label}
    </Typography>

    <Typography
      sx={{
        color: "#1c1c1c",
        fontSize: 15,
        fontWeight: 500,
      }}
    >
      {value || "—"}
    </Typography>
  </Box>
);

const ReadOnlyTableBlock = ({
  title,
  fields,
  api,
  statusColorMap,
  statusFieldKey,
}) => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  /* -------------------------------------------------------
     FETCH DATA
  ------------------------------------------------------- */

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const data = await api.getAll();

        setRows(data);
      } catch (err) {
        console.error(`Failed to fetch ${title}:`, err);

        setRows([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [api, title]);

  const filtered = rows.filter((row) => {
    const q = search.trim().toLowerCase();

    if (!q) {
      return true;
    }

    return fields.some((field) =>
      (row[field.key] || "").toString().toLowerCase().includes(q),
    );
  });

  const colCount = fields.length + 2;

  return (
    <Box
      sx={{
        mb: {
          xs: 7,
          md: 9,
        },
      }}
    >
      <Stack
        direction={{
          xs: "column",
          sm: "row",
        }}
        justifyContent="space-between"
        alignItems={{
          xs: "flex-start",
          sm: "center",
        }}
        spacing={2}
        sx={{
          mb: 2.5,
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontWeight: 700,
            fontSize: {
              xs: 19,
              md: 21,
            },
            color: "#1c1c1c",
          }}
        >
          {title}
        </Typography>

        <TextField
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
          sx={{
            maxWidth: 280,
            width: "100%",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                  sx={{
                    fontSize: 20,
                    color: "#999",
                  }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          border: RULE,
          borderRadius: 0,
          overflowX: "auto",
        }}
      >
        <Table
          sx={{
            minWidth: 750,
          }}
        >
          {/* TABLE HEADER */}

          <TableHead>
            <TableRow
              sx={{
                bgcolor: "#faf8f5",
              }}
            >
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

              {fields.map((field) => (
                <TableCell
                  key={field.key}
                  sx={{
                    fontWeight: 700,
                    color: "#1c1c1c",
                    borderBottom: RULE,
                    whiteSpace: "nowrap",
                  }}
                >
                  {field.label}
                </TableCell>
              ))}

              <TableCell
                sx={{
                  fontWeight: 700,
                  color: "#1c1c1c",
                  borderBottom: RULE,
                  width: 70,
                }}
              />
            </TableRow>
          </TableHead>

          {/* TABLE BODY */}

          <TableBody>
            {/* LOADING */}

            {loading && (
              <TableRow>
                <TableCell
                  colSpan={colCount}
                  align="center"
                  sx={{
                    py: 5,
                  }}
                >
                  <CircularProgress
                    size={26}
                    sx={{
                      color: ACCENT,
                    }}
                  />
                </TableCell>
              </TableRow>
            )}

            {/* NO DATA */}

            {!loading && filtered.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={colCount}
                  align="center"
                  sx={{
                    py: 5,
                    color: "#888",
                  }}
                >
                  No matching entries found.
                </TableCell>
              </TableRow>
            )}

            {/* DATA */}

            {!loading &&
              filtered.map((row, index) => (
                <TableRow
                  key={row.id}
                  hover
                  onClick={() => setSelected(row)}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  {/* SERIAL NUMBER */}

                  <TableCell
                    sx={{
                      borderBottom: RULE,
                      color: "#888",
                    }}
                  >
                    {index + 1}
                  </TableCell>

                  {/* FIELDS */}

                  {fields.map((field) => (
                    <TableCell
                      key={field.key}
                      sx={{
                        borderBottom: RULE,
                        color: "#555",
                      }}
                    >
                      {/* STATUS FIELD */}

                      {field.key === statusFieldKey ? (
                        <StatusPill
                          value={row[field.key]}
                          colorMap={statusColorMap}
                        />
                      ) : field.key === "titleCertificationDate" ? (
                        /* DATE ONLY */

                        getDateOnly(row[field.key])
                      ) : (
                        row[field.key] || "—"
                      )}
                    </TableCell>
                  ))}

                  {/* VIEW BUTTON */}

                  <TableCell
                    sx={{
                      borderBottom: RULE,
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected(row);
                      }}
                      aria-label="View details"
                    >
                      <VisibilityIcon
                        fontSize="small"
                        sx={{
                          color: ACCENT,
                        }}
                      />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={!!selected}
        onClose={() => setSelected(null)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle
          sx={{
            fontWeight: 700,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {title}

          <IconButton size="small" onClick={() => setSelected(null)}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          {selected && (
            <Stack spacing={1}>
              {/* STATUS */}

              {statusFieldKey && (
                <Box
                  sx={{
                    mb: 1,
                  }}
                >
                  <StatusPill
                    value={selected[statusFieldKey]}
                    colorMap={statusColorMap}
                  />
                </Box>
              )}

              {/* DETAILS */}

              {fields.map((field) => {
                let displayValue = selected[field.key];

                /*
                 * Convert:
                 *
                 * 2026-09-10T18:30:00.000Z
                 *
                 * into:
                 *
                 * 2026-09-10
                 */

                if (field.key === "titleCertificationDate") {
                  displayValue = getDateOnly(selected[field.key]);
                }

                return (
                  <DetailRow
                    key={field.key}
                    label={field.label}
                    value={displayValue}
                  />
                );
              })}
            </Stack>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

const PropertyApprovalsView = () => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          bgcolor: "#1c1c1c",
          color: "#fff",
        }}
      >
        <Navbar />

        <Container
          maxWidth={false}
          sx={{
            maxWidth: 1280,
            px: {
              xs: 2.5,
              sm: 4,
            },
            py: {
              xs: 5,
              md: 6,
            },
          }}
        >
          <Typography
            sx={{
              color: ACCENT,
              fontSize: 14,
              fontWeight: 600,
              mb: 0.5,
            }}
          >
            Property Register
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: 26,
                md: 32,
              },
            }}
          >
            View Property Status
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 14,
              mt: 1,
            }}
          >
            Read-only view. Contact the firm to request a change.
          </Typography>
        </Container>
      </Box>

      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1280,
          px: {
            xs: 2.5,
            sm: 4,
          },
          py: {
            xs: 5,
            md: 7,
          },
        }}
      >
        {/* ACQUISITION */}

        <ReadOnlyTableBlock
          title="List of Properties for Acquisition"
          fields={ACQUISITION_FIELDS}
          api={acquisitionApi}
          statusColorMap={ACQUISITION_STATUS_COLOR}
          statusFieldKey="titleOpinionStatus"
        />

        {/* RENTAL */}

        <ReadOnlyTableBlock
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

export default PropertyApprovalsView;
