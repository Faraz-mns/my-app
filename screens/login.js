import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ImageBackground,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const Submitlogin = () => {
    if (!validateEmail(username)) {
      Alert.alert("Login Error", "Invalid Email Address!");
    } else if (password.length < 6) {
      Alert.alert(
        "Login Error",
        "Password must be at least 6 characters long!"
      );
    } else {
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container1}>
      <ImageBackground
        source={require("../assets/pictures/bg 2.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.block2}>
          <View style={styles.container}>
            <Text style={styles.h1}>Sign In</Text>
            <View style={styles.main}>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color="red"
                  style={styles.icon}
                />
                <TextInput
                  style={styles.input}
                  value={username}
                  placeholder="Email"
                  placeholderTextColor="#999"
                  onChangeText={(value) => setUsername(value)}
                />
              </View>

              <View style={styles.inputContainer}>
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color="red"
                  style={styles.icon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#999"
                  value={password}
                  secureTextEntry={true}
                  autoCorrect={false}
                  onChangeText={(value) => setPassword(value)}
                />
              </View>
            </View>
            <TouchableHighlight
              style={styles.loginbtn}
              underlayColor="#8e1a1c"
              onPress={Submitlogin}
            >
              <Text style={styles.logintxt}>LOGIN</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.bottomrow}>
            <View>
              <TouchableHighlight style={styles.itemsb}>
                <Text style={styles.txt}>Forgotten Password?</Text>
              </TouchableHighlight>
            </View>
            <TouchableHighlight style={styles.itemsb}>
              <Text style={styles.txt1}>Sign Up</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },
  block2: {
    backgroundColor: "white",
    justifyContent: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
    alignItems: "center",
    width: "100%",
  },
  container: {
    paddingHorizontal: 24,
    justifyContent: "center",
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "red",
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    fontSize: 14,

    height: 50,
  },
  h1: {
    fontSize: 30,
    color: "#b32122",
    marginBottom: 10,
    textAlign: "center",
  },
  loginbtn: {
    backgroundColor: "#b32122",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  logintxt: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  bottomrow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center'
  },
  itemsb:{
    padding:20, 
  },
  txt:{
    fontFamily:'Poppins-Light',
    fontSize:12,
    borderColor:"#b32122",
    borderBottomWidth:1,
    color:"#b32122",
  },
  txt1:{
    fontFamily:'Poppins-Regular',
    fontSize:16,
    
   
  }
});
