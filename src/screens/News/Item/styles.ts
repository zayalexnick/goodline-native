import styled from 'styled-components/native';
import { rgba } from 'polished';

export const Container = styled.ImageBackground`
	flex: 1;
	justify-content: center;
	align-items: center;
	
	padding: 10px;
`;

export const Description = styled.Text`
	padding: 10px;
	/*font-family: 'OpenSansLight';*/
	font-size: 15px;
	line-height: 24px;
	color: ${ ({ theme }) => theme.colors.white };
	
	background: ${ ({ theme }) => rgba(theme.colors.primary, 0.8) as string };
`;