import user from 'components/user.json';
import data from 'components/data.json';
import friends from 'components/friends.json';
import { Statistics } from './Statistics.js/Statistics';
import { Profile } from './Profile.js/Profile';
import { FriendList } from './FriendList.js/FriendList';
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
