import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DepartmentList from '../components/DepartmentList';
import DepartmentDetail from '../components/DepartmentDetail';
import AddDepartment from '../components/AddDepartment';

const Departments = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DepartmentList />} />
        <Route path="new" element={<AddDepartment />} />
        <Route path=":id" element={<DepartmentDetail />} />
      </Routes>
    </div>
  );
};

export default Departments;
