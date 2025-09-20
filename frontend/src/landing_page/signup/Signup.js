import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        // Signup request
        const res = await axios.post(
          "http://localhost:3002/signup",
          {
            username: formData.name, // backend me username expected hai
            email: formData.email,
            password: formData.password,
          },
          { withCredentials: true }
        );
        alert(res.data.message);
      } else {
        // Login request
        const res = await axios.post(
          "http://localhost:3002/login",
          {
            email: formData.email,
            password: formData.password,
          },
          { withCredentials: true }
        );
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h3 className="text-center mb-3">{isSignup ? "Signup" : "Login"}</h3>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            {isSignup ? "Signup" : "Login"}
          </button>
        </form>
        <p className="text-center mt-3">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            className="btn btn-link"
            onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login" : "Signup"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;
