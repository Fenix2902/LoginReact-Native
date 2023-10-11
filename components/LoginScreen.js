import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { TextInput, Avatar, Button} from "react-native-paper";
import { styles } from "../assets/styles/allstyles";
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword}from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";

export default function LoginScreen({navigation}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState('');
    const [showPass, setShowPass] = useState(false)
    const [messageColor, setMessageColor] = useState(true)
    //definir constantes para la autenticacion
    const app =initializeApp(firebaseConfig)
    const auth = getAuth(app)
    //Metodos para crear cuenta en firebase Authentication y SignIn
    const handleCreateAccount = ()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            //console.log(userCredential.user.providerData)
            setMessageColor(true)
            setMessage("Cuenta creada correctamente...")
        })
        .catch((error)=>{
            //console.log(error.message)
            setMessage('Error al crear la cuenta')
            setMessageColor(false)
        })
    }

    const handleSignIn = ()=>{
        signInWithEmailAndPassword(auth , email  , password )
        .then((userCredential)=>{
            setEmail("");
            setPassword("");
            navigation.navigate('Home',{email:email})
            //setMessage('conexion exitosa')
        })
        .catch((error)=>{
             setMessage("Usuario y/o contraseña inválidos");
             setMessageColor(false)
            // console.log(error.message)
        })
    }
    return(
        <View style={styles.container}>
            <Avatar.Image
                style={{ marginBottom: 20 }}
                size={100}
                source={require('../assets/imgs/imglogin.png')} />
            <View style={{ borderWidth: 2, borderColor: 'gray', borderRadius: 10, padding: 50 }}>
                <TextInput
                    autoFocus
                    label="Correo Electrónico"
                    left={<TextInput.Icon icon="email" />}
                    onChangeText={(email) => setEmail(email)}
                    value={email}
                />
                <TextInput
                    style={{ marginTop: 20 }}
                    label="Contraseña"
                    right={<TextInput.Icon icon={showPass ? "eye" : "eye-off"} onPress={()=>setShowPass(!showPass)} />}
                    secureTextEntry ={!showPass}
                    onChangeText={(password) => setPassword(password)}
                    value={password}
                />
                <Button
                    style={{ marginTop: 20, backgroundColor: '#CCE2F9' }}
                    icon="login"
                    mode="outlined"
                    onPress={handleSignIn}
                >
                    Iniciar Sesión
                </Button>
                <Button
                    style={{ marginTop: 20, backgroundColor: '#CCE2F9' }}
                    icon="account"
                    mode="outlined"
                    onPress={handleCreateAccount}
                >
                    Crear Cuenta
                </Button>
                <Text style={{marginTop: 5,color: messageColor ? 'green' : 'red'}}>{message}</Text>
            </View>
        </View>
    )
}