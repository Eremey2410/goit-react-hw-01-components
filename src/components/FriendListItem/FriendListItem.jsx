import PropTypes from 'prop-types';
import {
  Item,
  Avatar,
  Name,
  StatusIsOnline,
  StatusIsOffline,
} from './FriendListItem.styled';
import { GrApple } from 'react-icons/gr';
export const FriendListItem = ({ friend: { name, id, avatar, isOnline } }) => {
  return (
    <Item key={id}>
      {isOnline ? (
        <StatusIsOnline>
          <GrApple size={24} />
        </StatusIsOnline>
      ) : (
        <StatusIsOffline>
          <GrApple size={24} />
        </StatusIsOffline>
      )}
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
