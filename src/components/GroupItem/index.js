import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  GroupIcon,
  GroupTitle,
  GroupDescription,
  Date,
  Header,
  DateContainer,
} from './styles';
import {styles} from '../../styles/all';
import colors from '../../styles/colors';

const GroupItem = ({grupo, onPress, badge}) => {
  return (
    <Container activeOpacity={0.4} onPress={onPress} style={styles.shadow}>
      <Header>
        <GroupIcon>
          <Icon name="group" size={30} color={colors.orange} />
        </GroupIcon>
        <GroupTitle>{grupo.name}</GroupTitle>
        <DateContainer>
          <Date>{badge}</Date>
        </DateContainer>
      </Header>
      <GroupDescription>
        Essa é a descrição do grupo como exemplo
      </GroupDescription>
    </Container>
  );
};

export default GroupItem;
