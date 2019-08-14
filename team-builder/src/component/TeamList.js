import React from "react";

function TeamList(props) {
  console.log(props);
  return props.members.map(member => {
    console.log(member.name);
    return (
      <div>
        <ul>
          <li>Name: {member.name}</li>
          <li>Email: {member.email}</li>
          <li>Role: {member.role}</li>
        </ul>
      </div>
    );
  });
}

export default TeamList;
