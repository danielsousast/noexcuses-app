import styled from 'styled-components/native';

export const Container = styled.View`
background: #fff;
  flex:1;
`;

export const Header = styled.View`
    height:50px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
    color:#151515;
  font-size: 18px;
`;

export const HeaderButton = styled.TouchableOpacity`
   justify-content:center;
   align-items: center;
`;

export const HeaderButtonTitle = styled.Text`
    color:#21a9ed;
`;

export const NotificationsList = styled.ScrollView`
  background: #fff;
`;

export const MessageContainer = styled.TouchableOpacity`
    margin: 0 16px;
    padding: 12px 0;
`;

export const Message = styled.Text`
    color:rgba(0,0,0,0.6);
    font-size: 16px;
    font-weight:200;
    margin: 10px 0;
    
`;

export const Date = styled.Text`
   color:rgba(0,0,0,0.6);
`;

export const Divider = styled.View`
    height: 1px;
    background-color:#ccc;
    width: 90%;
    margin: auto;
`;
