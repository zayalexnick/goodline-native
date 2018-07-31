import * as React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { AsyncStorage } from 'react-native';

interface PropsInterface {

}

interface StateInterface {

}

export default class AuthCheckScene extends React.Component<PropsInterface & NavigationScreenProps, StateInterface>
{
    async componentDidMount()
    {
        this.props.navigation.navigate(!! await AsyncStorage.getItem('auth') ? 'Profile' : 'Auth')
    }

    render()
    {
        return (
            <View>
                <ActivityIndicator />
            </View>
        );
    }
}