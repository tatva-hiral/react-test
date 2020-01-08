import React from "react";
//import external libraries
import { makeStyles } from "@material-ui/core/styles";
//routes
import Routes from "./routes";
//import custom components
import Navbar from "./components/Navbar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
