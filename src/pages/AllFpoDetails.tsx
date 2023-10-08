import React, { useState, useEffect } from "react";
import { fetchFpoDetails } from "../services";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import style from "../styles/allPosts.module.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Row(props: { row: any }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const replaceImage = (error: any) => {
    error.target.src =
      "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image-100x100.jpg";
  };
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.fpoDetailsId || "--"}
        </TableCell>
        <TableCell>{row.fpoName || "--"}</TableCell>
        <TableCell>{row.fpoRole || "--"}</TableCell>
        <TableCell>{row.nameOfResourceInstitute || "--"}</TableCell>
        <TableCell>
          <img
            id="registerOfficeImage"
            width={"100"}
            style={{ marginTop: "10px" }}
            src={
              row.registerOfficeImage ||
              "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image-100x100.jpg"
            }
            alt="--"
            onError={replaceImage}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                style={{ fontWeight: 600 }}
              >
                FPO Staff Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: 600 }}>name</TableCell>
                    <TableCell style={{ fontWeight: 600 }}>
                      fpoStaffImage
                    </TableCell>
                    <TableCell style={{ fontWeight: 600 }}>bankImage</TableCell>
                    <TableCell style={{ fontWeight: 600 }}>bankName</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={row.fpoStaffDetails.fpoStaffDetailsId}>
                    <TableCell>{row.fpoStaffDetails.name || "--"}</TableCell>
                    <TableCell component="th" scope="row">
                      <img
                        id="registerOfficeImage"
                        width={"100"}
                        style={{ marginTop: "10px" }}
                        src={
                          row.fpoStaffDetails.fpoStaffImage ||
                          "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image-100x100.jpg"
                        }
                        alt="--"
                        onError={replaceImage}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <img
                        id="registerOfficeImage"
                        width={"100"}
                        style={{ marginTop: "10px" }}
                        src={
                          row.fpoStaffDetails.bankImage ||
                          "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image-100x100.jpg"
                        }
                        alt="--"
                        onError={replaceImage}
                      />
                    </TableCell>
                    <TableCell>
                      {row.fpoStaffDetails.bankName || "--"}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
            <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                style={{ fontWeight: 600 }}
              >
                FPO Compliance
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: 600 }}>
                      Direct Marketing Validity Date
                    </TableCell>
                    <TableCell style={{ fontWeight: 600 }}>
                      Fssai Validity Date
                    </TableCell>
                    <TableCell style={{ fontWeight: 600 }}>
                      GST Validity Date
                    </TableCell>
                    <TableCell style={{ fontWeight: 600 }}>
                      Pesticide Insecticide Validity Date
                    </TableCell>
                    <TableCell style={{ fontWeight: 600 }}>
                      Pollution Validity Date
                    </TableCell>
                    <TableCell style={{ fontWeight: 600 }}>
                      Seeds Validity Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={row.fpoDetailsId}>
                    <TableCell>
                      {row.fpoCompliance.directMarketingValidityDate || "--"}
                    </TableCell>
                    <TableCell>
                      {row.fpoCompliance.fssaiValidityDate || "--"}
                    </TableCell>
                    <TableCell>
                      {row.fpoCompliance.gstValidityDate || "--"}
                    </TableCell>
                    <TableCell>
                      {row.fpoCompliance.pesticideInsecticideValidityDate ||
                        "--"}
                    </TableCell>
                    <TableCell>
                      {row.fpoCompliance.pollutionValidityDate || "--"}
                    </TableCell>
                    <TableCell>
                      {row.fpoCompliance.seedsValidityDate || "--"}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function AllFpoDetails() {
  const [fpo, setfpo] = useState([]);
  const [searchfpo, setSearchfpo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const getPosts = async () => {
    setLoading(true);
    const { data }: any = await fetchFpoDetails();
    setfpo(data.data);
    setTotalPage(data.data.length / 10);
    setSearchfpo(data.data);
    setLoading(false);
  };
  useEffect(() => {
    if (!loading) {
      getPosts();
    }
  }, []);
  const handleSearch = (search: any) => {
    setLoading(true);
    setPage(1);
    const searchfpo = fpo.filter((obj: any) =>
      Object.values(obj).some((val: any) => {
        console.log({ val });

        return String(val).includes(search);
      })
    );
    setSearchfpo(searchfpo);
    setLoading(false);
  };
  return (
    <div style={{ margin: "10px 20px 20px 85px" }}>
      <div className={style.header}>All FPO Details</div>
      <input
        type="text"
        onChange={(e: any) => handleSearch(e.target.value)}
        placeholder="Search..."
        className={style.srh_field}
      />
      <TableContainer component={Paper}>
        <Table aria-label="All Posts">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell style={{ fontWeight: 600 }}>Id</TableCell>
              <TableCell style={{ fontWeight: 600 }}>FPO Name</TableCell>
              <TableCell style={{ fontWeight: 600 }}>FPO Role</TableCell>
              <TableCell style={{ fontWeight: 600 }}>
                Name Of Resource Institute
              </TableCell>
              <TableCell style={{ fontWeight: 600 }}>
                Register Office Image
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchfpo.slice((page - 1) * 10, page * 10).map((row: any) => (
              <Row key={row.fpoDetailsId} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={style.pagination}>
        <button
          onClick={() => {
            setPage(page - 1);
            setSearchfpo(fpo);
          }}
          disabled={page === 1}
          className={style.pagination_button}
        >
          Previous
        </button>
        <p className={style.pagination_text}>{page}</p>
        <button
          onClick={() => {
            setPage(page + 1);
            setSearchfpo(fpo);
          }}
          disabled={page === totalPage || page > totalPage}
          className={style.pagination_button}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AllFpoDetails;
