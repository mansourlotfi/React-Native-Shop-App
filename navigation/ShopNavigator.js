import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const defaultNavOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
	},

	headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const ProductsNavigator = createStackNavigator(
	{
		ProductsOverview: ProductsOverviewScreen,
		ProductDetail: ProductDetailScreen,
		Cart: CartScreen
	},
	{
		navigationOptions: {
			drawerIcon: (drawerConfig) => (
				<Ionicons
					name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
					size={23}
					color={drawerConfig.tintColor}
				/>
			)
		},
		defaultNavigationOptions: defaultNavOptions
	}
);

const OrdersNavigator = createStackNavigator(
	{
		Orders: OrdersScreen
	},
	{
		navigationOptions: {
			drawerIcon: (drawerConfig) => (
				<Ionicons
					name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
					size={23}
					color={drawerConfig.tintColor}
				/>
			)
		},
		defaultNavigationOptions: defaultNavOptions
	}
);

const ShopNavigator = createDrawerNavigator(
	{
		Products: ProductsNavigator,
		Orders: OrdersNavigator
	},
	{
		contentOptions: {
			activeTintColor: Colors.primary
		}
	}
);

export default createAppContainer(ShopNavigator);
