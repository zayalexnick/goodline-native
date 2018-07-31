import * as React from 'react';

import { Item, Title, Image } from './styles';
import Touchable from '~/components/Touchable';
import ItemInterface from '~/screens/News/interfaces/ItemInterface';

interface PropsInterface extends ItemInterface {
    goTo: Function
}

export default ({ title, description, urlToImage, goTo }: PropsInterface) => (
	<Touchable onPress={() => goTo({ title, description, urlToImage })}>
		<Item>
			<Image source={{ uri: urlToImage }} resizeMode="cover" />
			<Title>{ title }</Title>
		</Item>
	</Touchable>
);