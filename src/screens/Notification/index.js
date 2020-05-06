import React, {useState} from "react"
import { Container, Title, Message } from "./styles";

const Notification = ({navigation}) => {
    const [title, setTitle] = useState(navigation.state.params.notification.title || " ");
    const [body, setBody] = useState(navigation.state.params.notification.description  || " ");

    return(
        <Container>
            <Title>{title}</Title>
            <Message>{description}</Message>
        </Container>
    )
};

export default Notification;