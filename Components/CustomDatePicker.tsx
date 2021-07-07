import { KeyboardDatePicker, MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useState } from 'react';

export default function CustomDatePicker() {
    // guide: https://material-ui-pickers.dev/
    const [selectedDate, handleDateChange] = useState(new Date());

    return(
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker value = {selectedDate} onChange = {handleDateChange} />
            </MuiPickersUtilsProvider>
        </div>
    );
}
