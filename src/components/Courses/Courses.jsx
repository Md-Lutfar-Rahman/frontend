// import React from 'react';

import { Link } from "react-router-dom";

const products = [
    {
        id: 1,
        title: 'Product 1',
        description: 'Description of Product 1',
        price: '$10.00',
        image: 'https://img.freepik.com/free-photo/cartoon-student-math-class_23-2151641207.jpg', // Replace with actual image URLs
    },
    {
        id: 2,
        title: 'Product 2',
        description: 'Description of Product 2',
        price: '$15.00',
        image: 'https://img.freepik.com/free-photo/cartoon-student-math-class_23-2151641207.jpg', // Replace with actual image URLs
    },
    {
        id: 3,
        title: 'Product 3',
        description: 'Description of Product 3',
        price: '$20.00',
        image: 'https://img.freepik.com/free-photo/cartoon-student-math-class_23-2151641207.jpg', // Replace with actual image URLs
    },
    {
        id: 4,
        title: 'Product 4',
        description: 'Description of Product 4',
        price: '$25.00',
        image: 'https://img.freepik.com/free-photo/cartoon-student-math-class_23-2151641207.jpg', // Replace with actual image URLs
    },
    {
        id: 5,
        title: 'Product 5',
        description: 'Description of Product 5',
        price: '$30.00',
        image: 'https://img.freepik.com/free-photo/cartoon-student-math-class_23-2151641207.jpg', // Replace with actual image URLs
    },
    {
        id: 6,
        title: 'Product 6',
        description: 'Description of Product 6',
        price: '$35.00',
        image: 'https://img.freepik.com/free-photo/cartoon-student-math-class_23-2151641207.jpg', // Replace with actual image URLs
    },
    {
        id: 7,
        title: 'Product 7',
        description: 'Description of Product 7',
        price: '$40.00',
        image: 'https://img.freepik.com/free-photo/cartoon-student-math-class_23-2151641207.jpg', // Replace with actual image URLs
    },
    {
        id: 8,
        title: 'Product 8',
        description: 'Description of Product 8',
        price: '$45.00',
        image: 'https://img.freepik.com/free-photo/cartoon-student-math-class_23-2151641207.jpg', // Replace with actual image URLs
    },
];

function Courses() {
    return (
        <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
        {products.map(product => (
            <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-80" 
                />
                <div className="p-4 bg-white">
                    <h3 className="text-md font-semibold text-gray-800">{product.title}</h3>
                    <p className="text-sm text-gray-600">{product.description}</p>
                    <p className="text-lg font-bold text-blue-600">{product.price}</p>
                    <div className="flex space-x-2 mt-2">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm focus:outline-none">
                            Add to Cart
                        </button>
                        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-200 text-sm focus:outline-none">
                       
                        <Link to={"/singlecourse"} >View Course</Link>
                        </button>
                    </div>
                </div>
            </div>
        ))}
    </div>
    );
}

export default Courses;
