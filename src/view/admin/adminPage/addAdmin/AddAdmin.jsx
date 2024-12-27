import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function AddAdmin() {
  const [adminData, setAdminData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    image: null,
  });
  const [admins, setAdmins] = useState([]);
  const nextId = useRef(1);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setAdminData({ ...adminData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAdmin = { ...adminData, id: nextId.current };
    setAdmins([...admins, newAdmin]);
    nextId.current += 1;
    setAdminData({ name: '', email: '', password: '', phone: '', image: null });
  };

  const imagePreview = adminData.image ? URL.createObjectURL(adminData.image) : null;

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Add New Admin</h1>
      <button
        onClick={handleBack}
        style={{
          padding: '10px 20px',
          backgroundColor: '#f44336',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        Back
      </button>

      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name">Admin Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={adminData.name}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={adminData.email}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={adminData.password}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={adminData.phone}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="image">Profile Picture</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        {imagePreview && (
          <div style={{ marginTop: '10px' }}>
            <h4>Image Preview</h4>
            <img
              src={imagePreview}
              alt="Preview"
              style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'contain' }}
            />
          </div>
        )}

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Add Admin
        </button>
      </form>

      <h2 style={{ marginTop: '30px' }}>Added Admins</h2>
      {admins.length > 0 ? (
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px',
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Profile Picture</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id}>
                <td>{admin.name}</td>
                <td>{admin.email}</td>
                <td>{admin.phone}</td>
                <td>
                  {admin.image ? (
                    <img
                      src={URL.createObjectURL(admin.image)}
                      alt="Admin"
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                  ) : (
                    'No image'
                  )}
                </td>
                <td>{admin.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No admins added yet.</p>
      )}
    </div>
  );
}

export default AddAdmin;



