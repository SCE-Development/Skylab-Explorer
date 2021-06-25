import SampleLineChart from '../Components/SampleLineChart';
import SamplePieChart from '../Components/SamplePieChart';
import SimpleAreaChart from '../Components/SimpleAreaChart';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => {

});

export default function Graphs() {
    return(
        <Grid container>
            <Grid item>
                <SampleLineChart/>
            </Grid>
            <Grid item>
                <SimpleAreaChart />
            </Grid>
            <Grid item>
                <SamplePieChart />
            </Grid>
        </Grid>
    );
}
