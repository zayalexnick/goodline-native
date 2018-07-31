import * as React from 'react';
import { NavigationContainerProps } from 'react-navigation';
import { Container, Description } from './styles';

interface PropsInterface {

}

interface StateInterface {

}

export default class NewsItemScene extends React.Component<PropsInterface & NavigationContainerProps, StateInterface>
{
    render()
	{
		const { navigation } = this.props;

		return (
			<Container source={{ uri: navigation.getParam('urlToImage') }} style={{ flex: 1 }}>
				<Description>{ navigation.getParam('description') }</Description>
			</Container>
		);
	}
}