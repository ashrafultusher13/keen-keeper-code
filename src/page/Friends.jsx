import { use } from "react";
import FriendCard from "../ui/FriendCard";

const Friends = ({fetchFriends}) => {
  console.log(fetchFriends);
  const friends = use(fetchFriends)
  return (
    <div className="bg-base-200">
      <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold pb-5">Your Friends</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
         <FriendCard key={friend.id} friend = {friend}/>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Friends;