import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import colors from '../../styles/colors';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const BackButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

export const ScreenTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.black};
  margin-left: 20px;
`;

export const GroupMenu = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 20px;
  height: ${width * 0.2}px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const MenuItem = styled.TouchableOpacity`
  width: ${width / 2 - 40}px;
  align-items: center;
  background: ${props => props.color || '#ccc'};
  border-radius: 10px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
`;

export const MenuItemText = styled.Text`
  font-size: 20px;
  color: ${colors.white};
  margin-left: 20px;
`;

export const MenuItemBackground = styled.ImageBackground`
  width: ${width / 2 - 55}px;
  height: ${width / 2 - 95}px;
`;

export const SectionTitle = styled.Text`
  font-weight: 700;
  font-size: 18px;
  margin-top: 30px;
  color: ${colors.black};
  margin-left: 20px;
`;

export const List = styled.FlatList`
  width: 100%;
  margin-top: 10px;
`;
