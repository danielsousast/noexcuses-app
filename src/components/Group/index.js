import React from 'react';

import { Container, Details, Img, Title, Description } from './styles';

const Group = (props) => {
    return (
        <Container style={props.style}>
            <Details>
                <Title>{props.data.name}</Title>
            </Details>
        </Container>
    )
}

export default Group;