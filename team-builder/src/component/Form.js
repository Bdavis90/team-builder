import React, { useState } from "react";

function Form(props) {
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const nameChange = event => {
    setNewMember({ ...newMember, [event.target.name]: event.target.value });
  };
  const emailChange = event => {
    setNewMember({ ...newMember, [event.target.name]: event.target.value });
  };
  const roleChange = event => {
    setNewMember({ ...newMember, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
  };
  console.log();
  return (
    <form onSubmit={event => handleSubmit(event)}>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={newMember.name}
        onChange={nameChange}
      />
      <label htmlFor="Email">Email</label>
      <input
        name="email"
        type="text"
        placeholder="Email"
        value={newMember.email}
        onChange={emailChange}
      />
      <label htmlFor="role">Role</label>
      <input
        name="role"
        type="text"
        placeholder="Role"
        value={newMember.role}
        onChange={roleChange}
      />
      <button type="submit">Add Member</button>
    </form>
  );
}

export default Form;
