import React, { useState } from "react";

const Inputs = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formState.name &&
      !formState.lastName &&
      !formState.phone &&
      !formState.email
    ) {
      alert("please enter data");
      return;
    }
    const newUser = {
      ...formState,
      id: Date.now(),
    };
    console.log("newUser: ", newUser);
    props.handleUsers(newUser);
    setFormState({
      name: "",
      lastName: "",
      phone: "",
      email: "",
    });
  };

  const { name, lastName, phone, email } = formState;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          name="name"
          placeholder="Name"
        />
        <input
          type="text"
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          placeholder="Last Name"
        />
        <input
          type="number"
          value={phone}
          name="phone"
          onChange={handleInputChange}
          placeholder="Phone #"
        />
        <input
          type="email"
          value={email}
          name="email"
          onChange={handleInputChange}
          placeholder="E-mail"
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default Inputs;
