import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${colors.black};
`;

export const Email = styled.Text`
  font-size: 18px;
  color: #999;
`;

export const Menu = styled.View`
  justify-content: center;
  padding-top: 30px;
`;

export const MenuItem = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-self: center;
  align-items: center;
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  background: #fff;
  border-radius: 6px;
`;

export const MenuText = styled.Text`
  margin-left: 10px;
  font-size: 18px;
  font-weight: 700;
  color: ${colors.black};
`;
