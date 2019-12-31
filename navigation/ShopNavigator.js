import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import cartScreen from '../screens/shop/CartScreen';
import ordersScreen from '../screens/shop/OrdersScreen';

import Colors from '../constants/Colors';
import orders from '../store/actions/orders';

const productsNavigator = createStackNavigator(
	{
		ProductsOverview: ProductsOverviewScreen,
		ProductDetail: ProductDetailScreen,
		cart: cartScreen
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
			},

			headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
		}
	}
);
const ordersNavigator = createStackNavigator(
	{
		Orders: ordersScreen
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
			},

			headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
		}
	}
);
const shopNavigator = createDrawerNavigator(
	{
		products: productsNavigator,
		orders: ordersNavigator
	},
	{
		contentOptions: {
			headerTintColor: Colors.primary
		}
	}
);

export default createAppContainer(shopNavigator);
