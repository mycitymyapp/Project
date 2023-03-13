import React,{ useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View, TouchableOpacity, Image } from 'react-native';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../../config' ;
import firebase from 'firebase/compat/app';
// function Otp(props) {

  const Otp = ({navigation}) => {
    const pin1Ref = useRef(null);
    const pin2Ref = useRef(null);
    const pin3Ref = useRef(null);
    const pin4Ref = useRef(null);
    const pin5Ref = useRef(null);
    const pin6Ref = useRef(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);

    const [pin1, setPin1] = useState("");
    const [pin2, setPin2] = useState("");
    const [pin3, setPin3] = useState("");
    const [pin4, setPin4] = useState("");
    const [pin5, setPin5] = useState("");
    const [pin6, setPin6] = useState("");

    const confirmCode = () => {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        code
      );
      firebase
        .auth()
        .signInWithCredential(credential)
        .then(() => {
          setCode('');
      })
      .catch((error) => {
        // show an alert in case of error
        alert(error);
      })
      Alert.alert(
        'Login Successful. Welcome to Dashboard.',
      );
    };
    
    console.log(pin1, pin2, pin3, pin4, pin5, pin6);

    const submit = () => {
      if(pin1!="" && pin2!="" && pin3!="" && pin4!="" && pin5!="" && pin6!="")
      {
      navigation.navigate("Home"); 
      }
      else{
       Alert.alert('Please fill all details');
      }
  }
    
  
    return (
        <View style={styles.container}>
          <Image style={{width: 100, height:100, top: -50, left: -100}} source={require("../assets/otp.png")} />
            <Text style={{fontSize: 30, fontWeight: "bold", fontWeight: "350" ,left: -50, top: -20}}>Verify with OTP</Text>
            <Text style={{left: -88, fontWeight: "100", top: -20}}>sent to 9167267216</Text>
        <View style= {{justifyContent : "space-evenly" , flexDirection: "row"}}>

      <TextInput 
          ref={pin1Ref} maxLength={1} style={styles.input}
          value={pin1} onChangeText={ (pin1) => {
            setPin1(pin1);
            if (pin1!="") {
          pin2Ref.current.focus();
        }
        }} keyboardType="numeric"/>

      <TextInput 
          ref={pin2Ref} maxLength={1} style={styles.input}
          value={pin2} onChangeText={ (pin2) => {
            setPin2(pin2);
            if (pin2!="") {
          pin3Ref.current.focus();
        }
        }} keyboardType="numeric"/>

      <TextInput 
          ref={pin3Ref} maxLength={1} style={styles.input}
          value={pin3} onChangeText={ (pin3) => {
            setPin3(pin3);
            if (pin3!="") {
          pin4Ref.current.focus();
        }
        }} keyboardType="numeric"/>

      <TextInput 
          ref={pin4Ref} maxLength={1} style={styles.input}
          value={pin4} onChangeText={ (pin4) => {
            setPin4(pin4);
            if (pin4!="") {
          pin5Ref.current.focus();
        }
        }} keyboardType="numeric"/>

      <TextInput 
          ref={pin5Ref} maxLength={1} style={styles.input}
          value={pin5} onChangeText={ (pin5) => {
            setPin5(pin5);
            if (pin5!="") {
          pin6Ref.current.focus();
        }
        }} keyboardType="numeric"/>

        <TextInput 
          ref={pin6Ref} maxLength={1} style={styles.input}
          value={pin6} onChangeText={ (pin6) => {
            setPin6(pin6);
        //     if (pin1!="") {
        //   pin2Ref.current.focus();
        // }
        }} keyboardType="numeric"/>


        {/* <TextInput maxLength={1} style={styles.input} value={pin2} onChangeText={ (actualdata) => setPin2(actualdata)} keyboardType="numeric"/>
        <TextInput maxLength={1} style={styles.input} value={pin3} onChangeText={ (actualdata) => setPin3(actualdata)} keyboardType="numeric"/>
        <TextInput maxLength={1} style={styles.input} value={pin4} onChangeText={ (actualdata) => setPin4(actualdata)} keyboardType="numeric"/>
        <TextInput maxLength={1} style={styles.input} value={pin5} onChangeText={ (actualdata) => setPin5(actualdata)} keyboardType="numeric"/>
        <TextInput maxLength={1} style={styles.input} value={pin6} onChangeText={ (actualdata) => setPin6(actualdata)} keyboardType="numeric"/> */}
        


        </View> 
      <TouchableOpacity style={styles.button} onPress={() => confirmCode()}>
    <Text style={{color:"white" , textAlign: "center", fontWeight: "bold"}}>Verify</Text>
    </TouchableOpacity>
    <Text>
      <Text style={{fontSize: 15, top: 50}}>I didn't receive a code.</Text>
      <Text style={{color: "#E4715A"}}>Resend in 00.25</Text>
      </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        textAlign: "center",
         justifyContent: "center",
         alignItems: "center",
         

    },

    input: {
        height: 60,
        margin: 4,
        borderWidth: 1,
        // padding: 15,
        width: 44,
        borderRadius: 10,
        textAlign: "center"
      },

      button: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300,
        borderRadius: 10,
        backgroundColor: "#E4715A",
        
        
        
    },

})

export default Otp;