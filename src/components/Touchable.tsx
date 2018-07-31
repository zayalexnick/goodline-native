import React from 'react';
import { Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

export default (props: any) =>
	Platform.OS === 'ios' ?
		<TouchableOpacity { ...props }>{ props.children }</TouchableOpacity> :
		<TouchableNativeFeedback { ...props }>{ props.children }</TouchableNativeFeedback>