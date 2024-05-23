import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

const DepartmentDetail = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);

  useEffect(() => {
    api.get(`/departments/${id}`)
      .then(response => {
        setDepartment(response.data);
      })
      .catch(error => {
        console.error('Error fetching department details', error);
      });
  }, [id]);

  if (!department) return <div>Loading...</div>;

  return (
    <div>
      <h2>{department.name}</h2>
      <p>{department.description}</p>
    </div>
  );
};

export default DepartmentDetail;
