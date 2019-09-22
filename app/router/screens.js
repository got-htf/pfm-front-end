import Home from '../containers/Home';
import CashFlow from '../containers/CashFlow';
import Pfm from '../containers/Pfm';
import Transfer from '../containers/Transfer';
import More from '../containers/More';
import AddPackage from '../containers/AddPackage';
import { createStackNavigator } from 'react-navigation-stack';

const HomeStack = createStackNavigator(
    {
        Home: Home,
        AddPackage: AddPackage,
    },
    {
        initialRouteName: 'Home',
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);

export const bottomTabScreen = {
    Home: HomeStack,
    CashFlow: CashFlow,
    PFM: Pfm,
    Transfer: Transfer,
    More: More,
}