import Dashboard from "../../screens/Dashboard";
import SignIn from "../../screens/SignIn";
import SignUp from "../../screens/SignUp";
import PathConstants from "./pathConstants";

export const PublicRouteConstants = [
  {
    path: PathConstants.signIn,
    component: SignIn,
  },
  {
    path: PathConstants.signUp,
    component: SignUp,
  },
];

export const PrivateRouteConstants = [
  {
    path: PathConstants.dashboard,
    component: Dashboard,
  },
];
