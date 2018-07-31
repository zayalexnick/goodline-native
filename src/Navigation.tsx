import * as React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import MainScreen from '~/screens/Main';
import NewsListScreen from '~/screens/News/List';
import NewsItemScreen from '~/screens/News/Item';
import AuthFormScene from '~/screens/Auth/Form';
import AuthCheckScene from '~/screens/Auth/Check';
import ProfileScene from '~/screens/Profile';

import theme from '~/theme';

export default createBottomTabNavigator(
    {
        Main: {
            screen: MainScreen,
            navigationOptions: () => ({
                title: 'Главная',
                tabBarIcon: ({ tintColor }:{ tintColor: string }) => <Icon name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} size={26} color={tintColor} />
            })
        },
        News: {
            screen: createStackNavigator(
                {
                    List: {
                        screen: NewsListScreen,
                        navigationOptions: () => ({
                            title: 'Новости',
                            headerTintColor: theme.colors.white,
                            headerStyle: {
                                backgroundColor: theme.colors.primary
                            }
                        })
                    },
                    Item: {
                        screen: NewsItemScreen,
                        navigationOptions: () => ({
                            title: 'Новость',
                            headerTintColor: theme.colors.white,
                            headerStyle: {
                                backgroundColor: theme.colors.primary
                            }
                        })
                    },
                },
                {
                    initialRouteName: 'List'
                }
            ),
            navigationOptions: () => ({
                title: 'Новости',
                tabBarIcon: ({ tintColor }:{ tintColor: string }) => <Icon name={Platform.OS === 'ios' ? 'ios-paper' : 'md-paper'} size={26} color={tintColor} />,
                headerTintColor: theme.colors.white,
                headerStyle: {
                    backgroundColor: theme.colors.primary
                }
            })
        },
        Private: {
            screen: createSwitchNavigator(
                {
                    Auth: AuthFormScene,
                    AuthCheck: AuthCheckScene,
                    Profile: ProfileScene
                },
                {
                    initialRouteName: 'AuthCheck'
                }
            ),
            navigationOptions: () => ({
                title: 'Профиль',
                tabBarIcon: ({ tintColor }:{ tintColor: string }) => <Icon name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} size={26} color={tintColor} />
            })
        }
    },
    {
        tabBarOptions: {
            activeTintColor: theme.colors.primary,
            inactiveTintColor: theme.colors.white,
            activeBackgroundColor: theme.colors.white,
            labelStyle: {
                fontSize: 12
            },
            style: {
                backgroundColor: theme.colors.primary
            }
        }
    }
)