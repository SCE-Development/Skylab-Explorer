import { Typography, Card, CardContent, Grid } from '@material-ui/core';
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
        <Card>
          <CardContent>
              <Typography gutterBottom>
                {title}
              </Typography>
              <Grid
                 container
                 direction="row"
                 justify="center"
                 alignItems="center"
             >
              <Typography variant ="h3">{number}</Typography>
                 {
                    isUp
                    ? <ArrowDropUpIcon className = {style.metricUp} />
                    : <ArrowDropDownIcon className = {style.metricDown} />
                 }
              </Grid>
              <Typography variant="p">
              <h4>+30.0% (3) Better compared to last week</h4>
              </Typography>
            </CardContent>
        </Card>
    );
}

