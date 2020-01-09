import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  tableContainer: {
    marginTop: 100
  },
  table: {
    minWidth: 650
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}));
