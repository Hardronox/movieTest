import {combineReducers} from "redux";
import home from "./containers/HomePage/reducers/home";
import specificMovie from "./containers/SpecificMoviePage/reducers/specificMovie";
import {connectRouter} from "connected-react-router";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    home,
    specificMovie
  });
