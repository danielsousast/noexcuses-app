import {createAppContainer} from "react-navigation";
import MainNavigator from "./navigations/MainNavigator";

const App = createAppContainer(MainNavigator);

export default App;