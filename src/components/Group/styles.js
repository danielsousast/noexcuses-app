import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    background: #fff;
    height: 80px;
    width: 90%;
    margin: 10px 16px;
    border-radius: 8px;
    flex-direction: row;
    padding:10px 25px;
    align-items: center;
`;

export const Details = styled.View`
    flex:1;
`;

export const Title = styled.Text`
    color: #21a9ed;
    font-size: 18px;
    font-weight: 500;
`;

export const Description = styled.Text`
    color: #fff;
    font-size: 14px;
    margin-top: 5px;
`;

export const Img = styled.Image`
`;