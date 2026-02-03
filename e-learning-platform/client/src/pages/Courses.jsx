import React from 'react';
import CourseList from '../components/courses/CourseList';

const Courses = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Available Courses</h1>
            <CourseList />
        </div>
    );
};

export default Courses;