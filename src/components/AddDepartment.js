import React, { useState } from 'react';
import api from '../api';

const AddDepartment = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/departments', { name, description })
      .then(response => {
        console.log('Department added', response.data);
        // Formu temizleyin
        setName('');
        setDescription('');
      })
      .catch(error => {
        console.error('There was an error adding the department!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Department</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Add Department</button>
    </form>
  );
};

export default AddDepartment;
