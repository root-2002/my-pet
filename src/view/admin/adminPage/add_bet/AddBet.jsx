import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook

function AddBet() {
  const [betData, setBetData] = useState({
    name: '',
    amount: '',
    description: '',
    type: '',
    image: null, // New field to store image file
  });
  const [bets, setBets] = useState([]); // State to store added bets
  const nextId = useRef(1); // Reference to keep track of the next id
  const navigate = useNavigate();  // Initialize the navigate function

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBetData({ ...betData, [name]: value });
  };

  // Handle image input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBetData({ ...betData, image: file });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new bet to the list of bets with a generated id
    const newBet = { ...betData, id: nextId.current };
    setBets([...bets, newBet]);

    // Increment the ID for the next bet
    nextId.current += 1;

    // Reset the form after submission
    setBetData({ name: '', amount: '', description: '', type: '', image: null });
  };

  // Display image preview if available
  const imagePreview = betData.image ? URL.createObjectURL(betData.image) : null;

  // Back button functionality
  const handleBack = () => {
    navigate(-1);  // Go back to the previous page
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Add a New Bet</h1>
      <button
        onClick={handleBack}  // Add functionality to go back
        style={{
          padding: '10px 20px',
          backgroundColor: '#f44336',  // Red color for the Back button
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
          <label htmlFor="name">Bet Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={betData.name}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="amount">Bet Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={betData.amount}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={betData.description}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="type">Bet Type</label>
          <select
            id="type"
            name="type"
            value={betData.type}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          >
            <option value="">Select Bet Type</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
            <option value="Hamster">Hamster</option>
          </select>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="image">Bet Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        {/* Display the selected image preview */}
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
          Add Bet
        </button>
        
      </form>

      {/* Display Added Bets in a Table */}
      <h2 style={{ marginTop: '30px' }}>Added Bets</h2>
      {bets.length > 0 ? (
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px',
          }}
        >
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Bet Name</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Amount</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Bet Type</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Image</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
            </tr>
          </thead>
          <tbody>
            {bets.map((bet) => (
              <tr key={bet.id}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{bet.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{bet.amount}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{bet.description}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{bet.type}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  {bet.image ? (
                    <img
                      src={URL.createObjectURL(bet.image)}
                      alt="Bet"
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                  ) : (
                    'No image'
                  )}
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{bet.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No bets added yet.</p>
      )}
    </div>
  );
}

export default AddBet;
