import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const filterOptions = [
  { type: "All", selected: true },
  { type: "Electronics", selected: false },
  { type: "Computers", selected: false },
  { type: "Mechanics", selected: false },
  { type: "Aeronautics", selected: false },
  { type: "Metallurgy", selected: false }
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function FilterVideos() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        filterOptions.map((filterOps) => {
            return (
              <Chip key={filterOps.type} label={filterOps.type} variant="outlined" />
            );
        })
      }
    </div>
  )
}
