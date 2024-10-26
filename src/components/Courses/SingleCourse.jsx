import { useState } from 'react';

function SingleCourse() {
    const course = {
        title: 'Advanced Web Development',
        videoUrl: 'https://www.youtube.com/embed/your_video_id', // Replace with actual video URL
        lessons: [
            {
                title: 'Introduction to Web Development',
                subLessons: [
                    { title: 'HTML Basics', details: 'Learn the structure of web pages' },
                    { title: 'CSS Basics', details: 'Style your web pages' },
                    { title: 'Getting Started with JavaScript', details: 'Introduction to JavaScript programming' },
                ],
            },
            {
                title: 'Frontend Development',
                subLessons: [
                    { title: 'Responsive Design', details: 'Make your web applications responsive' },
                    { title: 'JavaScript Frameworks', details: 'Explore popular frameworks like React and Angular' },
                    { title: 'CSS Preprocessors', details: 'Learn about SASS and LESS' },
                ],
            },
            {
                title: 'Backend Development',
                subLessons: [
                    { title: 'Node.js Basics', details: 'Introduction to server-side JavaScript' },
                    { title: 'Express.js', details: 'Build web applications with Express' },
                    { title: 'Database Integration', details: 'Connect your app to a database' },
                ],
            },
            {
                title: 'APIs and Deployment',
                subLessons: [
                    { title: 'Creating APIs', details: 'Understand RESTful APIs' },
                    { title: 'Deploying Applications', details: 'Learn how to deploy your web apps' },
                    { title: 'Best Practices', details: 'Follow best practices for web development' },
                ],
            },
        ],
    };

    const [openLesson, setOpenLesson] = useState(Array(course.lessons.length).fill(false));
    const [openSubLesson, setOpenSubLesson] = useState(Array(course.lessons.length).fill(Array(course.lessons[0].subLessons.length).fill(false)));

    const toggleDropdown = (index) => {
        setOpenLesson((prev) =>
            prev.map((item, i) => (i === index ? !item : item))
        );
    };

    const toggleSubDropdown = (lessonIndex, subIndex) => {
        setOpenSubLesson((prev) => {
            const newState = prev.map((item, i) => (i === lessonIndex ? [...item] : item));
            newState[lessonIndex][subIndex] = !newState[lessonIndex][subIndex];
            return newState;
        });
    };

    return (
        <div className="container mx-auto p-6">
            <div className="flex flex-col md:flex-row">
                {/* Video and Buttons Section */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-lg mr-4 mb-4 md:mb-0">
                   
                    <iframe
                        width="100%"
                        height="500"
                        src={course.videoUrl}
                        title="Course Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <div className="flex justify-between space-x-4 mt-4">
                        <div className='space-x-4'>
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-200">
                            Share
                        </button>
                        <button className="bg-red-600 text-white py-2 px-4 rounded-lg shadow hover:bg-red-700 transition duration-200">
                            Report
                        </button>
                        </div>
                        <button className="bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition duration-200">
                            Download
                        </button>
                    </div>
                    <h2 className=" text-3xl text-justify font-bold text-gray-800 mb-4">{course.title}</h2>
                </div>

                {/* Lessons Section */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full md:w-1/3">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Course Lessons</h3>
                    {course.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="mb-4">
                            <div 
                                className="flex items-center justify-between cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                                onClick={() => toggleDropdown(lessonIndex)}
                            >
                                {/* Lesson Title in one line */}
                                <div className="flex-1 text-left">
                                    <h4 className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{lesson.title}</h4>
                                </div>
                                <div className="flex-none text-gray-200">
                                    <span className={`transform transition-transform duration-200 ${openLesson[lessonIndex] ? 'rotate-90' : ''}`}>
                                        ➤
                                    </span>
                                </div>
                            </div>
                            {/* Dropdown for sub-lessons */}
                            {openLesson[lessonIndex] && (
                                <ul className="list-none mt-2 pl-0">
                                    {lesson.subLessons.map((subLesson, subIndex) => (
                                        <div key={subIndex} className="mt-1">
                                            <div 
                                                className="flex justify-between cursor-pointer bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200"
                                                onClick={() => toggleSubDropdown(lessonIndex, subIndex)}
                                            >
                                                <h5 className="font-medium">{subLesson.title}</h5>
                                                <span className={`transform transition-transform duration-200 ${openSubLesson[lessonIndex][subIndex] ? 'rotate-90' : ''}`}>
                                                    ➤
                                                </span>
                                            </div>
                                            {/* Dropdown for sub-lesson details */}
                                            {openSubLesson[lessonIndex][subIndex] && (
                                                <div className="bg-white shadow rounded-lg mt-1 p-4">
                                                    <p className="text-gray-600">{subLesson.details}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SingleCourse;
