import { Alert, Image, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { signUpPageStyles } from "../../styles/styles"
import { Button } from "react-native";
import { DARK_COLORS, GRAY } from "../../styles/Colors";
import { StackNavigationProp } from '@react-navigation/stack';
import { userRegister } from "../controllers/AuthenticationController";
import { useState } from "react";
import { emailIsValid, nameIsValid, passwordIsValid } from "../models/UserModel";

interface Props {
  navigation: StackNavigationProp<any>;
}

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = () => {
        if (!nameIsValid(firstName) || !nameIsValid(lastName)) {
            Alert.alert("Please enter a valid name (without invalid characters)");
            return;
        }
        if (!emailIsValid(email)) {
            Alert.alert("Please enter a valid email address.");
            return;
        }
        if (!passwordIsValid(password)) {
            Alert.alert("Password must be at least 6 characters and only consist of alphanumeric characters and the following characters: ~!@#$%^&*()_+");
            return;
        }
        userRegister({firstName, lastName, email, password}).then(result=>{
            if (result.result === true) {
                Alert.alert(
                    'Success',
                    'Account created',
                    [
                      { text: 'OK', onPress: () => 
                      navigation.goBack() },
                    ]
                );
            }else {

            }
        }).catch(e=>{
            console.error(e);
            Alert.alert("Unexpected error");
        });
    }

    const removeSelf = () => {
        navigation.goBack();
    }

    return (
        <>
        <View style={signUpPageStyles.mainBody}>
            <Image style={signUpPageStyles.headerImage} source={require("../../assets/images/rainy-black-cloud.png")} resizeMode="contain"></Image>

            <Text style={signUpPageStyles.header}>Create an Account</Text>
            <View style={signUpPageStyles.inputView}>
                <TextInput style={signUpPageStyles.inputTextField} placeholderTextColor={GRAY.s600} placeholder="Firstname" onChangeText={text => setFirstName(text)}/>
                <TextInput style={signUpPageStyles.inputTextField} placeholderTextColor={GRAY.s600} placeholder="Lastname" onChangeText={text => setLastName(text)}/>
                <TextInput style={signUpPageStyles.inputTextField} placeholderTextColor={GRAY.s600} keyboardType="email-address" textContentType="emailAddress" placeholder="Email" onChangeText={text => setEmail(text)}/>
                <TextInput style={signUpPageStyles.inputTextField} placeholderTextColor={GRAY.s600} secureTextEntry={true} autoCapitalize="none" autoCorrect={false} placeholder="password" onChangeText={text => setPassword(text)}/>
            </View>
                <View style={signUpPageStyles.buttonView}>
                <View style={signUpPageStyles.signUpButtonView}><Pressable style={signUpPageStyles.signUpButton} onPress={handleSignUp}><Text style={signUpPageStyles.signUpButtonText}>Sign Up</Text></Pressable></View>
                <View style={signUpPageStyles.loginView}>
                    <Text style={signUpPageStyles.loginText}>Already Have an Account? <TouchableOpacity onPress={removeSelf} ><Text style={signUpPageStyles.loginAnchorText}>Log In</Text></TouchableOpacity></Text>
                </View>
                </View>
        </View>
        </>
    )
};

export default SignUpScreen;