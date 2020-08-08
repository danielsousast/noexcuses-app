import styled from 'styled-components/native';
import colors from '../../styles/colors';

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

export const List = styled.FlatList`
  width: 100%;
  margin-top: 10px;
`;
