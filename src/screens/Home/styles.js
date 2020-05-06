import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background-color:#F0F3F4
`;
export const Header = styled.SafeAreaView`
    background-color:#F0F3F4;
    width:100%;
    height:120px;
    margin-bottom:20px;
    border-bottom-width:0.5px;
    border-bottom-color:#ccc
`;
export const NotificationList = styled.FlatList`
  width:100%;
  margin-top:20px;
`;
export const Input = styled.TextInput`
    width:85%;
    height:50px;
    align-self:center;
    background-color:#fff;
    margin-top:15px;
    border-radius:20px;
    padding:10px;
    font-size:18px
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size:20px;
    margin-left: 20px;
    margin-top: 20px;
`

export const User = styled.Text`
    font-size:20px;
    margin-left: 20px;
`

export const CardView = styled.View`
    margin-top: 20px;
    flex-direction:row;
    justify-content:center;
`
export const AlertView = styled.View`
    height:100px;
    margin:auto;
    border-radius:4px;
    background:#cc9618;
    width:94%;

    justify-content:center;
    align-content:center;
`

export const AlertText = styled.Text`
    align-self:center
`
