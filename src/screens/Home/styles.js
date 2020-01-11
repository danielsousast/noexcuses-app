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