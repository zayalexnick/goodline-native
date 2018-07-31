import * as React from 'react';
import { inject, observer } from 'mobx-react';
import AuthStore from './store/AuthStore';
import { NavigationContainerProps } from 'react-navigation';
import { Container, Button, Error } from './styles';
import PendingEnum from '~/mobx/enums/PendingEnum';
import theme from '~/theme';
import Input from '~/components/Input';

interface PropsInterface extends NavigationContainerProps {
    Auth: AuthStore
}

interface StateInterface {
    login: string;
    password: string;
}

@inject('Auth')
@observer
export default class AuthForm extends React.Component<PropsInterface, StateInterface>
{
    state = {
		login: '',
		password: ''
	};

	_login = () => {
		this.props.Auth.login(this.state.login, this.state.password);
    };

    componentDidMount()
    {
        this.redirect();
    }
    
    componentWillUpdate()
    {
        this.redirect();
    }

    redirect = () => {
        const { authorized } = this.props.Auth;
        const { navigation } = this.props;
        
        if (authorized) navigation.navigate('Profile');
    }

	render()
	{
        const { pending, error } = this.props.Auth;

		return (
			<Container source={require('~/assets/background.jpg')} style={{ flex: 1 }}>
				{ pending === PendingEnum.Failed ? <Error>{ error }</Error> : null }
				<Input label="Логин" value={this.state.login} autoFocus onChangeText={(login: string) => this.setState({ login })} />
				<Input label="Пароль" value={this.state.password} secureTextEntry onChangeText={(password: string) => this.setState({ password })} />
				<Button title="Войти" color={theme.colors.primary} onPress={this._login} />
			</Container>
		);
	}
}