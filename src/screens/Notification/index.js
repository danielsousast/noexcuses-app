import React, {useState} from "react"
import OneSignal from "react-native-onesignal";
import { Container, Title, Message } from "./styles";

const Notification = (props) => {
    const [title, setTitle] = useState(props.navigation.state.params.title || " ");
    const [message, setMessage] = useState(props.navigation.state.params.title || " ");

    return(
        <Container>
            <Title>{title}</Title>
            <Message>{message}</Message>
        </Container>
    )
};

export default Notification;