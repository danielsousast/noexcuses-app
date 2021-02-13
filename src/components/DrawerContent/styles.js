import styled from 'styled-components/native';

export const DrawerContainer = styled.View`
  flex: 1;
`;

export const UserInfoSection = styled.View`
  padding: 20px;
  height: 120px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const User = styled.View`
  margin-left: 15px;
`;

export const Caption = styled.Text`
  font-size: 14px;
  line-height: 14px;
  width: 80%;
`;

export const Title = styled.Text`
  font-size: 16px;
  margin-top: 3px;
  margin-bottom: 3px;
  font-weight: bold;
  width: 80%;
`;

export const PreferencesSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 16px;
`;

export const Avatar = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  background: #226bf2;
`;

export const AvatarLetter = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`;
