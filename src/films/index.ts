import withRouter from "../navigation/subRouter";
import Film from './film';
import Films from './films';

export default withRouter({ List: Films, Record: Film });