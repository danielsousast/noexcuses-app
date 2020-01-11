import React from 'react';

import { View } from 'react-native';
import { Button, ButtonTitle } from './styles';

const DefaultButton = (props) => {
    return(
        <Button onPress={props.onPress}>
            <ButtonTitle>{props.title || "Title"}</ButtonTitle>
        </Button>
    )
}

export default DefaultButton;
