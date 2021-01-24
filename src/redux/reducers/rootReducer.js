import { combineReducers } from "redux";
import buildingsReducer from "./buildingsReducer";
import boilersReducer from "./boilersReducer";
import boilerTypesReducer from "./boilerTypesReducer";
import modalReducer from "./modalReducer";
import customersReducer from "./customersReducer";
import techniciansReducer from "./techniciansReducer";
import appointmentsReducer from "./appointmentsReducer";

const rootReducer = combineReducers({
  //here all the reducers
  modal: modalReducer,
  buildings: buildingsReducer,
  boilers: boilersReducer,
  boilerTypes: boilerTypesReducer,
  customers: customersReducer,
  technicians: techniciansReducer,
  appointments: appointmentsReducer,
});

export default rootReducer;
