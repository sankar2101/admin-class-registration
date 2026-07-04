import { useState } from "react";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post(
        "/admin/login",
        form
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Success");

      navigate("/admin/dashboard");

    } catch (error) {

      alert(error.response.data.message);

    }
  };

  return (
    <div>
      <h2>Admin Login</h2>

      <form onSubmit={handleSubmit}>

        <input type="text"name="username"placeholder="Username"onChange={handleChange}/>

        <br /><br />

        <input type="password"name="password"placeholder="Password"onChange={handleChange}/>

        <br /><br />

        <button type="submit">Login</button>

      </form>
    </div>
  );
};

export default Login;