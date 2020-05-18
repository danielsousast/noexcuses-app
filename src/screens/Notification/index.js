import React, {useState} from "react"
import { WebView } from 'react-native-webview';
import { Container, Title, Message } from "./styles";

const Notification = ({navigation, route}) => {
    const { id } = route.params;
    alert(id)
    return(
        <WebView
            source={{ uri: `https://devkode.com.br/api/notification/${id}` }}
        >

        </WebView>
    )
};

export default Notification;