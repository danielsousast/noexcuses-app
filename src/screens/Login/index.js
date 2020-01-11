import React, { useState, useEffect } from "react"
import OneSignal from "react-native-onesignal";
import { Container, Input, Link, LinkTitle, Loading, Logo } from './styles';
import DefaulButton from "../../components/DefaultButton";
import {Platform} from "react-native";

const Login = (props) => {
    const [loading, setLoading] = useState(false);
    const [notificationData, setNotificationData] = useState({});
    //334052c2-8d6f-4de4-a6f8-c4acda3aba9f
    useEffect(()=>{
        OneSignal.init("390229d4-934b-458e-8969-a863ceef7497");
        OneSignal.addEventListener('received', onReceived);
        OneSignal.addEventListener('opened', onOpened);
        OneSignal.setExternalUserId('1');
    },[])

    function onReceived(notification){
        //console.log("Notification received: ", notification);
    };
    function onOpened(openResult){
        const title = openResult.notification.payload.title;
        const body = openResult.notification.payload.body

        //setNotificationData(data);
        //console.log('Message: ', openResult.notification.payload.body);
        //console.log('Data: ', openResult.notification.payload.additionalData);
        //console.log('openResult: ', openResult)
        props.navigation.navigate("Notification", {title:title, body:body});
    }

    return(
        <Container behavior={Platform.OS === "ios"? "padding": null}>
            <Logo>NoExcuses</Logo>
            <Input placeholder="Email" 
               autoCapitalize="none"
               keyboardType="email-address"
               keyboardAppearance="default"
            />
            <Input placeholder="Senha"
   
            />
            <DefaulButton title="Logar" onPress={() => props.navigation.navigate('Home')}/>
            <Link>
                <LinkTitle>Cadastre-se</LinkTitle>
            </Link>

            {loading &&
                <Loading>
                    <ActivityIndicator size="large" color="#fff"/>
                </Loading>  
            }
        </Container>
    )
};

export default Login;