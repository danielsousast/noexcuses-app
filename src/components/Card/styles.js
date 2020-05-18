import styled from 'styled-components/native';

export const Container = styled.View`
    width: ${props=>props.width || '50px'};
    height: ${props=>props.width || '50px'};
    justify-content:center;
    align-items:center;
    background:#1e222b;
    margin:4px;
    border-radius:4px;
`;

export const Text = styled.Text`

`;

