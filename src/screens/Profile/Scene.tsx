import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';
import { AuthStore } from '~/screens/Auth/Form';
import { NavigationContainerProps } from 'react-navigation';
import theme from '~/theme';

interface PropsInterface extends NavigationContainerProps {
    Auth: AuthStore
}

interface StateInterface {

}

@inject('Auth')
@observer
export default class ProfileScene extends React.Component<PropsInterface, StateInterface>
{
    componentDidMount()
    {
        this.redirect();
    }

    redirect = () => {
        const { authorized } = this.props.Auth;
        const { navigation } = this.props;
        
        if (!authorized) navigation.navigate('Auth');
    }

    _logout = async () => {
        const { navigation } = this.props;
        
        await this.props.Auth.logout();

        navigation.navigate('Auth');

    };

    render()
    {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Мне лень заполнять профиль :)</Text>
				<Button color={theme.colors.primary} title="Выйти" onPress={this._logout} />
			</View>
        );
    }
}