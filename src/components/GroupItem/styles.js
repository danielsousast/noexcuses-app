import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  margin-top: 20px;
`;

export const GroupIcon = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const GroupInfo = styled.View`
  flex: 1;
  padding: 0 20px;
`;

export const GroupTitle = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

export const GroupDescription = styled.Text`
  font-size: 17px;
  color: #3c4560;
  margin-top: 10px;
  line-height: 24px;
`;

export const GroupButton = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DateContainer = styled.View`
  background: #4775f2;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  height: 20px;
  position: absolute;
  top: 0px;
  right: 0px;
`;

export const Date = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`;
