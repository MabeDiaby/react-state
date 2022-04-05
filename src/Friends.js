import React, { useState } from 'react';
import Friend from './Friend';

const Friends = () => {
  const [friends, setFriends] = useState(['Damon', 'Paula', 'Jamie', 'Remi']);
  function unfriend() {
    const newFriends = friends.slice(1)
    setFriends(newFriends)
  }

  function unfriendPerson(ev) {
      console.log("Bye");
    const name = ev.target.innerText
    const newFriends = friends.filter(friend => friend !== name)
    setFriends(newFriends)
  }

  return (
      <>
    <ul>
      {friends.map(friend => (
        <Friend key={friend} friend={friend} unfriendPerson={unfriendPerson}/>
      ))}
    </ul>
    <button onClick = {unfriend}>Unfriend Someone</button>
    </>
  );
};

export default Friends;