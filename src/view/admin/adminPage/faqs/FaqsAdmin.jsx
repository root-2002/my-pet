import React, { useState } from "react";
import './FaqsAdmin.css';

function FaqsAdmin() {
  const [faqs, setFaqs] = useState([
    { id: 1, question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { id: 2, question: "What is a component?", answer: "A component is a reusable, self-contained unit of a UI in React." },
  ]);
  
  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });

  // Handle input changes for new FAQ
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFaq({ ...newFaq, [name]: value });
  };

  // Add a new FAQ
  const handleAddFaq = (e) => {
    e.preventDefault();
    if (newFaq.question && newFaq.answer) {
      setFaqs([...faqs, { ...newFaq, id: faqs.length + 1 }]);
      setNewFaq({ question: '', answer: '' });
    }
  };

  // Delete an FAQ
  const handleDeleteFaq = (id) => {
    setFaqs(faqs.filter(faq => faq.id !== id));
  };

  return (
    <div className="container my-5">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="overlay">
          <h1>FAQ Management</h1>
          <p>Manage your FAQs here. Add, edit, or delete any FAQ as needed.</p>
        </div>
      </div>

      {/* Add FAQ Form */}
      <div className="card shadow-sm p-4 mt-4">
        <form onSubmit={handleAddFaq}>
          <div className="mb-3">
            <label htmlFor="question" className="form-label">
              Question
            </label>
            <input
              type="text"
              className="form-control"
              id="question"
              name="question"
              value={newFaq.question}
              onChange={handleInputChange}
              placeholder="Enter the question"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="answer" className="form-label">
              Answer
            </label>
            <textarea
              className="form-control"
              id="answer"
              name="answer"
              value={newFaq.answer}
              onChange={handleInputChange}
              rows="4"
              placeholder="Enter the answer"
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Add FAQ
            </button>
          </div>
        </form>
      </div>

      {/* Display FAQs Table */}
      <div className="card shadow-sm p-4 mt-4">
        <h3>Existing FAQs</h3>
        {faqs.length > 0 ? (
          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th>Question</th>
                <th>Answer</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {faqs.map((faq) => (
                <tr key={faq.id}>
                  <td>{faq.question}</td>
                  <td>{faq.answer}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteFaq(faq.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No FAQs available.</p>
        )}
      </div>
    </div>
  );
}

export default FaqsAdmin;
