import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
`;

export const ProfileCard = styled.View`
  width: 200px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
`;

export const User = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 15px;
  color: #151515;
`;

export const Label = styled.Text`
  margin-left: 15px;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 18px;
`;

export const MenuItem = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const MenuLabel = styled.Text`
  font-size: 16px;
`;

export const Divider = styled.View`
    height: 1px;
    background-color:#eee;
    width: 100%;
    align-self: center;
`;

