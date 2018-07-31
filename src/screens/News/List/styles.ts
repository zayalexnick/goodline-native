import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex: 1;

    margin-bottom: 10px;

    background: ${ ({ theme }) => theme.colors.background };
`;

export const Item = styled.View`
	margin: 10px 0;
	background: ${ ({ theme }) => theme.colors.white };
`;

export const Title = styled.Text`
	padding: 10px;
	
	/*font-family: 'OpenSansMedium';*/
	font-size: 16px;
`;

export const Image = styled.Image`
	width: ${ Dimensions.get('window').width };
	height: ${ Dimensions.get('window').width / 1.5 };
`;