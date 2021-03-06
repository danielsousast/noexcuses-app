import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  background: ${colors.background};
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 50px;
  align-self: center;
  font-size: 18px;
  margin-bottom: 15px;
  border-radius: 25px;
  background-color: #fafafa;
  padding-left: 30px;
`;

export const Link = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const LinkTitle = styled.Text`
  font-size: 18px;
  color: #226bf2;
`;

export const Loading = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Text`
  font-size: 28px;
  color: #226bf2;
  font-weight: bold;
  margin-top: -20px;
  margin-bottom: 38px;
  align-self: center;
`;
