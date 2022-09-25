import PropTypes from 'prop-types';
import { FriendListMarcup } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem.js/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendListMarcup>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </FriendListMarcup>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
