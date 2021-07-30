import { useState } from 'react';
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
    color: 'primary',
  },
}));
export default function DatePickers() {
  const classes = useStyles();
  const [date, setDate] = useState('2020-05-28');

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
