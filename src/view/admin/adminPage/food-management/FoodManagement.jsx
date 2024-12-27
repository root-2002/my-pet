import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function FoodMangement() {
  const [foodData, setFoodData] = useState({
    name: '',
    type: '',
    description: '',
    animal: '',
    image: null,
  });
  const [foods, setFoods] = useState([]);
  const nextId = useRef(1);
  const navigate = useNavigate();

  const animals = ['Cat', 'Dog', 'Hamster', 'Bird', 'Fish'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFoodData({ ...foodData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFoodData({ ...foodData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { ...foodData, id: nextId.current };
    setFoods([...foods, newFood]);
    nextId.current += 1;
    setFoodData({ name: '', type: '', description: '', animal: '', image: null });
  };

  const imagePreview = foodData.image ? URL.createObjectURL(foodData.image) : null;

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Add New Food</h1>
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
          <label htmlFor="name">Food Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={foodData.name}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="type">Food Type</label>
          <input
            type="text"
            id="type"
            name="type"
            value={foodData.type}
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
            value={foodData.description}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="animal">Animal</label>
          <select
            id="animal"
            name="animal"
            value={foodData.animal}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          >
            <option value="">Select Animal</option>
            {animals.map((animal, index) => (
              <option key={index} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="image">Food Image</label>
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
          Add Food
        </button>
      </form>
      <h2 style={{ marginTop: '30px' }}>Added Foods</h2>
      {foods.length > 0 ? (
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px',
          }}
        >
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Food Name</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Type</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Animal</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Image</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food) => (
              <tr key={food.id}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{food.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{food.type}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{food.description}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{food.animal}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  {food.image ? (
                    <img
                      src={URL.createObjectURL(food.image)}
                      alt="Food"
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                  ) : (
                    'No image'
                  )}
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{food.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No foods added yet.</p>
      )}
    </div>
  );
}

export default FoodMangement;
