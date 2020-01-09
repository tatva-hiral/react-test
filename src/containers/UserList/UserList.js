import React, { useEffect, useState } from "react";
//import external libraries
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableFooter,
  TablePagination,
  Paper,
  Avatar
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
//import custom components
import Paginator from "../../components/Paginator";
//import actions
import * as UserActions from "../../actions/user";
//import constants, styles
import { endpoint } from "../../constants";
import { useStyles } from "./styles";
import { PREVIEW } from "../../assets/images";

const StyledTableCell = withStyles(theme => ({
  root: {
    width: 150
  },
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

/**
 * Userlist function component to display userlist
 */
function UserList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userList = useSelector(state => state.user.userList);

  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  /**
   * On change pagination, update state - page
   * @param {*} event
   * @param {*} newPage
   */
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  /**
   * Update state - rowsPerPage
   * @param {*} event
   */
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  /**
   * This is a function to fetch userlist and dispatch redux setUserList function to set props
   */
  const getUserListData = () => {
    return async dispatch => {
      try {
        setLoading(true);
        const userResponse = await axios.get(endpoint.GET_USER);
        setLoading(false);
        if (userResponse && userResponse.status === 200) {
          dispatch(UserActions.setUserList(userResponse.data.results));
        }
      } catch (error) {
        setLoading(false);
      }
    };
  };

  /**
   * It is a hooks life cycle method currently used for fetch userlist
   */
  useEffect(() => {
    dispatch(getUserListData());
  }, []);

  return (
    <Grid container justify="center">
      <Grid item xs={8}>
        <TableContainer className={classes.tableContainer} component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell align="left">Picture</StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">City</StyledTableCell>
                <StyledTableCell align="left">State</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <StyledTableRow>
                  <StyledTableCell colSpan={4} align="center">
                    Loading users...
                  </StyledTableCell>
                </StyledTableRow>
              ) : userList && userList.length ? (
                (rowsPerPage > 0
                  ? userList.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : userList
                ).map(user => {
                  const name = `${user.name.title} ${user.name.first} ${user.name.last}`;
                  const city = (user.location && user.location.city) || "";
                  const state = (user.location && user.location.state) || "";
                  const picture =
                    (user.picture && user.picture.thumbnail) || PREVIEW;
                  return (
                    <StyledTableRow key={Math.random()}>
                      <StyledTableCell align="left">
                        <Avatar
                          alt="Picture"
                          src={picture}
                          className={classes.large}
                        />
                      </StyledTableCell>
                      <StyledTableCell align="left">{name}</StyledTableCell>
                      <StyledTableCell align="left">{city}</StyledTableCell>
                      <StyledTableCell align="left">{state}</StyledTableCell>
                    </StyledTableRow>
                  );
                })
              ) : (
                <StyledTableRow>
                  <StyledTableCell colSpan={4} align="center">
                    Users not found
                  </StyledTableCell>
                </StyledTableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={3}
                  count={userList.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { "aria-label": "rows per page" },
                    native: true
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={Paginator}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default UserList;
