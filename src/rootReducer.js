import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import home from "./containers/HomePage/reducers/home";
import specificMovie from "./containers/SpecificMoviePage/reducers/specificMovie";
import {connectRouter} from "connected-react-router";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    home,
    specificMovie
  });
