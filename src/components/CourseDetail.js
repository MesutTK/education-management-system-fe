import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    api.get(`/courses/${id}`)
      .then(response => {
        setCourse(response.data);
      })
      .catch(error => {
        console.error('Error fetching course details', error);
      });
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <h2>{course.name}</h2>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseDetail;
