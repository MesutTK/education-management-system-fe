import React, { useEffect, useState } from 'react';
import api from '../api';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get('/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses', error);
      });
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
