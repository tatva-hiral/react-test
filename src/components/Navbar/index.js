import React from "react";
//import external libraries
import { AppBar, Grid } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Home from "@material-ui/icons/Home";
//import assets
import "./navbar.css";
//import utils, constants
import { history } from "../../utils/history";
import { Path } from "../../constants";

/**
 * Navbar component(header menu)
 * It is a common navbar menu, you can add more routes
 */
function Navbar() {
  return (
    <div>
      <AppBar position="fixed" className="wrapper">
        <Grid container>
          <Grid item xs={12}>
            <Toolbar>
              <div>
                <IconButton
                  color="inherit"
                  onClick={() => {
                    history.push(Path.ROOT);
                  }}
                >
                  <Home />
                </IconButton>
              </div>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}

export default Navbar;
