import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View``;

export const Content = styled.View`
  flex: 1;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 20px;
`;

export const Welcome = styled.Text`
  margin-top: 20px;
  margin-left: 20px;
  color: ${colors.black};
  font-size: 20px;
`;

export const Username = styled.Text`
  color: ${colors.black};
  font-size: 22px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const SectionTitle = styled.Text`
  color: ${colors.black};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Card = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  margin-top: 20px;
  background: ${colors.white};
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

export const CardLeft = styled.View`
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${props => props.color || '#eee'};
`;

export const CardCenter = styled.View`
  flex: 1;
  height: 80px;
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 10px;
`;

export const CardRight = styled.View``;

export const CardTitle = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

export const CardDescription = styled.Text`
  font-size: 17px;
  color: #3c4560;
  margin-top: 10px;
  line-height: 24px;
`;
