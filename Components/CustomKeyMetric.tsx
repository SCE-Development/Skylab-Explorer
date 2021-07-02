import { Container, Grid, makeStyles } from "@material-ui/core";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { withStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    roundContainer: {
        borderRadius: '20px',
        backgroundColor: 'grey',
        width: 'fit-content',
        padding: '10px',
        maxWidth: '15em'
    },
    green: {
        color: 'green',
        fontSize: '5em'
    },
    red: {
        color: 'red'
    }
});

const styles = {
    roundContainer: {
        borderRadius: '20px',
        backgroundColor: 'grey',
        width: 'fit-content',
        padding: '10px',
        maxWidth: '15em'
    },
    green: {
        color: 'green',
        fontSize: '5em'
    },
    red: {
        color: 'red'
    }
};

function CustomKeyMetric({ isUp, classes }) {
    const style = useStyles();
    return(
        <Container className = {classes.roundContainer}>
            <h3>Commands made</h3>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <h1>12</h1>
                {
                    isUp
                    ? <ArrowDropUpIcon className = {classes.green} />
                    : <ArrowDropDownIcon className = {classes.green} />
                }
            </Grid>
            <h4>+30.0% (3) Better compared to last week</h4>
        </Container>
    );
}

export default withStyles(styles)(CustomKeyMetric);
