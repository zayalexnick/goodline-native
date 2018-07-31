import * as React from 'react';
import { Container, Title } from './styles';

interface PropsInterface {

}

interface StateInterface {

}

export default class MainScene extends React.Component<PropsInterface, StateInterface>
{
    render(): JSX.Element
    {
        return (
            <Container source={require('~/assets/background.jpg')}>
                <Title>Добро пожаловать</Title>
            </Container>
        );
    }
}