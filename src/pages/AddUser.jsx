import { useState } from "react";
import { createUser } from "../services/userService";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUser(user);
      alert("User added successfully");
      navigate("/users");
    } catch (error) {
      console.error("Could not add user:", error);
      alert("Could not add user. Check the API and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={user.name} onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" value={user.email} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} />
      <input name="dateOfBirth" type="date" value={user.dateOfBirth} onChange={handleChange} />
      <button type="submit">Add user</button>
    </form>
  );
}

export default AddUser;