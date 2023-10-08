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
          {row.fpoDetailsId}
        </TableCell>
        <TableCell>{row.fpoName}</TableCell>
        <TableCell>{row.fpoRole}</TableCell>
        <TableCell>{row.nameOfResourceInstitute}</TableCell>
        <TableCell>
          <img
            id="registerOfficeImage"
            width={"100"}
            style={{ marginTop: "10px" }}
            src={row.registerOfficeImage}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                FPO Staff Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>name</TableCell>
                    <TableCell>fpoStaffImage</TableCell>
                    <TableCell>bankImage</TableCell>
                    <TableCell>bankName</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={row.fpoStaffDetails.fpoStaffDetailsId}>
                    <TableCell>{row.fpoStaffDetails.name}</TableCell>
                    <TableCell component="th" scope="row">
                      <img
                        id="registerOfficeImage"
                        width={"100"}
                        style={{ marginTop: "10px" }}
                        src={row.fpoStaffDetails.fpoStaffImage}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <img
                        id="registerOfficeImage"
                        width={"100"}
                        style={{ marginTop: "10px" }}
                        src={row.fpoStaffDetails.bankImage}
                      />
                    </TableCell>
                    <TableCell>{row.fpoStaffDetails.bankName}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                FPO Compliance
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>directMarketingValidityDate</TableCell>
                    <TableCell>fssaiValidityDate</TableCell>
                    <TableCell>gstValidityDate</TableCell>
                    <TableCell>pesticideInsecticideValidityDate</TableCell>
                    <TableCell>pollutionValidityDate</TableCell>
                    <TableCell>seedsValidityDate</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={row.fpoDetailsId}>
                    <TableCell>
                      {row.fpoCompliance.directMarketingValidityDate}
                    </TableCell>
                    <TableCell>{row.fpoCompliance.fssaiValidityDate}</TableCell>
                    <TableCell>{row.fpoCompliance.gstValidityDate}</TableCell>
                    <TableCell>
                      {row.fpoCompliance.pesticideInsecticideValidityDate}
                    </TableCell>
                    <TableCell>
                      {row.fpoCompliance.pollutionValidityDate}
                    </TableCell>
                    <TableCell>{row.fpoCompliance.seedsValidityDate}</TableCell>
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
      <div className={style.header}>All Posts</div>
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
              <TableCell>Id</TableCell>
              <TableCell>FPO Name</TableCell>
              <TableCell>FPO Role</TableCell>
              <TableCell>Name Of Resource Institute</TableCell>
              <TableCell>Register Office Image</TableCell>
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
