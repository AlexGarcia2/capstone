import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    marginLeft:'5%',
    width: '85%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});
const fontSize={
  fontSize:'50px',
  color:'#25bda2'
}
const schld={
  color:'	#ff4d00'
}
const table={
  fontSize:'20px',
  color:'#25bda2'
}
const day={
  color:'#7c7c81'
}


let id = 0;
function createData(name, Morning, Afternoon, Evening) {
  id += 1;
  return { id, name, Morning, Afternoon, Evening};
}

const rows = [
  createData('Monday', '', '', 'Lost boys Practice 7pm-9pm'),
  createData('Tuesday', '', '', 'Spartans practice 7pm-9pm'),
  createData('Wednesday', '', '', 'Lost boys Practice 7pm-9pm'),
  createData('Thursday', '', '', 'Spartans practice 7pm-9pm'),
  createData('Friday', '', 'SRFC club meeting', ''),
  createData('Saturday', '', 'Home Game 12pm', ''),
  createData('Sunday', '', '', ''),
];

function CalendarBoard(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell style={fontSize}> March </TableCell>
            <TableCell style={table}>Morning</TableCell>
            <TableCell style={table}>Afternoon</TableCell>
            <TableCell style={table}>Evening</TableCell>
            <TableCell style={table}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell style={day} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={schld}>{row.Morning}</TableCell>
              <TableCell style={schld}>{row.Afternoon}</TableCell>
              <TableCell style={schld}>{row.Evening}</TableCell>
              <TableCell style={schld}></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

CalendarBoard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CalendarBoard);
