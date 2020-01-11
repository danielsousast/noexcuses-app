import {createSwitchNavigator} from "react-navigation";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Notification from "../screens/Notification"

const MainNavigator = createSwitchNavigator({
    Login,
    Home,
    Notification
});

export default MainNavigator;