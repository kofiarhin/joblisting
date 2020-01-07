import { createAppContainer, createSwitchNavigator } from "react-navigation";
import HomeScreen from "./components/screens/home";
import DetailsScreen from "./components/screens/details";

const MainNav = createSwitchNavigator({

    Home: {
        screen: HomeScreen
    },
    Details: {
        screen: DetailsScreen
    }
})

export default createAppContainer(MainNav);