import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  background: white;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const IconView = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #3c4560;
  font-weight: bold;
  width: 200px;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #3c4560;
  margin-top: 10px;
  line-height: 24px;
  margin-bottom: 10px;
  width: 300px;
`;

export const Button = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DateContainer = styled.View`
  background: #fcd76c;
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
  color: #333;
  font-size: 10px;
  font-weight: 600;
`;
