import React from 'react';

import { View } from 'react-native';
import { Container, Title, Body, Text } from './styles';

// import { Container } from './styles';

const Notification = (props) => {
    return(
        <Container>
            <Title>{props.data.title}</Title>
            <Body>
                <Text>{props.data.body}</Text>
            </Body>
        </Container>
    )
}

export default Notification;
