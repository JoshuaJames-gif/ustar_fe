import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Profile from "../screens/Profile";
import Home from "../screens/Home";
import ChildLogin from "../screens/ChildLogin";

const SwitchNavigator = createSwitchNavigator(
  {
    ChildLogin: {
      screen: ChildLogin,
    },
    Home: {
      screen: Home,
    },
    Signup: {
      screen: Signup,
    },
    Login: {
      screen: Login,
    },

    Profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: "Home",
  }
);

export default createAppContainer(SwitchNavigator);
