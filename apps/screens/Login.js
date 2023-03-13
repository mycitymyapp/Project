import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React,{ useRef,useState } from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View, TouchableOpacity, Image } from 'react-native';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../../config' ;
import firebase from 'firebase/compat/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
// function Login(props) {

  const Login = ({navigation}) => {

    
    const [mobileNumber, setmobileNumber] = useState('');
    const [code, setCode] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);

    const sendVerification = () => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
          .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
          .then(setVerificationId);
          setPhoneNumber('');
    };

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

    const handleLogin1 = async () => {
      const mobileNumber = '1234567890';
  try {
    const response = await fetch('https://your-api-endpoint.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mobileNumber }),
    });
    const result = await response.json();
    if (result.status === 'success') {
      await AsyncStorage.setItem('mobileNumber', mobileNumber);
      await AsyncStorage.setItem('isLoggedIn', 'true');
      onLogin();
    } else {
      // Show an error message
    }
  } catch (error) {
    // Handle network error
  }
};

const handleLogin = async () => {
  // const mobileNumber = 1234567890;
  await AsyncStorage.setItem('mobileNumber', mobileNumber);
  await AsyncStorage.setItem('isLoggedIn', 'true');
  navigation.navigate('Home2');
};

    console.log(mobileNumber);

    const submit = () => {
      if(phoneNumber!="")
      {
      navigation.navigate("Home2"); 
      }
      else{
       Alert.alert('Please fill all details');
      }
  }

    
    return (
        <View style={styles.container}>
          <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
            />
        <Image style={{alignItems:'center', width: 150, height:150, top: -50}} source={require("../assets/laptop.png")} />
        <Text style={{fontSize:15, top: -50, color:"#E4715A", fontWeight: '500'}}>Abh har dukan dikhega online</Text>
        {/* <Text style={{fontSize: 30, left: -40 }}>Login or Signup</Text> */}
        <Text style={{left: -50}}>
        <Text style={{fontSize: 30, fontWeight: "bold", fontWeight: "350"}}>Login</Text>
        <Text> or </Text>
        <Text style={{fontSize: 30, fontWeight: "bold", fontWeight: "350"}}>Signup</Text>
        </Text>
        <TextInput maxLength={13} style={styles.input} value={mobileNumber} onChangeText={setmobileNumber} placeholder="Enter Contact Number" keyboardType="numeric"/>
        <Text style={{fontSize: 15, width: 300}}>
        <Text>By continuing, I agree to the</Text>
        <Text style={{color: "#E4715A"}}> Terms of Use </Text>
        <Text>and</Text>
        <Text style={{color: "#E4715A"}}> Privacy Policy</Text>
        <Text>. </Text>
        </Text>
        {/* <Button style={{width: 300 }}
        title="Press me"
        color={"#E7694F"}
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
        <Button style={styles.button}
        title="Continue"
        onPress={() => Alert.alert('Simple Button pressed')}
      /> */}
      <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
    <Text style={{color:"white" , textAlign: "center", fontWeight: "bold"}}>Proceed</Text>
    </TouchableOpacity>
      <Text style={{fontSize: 15, top: 50}}>Welcome !! </Text>
      <Text style={{fontSize: 15, top: 50}}>Get you shop featured online</Text>
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
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300,
        borderRadius: 10,
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

export default Login;