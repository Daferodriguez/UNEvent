import React from "react";
import PropTypes from "prop-types";
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView, KeyboardAvoidingView } from "react-native";
//import styles from '../../../assets/styles/general/styles';
import styles  from './styles';
import Register from "../../common/Register";
import Images from '../../../assets/Images';

const RegisterView = ({ goSuccess }) => {
  	return (
	    <ImageBackground source={Images.backmap} style={styles.backmap}>
	    	<KeyboardAvoidingView
		      behavior="padding"
		    >
		    	<ScrollView>
		    		<View style={styles.container}>
		          	<Image source={Images.unLogo} style={styles.logo}></Image>
			    		<Text style={styles.title}>UNEvent</Text>
						<Register registrar={goSuccess}></Register>
			    	</View>
		    	</ScrollView>
		    </KeyboardAvoidingView>
	    </ImageBackground>
  	);
};

export default RegisterView;
