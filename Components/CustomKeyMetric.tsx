import { Container, Grid, makeStyles } from "@material-ui/core";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles({
    roundContainer: {
        borderRadius: '20px',
        backgroundColor: 'grey',
        width: 'fit-content',
        maxWidth: '15em',
    },
    metricUp: {
        color: 'green',
        fontSize: '5em'
    },
    metricDown: {
        color: 'red',
        fontSize: '5em'
    }
});

export default function CustomKeyMetric({ title = "Default title", number = 12, isUp }) {
    const style = useStyles();
    return(
        <Container className = {style.roundContainer}>
            <h3>{title}</h3>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <h1>{number}</h1>
                {
                    isUp
                    ? <ArrowDropUpIcon className = {style.metricUp} />
                    : <ArrowDropDownIcon className = {style.metricDown} />
                }
            </Grid>
            <h4>+30.0% (3) Better compared to last week</h4>
        </Container>
    );
}

