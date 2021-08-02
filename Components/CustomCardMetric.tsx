import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles({
    metricUp: {
        color: 'green',
        fontSize: '5em'
    },
    metricDown: {
        color: 'red',
        fontSize: '5em'
    }
});

export default function CustomKeyMetric({ title = "Default title", number = 0, isUp }) {
    const style = useStyles();
    return(
        <Card>
          <CardContent>
              <Typography>
                {title}
              </Typography>
              < br/>
              <Grid
                 container
                 direction="row"
                 justifyContent="center"
                 alignItems="center"
             >
              <Typography variant ="h3">{number}</Typography>
                 {
                    isUp
                    ? <ArrowDropUpIcon className = {style.metricUp} />
                    : <ArrowDropDownIcon className = {style.metricDown} />
                 }
              </Grid>
              < br/>
              <Typography>
              +30.0% (3) Better compared to last week
              </Typography>
            </CardContent>
        </Card>
    );
}
