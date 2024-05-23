import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CourseList from '../components/CourseList';
import CourseDetail from '../components/CourseDetail';

const Courses = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path=":id" element={<CourseDetail />} />
      </Routes>
    </div>
  );
};

export default Courses;
