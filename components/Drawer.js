
import React from "react";

import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import SignIn from "../app/signin";
import Landing from "./common/landing/Landing";
import Home from "../app/home";
import { COLORS } from "../constants";
import {useSelector,useDispatch} from "react-redux"
import { loginStart, loginSuccess } from "../redux/reducer/user";
import { login } from "../redux/action/user";
import Signup from "../app/Signup";

const Drawer = () => {
  const isLoggedIn = false;

  const { user } = useSelector(state => state.user)
  const dispatch=useDispatch()
console.warn(user)
  const Drawer = createDrawerNavigator();
  return (
    
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        
      }}
    >
        <Drawer.Screen name="home" component={Home} />
      <Drawer.Screen name="signin" component={SignIn} dispatch={dispatch} login={login} />
      <Drawer.Screen name="signup" component={Signup} dispatch={dispatch} login={login} />
    </Drawer.Navigator>
  );
};

export default Drawer;
