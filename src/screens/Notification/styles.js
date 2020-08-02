import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: white;
`;

export const Title = styled.Text`
  margin: 10px;
  font-weight: bold;
`;
export const Message = styled.Text`
  margin: 10px;
`;

export const BackButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-top: 20px;

  align-self: flex-start;
`;
