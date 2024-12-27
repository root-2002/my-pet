import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddInfoemation() {
  const [clientData, setClientData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    profilePicture: null,
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setClientData({ ...clientData, profilePicture: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Client Data Submitted:", clientData);
    setClientData({ name: '', email: '', phone: '', address: '', profilePicture: null });
  };

  const profilePicturePreview = clientData.profilePicture ? URL.createObjectURL(clientData.profilePicture) : null;

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Add New Client</h1>
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
          <label htmlFor="name">Client Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={clientData.name}
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
            value={clientData.email}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={clientData.phone}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={clientData.address}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="profilePicture">Profile Picture</label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            accept="image/*"
            onChange={handleProfilePictureChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        {profilePicturePreview && (
          <div style={{ marginTop: '10px' }}>
            <h4>Profile Picture Preview</h4>
            <img
              src={profilePicturePreview}
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
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddInfoemation;
