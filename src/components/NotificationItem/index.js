import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  IconView,
  Title,
  Description,
  Date,
  Header,
  DateContainer,
} from './styles';
import {styles} from '../../styles/all';
import colors from '../../styles/colors';

const NotificationItem = ({data, onPress}) => {
  return (
    <Container activeOpacity={0.4} style={styles.shadow} onPress={onPress}>
      <Header>
        <IconView>
          <Icon name="notifications" size={26} color={colors.orange} />
        </IconView>
        <Title>{data.title}</Title>
        <DateContainer>
          <Date>{data.dateFormatted}</Date>
        </DateContainer>
      </Header>
      <Description numberOfLines={2}>{data.description}</Description>
    </Container>
  );
};

export default NotificationItem;
