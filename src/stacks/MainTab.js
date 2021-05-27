import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Search from '../screens/Search'
import Shopping from '../screens/Shopping'
import { Text, View, Image } from 'react-native';




const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator
        tabBarOptions={{
            showLabel: false,
            style: {
                backgroundColor: '#2a2e4a'
            }
        }}>
        <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center', top: 2 }}>
                    <Image
                        source={require('../assets/home.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#ffff' : '#767886',

                        }}
                    />
                    <Text
                        style={{ color: focused ? '#ffff' : '#767886', fontSize: 12 }}>
                        Home
                    </Text>
                </View>
            ),
        }}
        />
        <Tab.Screen name="Shopping" component={Shopping} options={{
            tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center', top: 2 }}>
                    <Image
                        source={require('../assets/shoppingCart.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#ffff' : '#767886',

                        }}
                    />
                    <Text
                        style={{ color: focused ? '#ffff' : '#767886', fontSize: 12 }}>
                        Shopping Cart
                    </Text>
                </View>
            ),
        }}
        />
        <Tab.Screen name="Search" component={Search} options={{
            tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center', top: 2 }}>
                    <Image
                        source={require('../assets/search.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#ffff' : '#767886',

                        }}
                    />
                    <Text
                        style={{ color: focused ? '#ffff' : '#767886', fontSize: 12 }}>
                        Search
                    </Text>
                </View>
            ),
        }}
        />
    </Tab.Navigator>
)