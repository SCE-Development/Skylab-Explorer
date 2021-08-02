import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    // color: 'primary',
    // background: '#2c2f33',
  },
}));
export default function DatePickers({ dateCallback }) {
  const classes = useStyles();
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  useEffect(() => {
    dateCallback(date);
  }, [date]);

  return (
    <form className={classes.container} noValidate>
      <TextField
        color="secondary"
        id="date"
        type="date"
        defaultValue="2020-05-24"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
