import React, { Component } from 'react';
import { Animated, TextInputProps } from 'react-native';
import styled from 'styled-components/native';

const Group = styled.View`
	position: relative;
	
	height: 50px;
	
	margin-bottom: 10px;
	border-bottom-color: ${ ({ theme }) => theme.colors.primary };
`;

const Label = styled(Animated.Text)<{ focused: boolean }>`
	color: ${ ({ focused, theme }) => focused ? theme.colors.primary : theme.colors.white };
`;

const InputComponent = styled.TextInput<{ focused: boolean }>`
	font-size: 18px;
	color: ${ ({ theme }) => theme.colors.white };
	
	border-bottom-width: 1px;
	border-color: ${ ({ focused, theme }) => focused ? theme.colors.primary : 'transparent' };
`;

interface PropsInterface extends TextInputProps {
    label: string;
    value: string;
}

interface StateInterface {
    labelPosition: any,
    labelFontSize: any,
    focused: boolean;
}

export default class Input extends React.Component<PropsInterface, StateInterface>
{
	state = {
		labelPosition: new Animated.Value(22),
        labelFontSize: new Animated.Value(18),
        focused: false
	};

	_focusHandler = () => {
		this.setState({ focused: true });
		Animated.timing(this.state.labelPosition, { toValue: 0, duration: 300 }).start();
		Animated.timing(this.state.labelFontSize, { toValue: 13, duration: 300 }).start();
	};

	_blurHandler = () => {
		this.setState({ focused: false });

		if (this.props.value === '') {
			Animated.timing(this.state.labelPosition, { toValue: 22, duration: 300 }).start();
			Animated.timing(this.state.labelFontSize, { toValue: 18, duration: 300 }).start();
		}
	};

	render()
	{
		const { label } = this.props;
		const { focused } = this.state;

		return (
			<Group>
				<Label style={{ top: this.state.labelPosition, fontSize: this.state.labelFontSize }} focused={focused}>{ label }</Label>
				<InputComponent underlineColorAndroid="transparent" { ...this.props } onFocus={this._focusHandler} onBlur={this._blurHandler} focused={focused} />
			</Group>
		);
    }
}