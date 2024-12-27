import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import './Signin.css'; // Importing custom CSS for styling

const Signin = () => {
  // State to store the form data
  const [formData, setFormData] = useState({
    email: '',   // Added email field for sign-in
    password: ''  // Password field for sign-in
  });

  // State for error messages
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Hook to programmatically navigate

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    // Check credentials (example: hardcoded credentials)
    if (formData.email === "admin" && formData.password === "admin1234") {
      setError('');
      console.log("Form submitted successfully:", formData);
      navigate("/adminDashBord"); // Redirect to the admin dashboard
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="signin-container">
      <h2 className="signin-title">Sign In</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit} className="signin-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="signin-btn">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
