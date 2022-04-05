import React, { useState } from 'react';
// import Friends from './Friends';

// const Friend = (props) => {
//     return <li onClick = {props.unfriendPerson}>{props.friend}</li>
// }
// or
const Friend = ({unfriendPerson, friend}) => {
    return <li onClick = {unfriendPerson}>{friend}</li>
}

export default Friend;