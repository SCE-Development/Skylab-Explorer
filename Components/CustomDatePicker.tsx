import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    inheritStyle: {
        backgroundColor: 'white',
        color: 'inherit',
        width: 'fit-content'
    }
});

export default function CustomDatePicker() {
    const classes = useStyles();

    /*  guide: https://material-ui-pickers.dev/
        Based on the guide, @date-io need to be v1.x version
        https://material-ui-pickers.dev/getting-started/installation#peer-library
        https://stackoverflow.com/questions/59600125/cannot-get-material-ui-datepicker-to-work
    */
    const [selectedDate, handleDateChange] = useState(new Date('2014-08-18T21:11:54'));

    return(
        <div className = {classes.inheritStyle}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <DatePicker
                    value = {selectedDate}
                    onChange = {handleDateChange}
                />
            </MuiPickersUtilsProvider>
        </div>
    );
}
