import styled from 'styled-components/native';


export const Container = styled.ImageBackground`
	flex: 1;
	justify-content: center;
	
	padding: 20px;
`;

export const Button = styled.Button`
	height: 60px;
	
	background-color: ${ ({ theme }) => theme.colors.primary };
`;

export const Error = styled.Text`
	margin-bottom: 10px;
	padding: 10px;
	color: ${ ({ theme }) => theme.colors.white };
	
	background-color: ${ ({ theme }) => theme.colors.error };	
`;