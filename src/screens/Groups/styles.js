import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
    height:50px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
    color:#151515;
  font-size: 18px;
`;

export const ListGroup = styled.FlatList`
  margin-top: 20px;
`;

export const Menu = styled.View`
  flex-direction: row;
  width: 90%;
  align-self: center;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

export const MenuItemLeft = styled.TouchableOpacity`
  flex: 1;
  height: 40px;
  border-bottom-width: 2px;
  border-bottom-color: ${props => props.active == 1 ? '#21a9ed' : '#f4f4f4'};
  background-color: ${props => props.active == 1 ? '#eee' : '#f4f4f4'};
  justify-content: center;
`;
export const MenuItemRight = styled.TouchableOpacity`
  flex: 1;
  height: 40px;
  justify-content: center;
  border-bottom-width: 2px;
  background-color: ${props => props.active == 2 ? '#eee' : '#f4f4f4'};
  border-bottom-color: ${props => props.active == 2 ? '#21a9ed' : '#f4f4f4'};
`;


export const MenuLabel = styled.Text`
  align-self: center;
`;

export const GroupArea = styled.View`

`;