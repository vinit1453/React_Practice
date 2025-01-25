import React, { useEffect, useState } from "react";
import axios from "react";
import MUI from "../Examples/MUI";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

export default function User() {
  const state = useSelector((state) => state.userReducer);

  //to encryption
  var CryptoJS = require("crypto-js");
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const [data, setData] = useState([]);

  //  useEffect(()=>{
  //       load();

  //  },[])
  const load = async () => {
    await fetch("http://localhost:3000/users")
      .then(function (data) {
        // console.log(data);
        return data.json();
      })
      .then(function (data) {
        //console.log(data);
        setData(data);
        //   data.map((key)=>{
        //    if("vinit"==key.name){
        //     alert("already have ");

        //    }else{
        //     alert("avialable");
        //    }
        //  })
      })
      .catch((e) => {
        console.log("error occured while fetching" + e);
      });
  };
  function verify() {
    const found = data.some((el) => el.name == "vinit");
    if (found) {
      alert("exists");
    } else {
      alert("use");
    }

    // for(var ele in data){
    //  console.log("search in"+JSON.stringify(data))
    // //   if (JSON.stringify(data[ele].name=="dummy")){
    // //    alert("exists");
    // //    break;
    // //  }else{
    // //    alert("available for use");

    // //  }

    // }
  }
  const handleDelete = (id) => {
    alert(id + "user need to be delete");
    //   fetch(`http://localhost:3000/users/${id}`,{
    //   method:'delete'
    // }).then((result)=>{
    //   result.json().then((resp)=>{
    //     console.warn(resp);

    //     load();

    //   })})

    //calling delteUser from service>index>actions using dispatch
    ///dispatch(allAction.allAction.deleteUser(id));
  };
  const handleEdit = (id) => {
    //calling editUser from service>index>actions using bindActionCreator

    alert(id + "user need to be edit");
  };
  return (
    <div className="container-fluid ">
      {/* <button className="btn btn-outline-success btn-sm" type="button" onClick={verify}>Search</button>
      <div>{JSON.stringify(data)}</div> */}
      <marquee behavior="alternate">
        <h1>ALL User's Data</h1>
      </marquee>
      <div className="container">
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 10 }}
            aria-label="customized table"
            id="example"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>id</StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="center">Role</StyledTableCell>
                <StyledTableCell align="center">
                  Data of Joining
                </StyledTableCell>
                <StyledTableCell align="center">E-mail</StyledTableCell>
                <StyledTableCell align="center">Password</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!state.loading ? (
                <>
                  {state.users.length ? (
                    state.users.map((row) => (
                      <StyledTableRow key={row.id}>
                        <StyledTableCell component="th" scope="row">
                          {row.id}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.role}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {new Date(row.doj).toLocaleString()}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.mail}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {CryptoJS.AES.encrypt(
                            row.password,
                            "my-secret-key@123"
                          ).toString()}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.status === 1 ? "Active" : "In-Active"}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {
                            <>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <EditIcon
                                  onClick={() => handleEdit(row.id)}
                                  color="primary"
                                />
                                <hr
                                  style={{
                                    transform: "rotate(90deg)",
                                    color: "red !important",
                                  }}
                                />
                                <DeleteIcon
                                  onClick={() => handleDelete(row.id)}
                                  color="primary"
                                />
                              </div>
                            </>
                          }
                        </StyledTableCell>
                      </StyledTableRow>
                    ))
                  ) : (
                    <>
                      <StyledTableRow>No Records Found</StyledTableRow>
                    </>
                  )}
                </>
              ) : (
                <>
                  <StyledTableRow>Loading</StyledTableRow>
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
