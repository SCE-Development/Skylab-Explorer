import { makeStyles, MenuItem, Select } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
    inheritStyle: {
        backgroundColor: 'inherit',
        color: 'inherit',
    }
});
export default function DropdownFrequency() {
    const classes = useStyles();
    const [value, setValue] = useState("daily");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return(
        <Select
            className = {classes.inheritStyle} value = {value}
            onChange = {handleChange}>
            <MenuItem value = "daily">Daily</MenuItem>
            <MenuItem value = "weekly">Weekly</MenuItem>
            <MenuItem value = "monthly">Monthly</MenuItem>
        </Select>
    );
}
