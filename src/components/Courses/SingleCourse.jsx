import { useState } from 'react';

function SingleCourse() {
    const [currentVideoUrl, setCurrentVideoUrl] = useState('https://www.youtube.com/embed/your_video_id'); // Default video URL
    const [isEnrolled, setIsEnrolled] = useState(false); // Change this to simulate enrollment status

    const course = {
        title: 'Advanced Web Development',
        lessons: [
            {
                title: 'Introduction to Web Development',
                videoUrl: 'https://www.youtube.com/embed/video1',
                isLocked: false, // First lesson is open
                subLessons: [
                    { 
                        title: 'HTML Basics', 
                        details: 'Learn the structure of web pages',
                        videoUrl: 'https://www.youtube.com/embed/video2',
                        isLocked: false, // First sub-lesson is open
                        subSubLessons: [
                            { 
                                title: 'HTML Tags', 
                                details: 'Learn about basic HTML tags',
                                videoUrl: 'https://www.youtube.com/embed/video3',
                                isLocked: false
                            },
                            { 
                                title: 'Forms in HTML', 
                                details: 'Understand how to create forms',
                                videoUrl: 'https://www.youtube.com/embed/video4',
                                isLocked: true // Locked
                            },
                        ]
                    },
                    { 
                        title: 'CSS Basics', 
                        details: 'Style your web pages',
                        videoUrl: 'https://www.youtube.com/embed/video5',
                        isLocked: false // Second sub-lesson is open
                    },
                    { 
                        title: 'Getting Started with JavaScript', 
                        details: 'Introduction to JavaScript programming',
                        videoUrl: 'https://www.youtube.com/embed/video6',
                        isLocked: true // Locked
                    },
                ],
            },
            {
                title: 'Frontend Development',
                videoUrl: 'https://www.youtube.com/embed/video7',
                isLocked: false, // Second lesson is open
                subLessons: [
                    { title: 'Responsive Design', details: 'Make your web applications responsive', videoUrl: 'https://www.youtube.com/embed/video8', isLocked: true },
                    { title: 'JavaScript Frameworks', details: 'Explore popular frameworks like React and Angular', videoUrl: 'https://www.youtube.com/embed/video9', isLocked: true },
                    { title: 'CSS Preprocessors', details: 'Learn about SASS and LESS', videoUrl: 'https://www.youtube.com/embed/video10', isLocked: true },
                ],
            },
            {
                title: 'Backend Development',
                videoUrl: 'https://www.youtube.com/embed/video11',
                isLocked: true, // All remaining lessons are locked
                subLessons: [
                    { title: 'Node.js Basics', details: 'Introduction to server-side JavaScript', videoUrl: 'https://www.youtube.com/embed/video12', isLocked: true },
                    { title: 'Express.js', details: 'Build web applications with Express', videoUrl: 'https://www.youtube.com/embed/video13', isLocked: true },
                    { title: 'Database Integration', details: 'Connect your app to a database', videoUrl: 'https://www.youtube.com/embed/video14', isLocked: true },
                ],
            },
            {
                title: 'APIs and Deployment',
                videoUrl: 'https://www.youtube.com/embed/video15',
                isLocked: true, // All remaining lessons are locked
                subLessons: [
                    { title: 'Creating APIs', details: 'Understand RESTful APIs', videoUrl: 'https://www.youtube.com/embed/video16', isLocked: true },
                    { title: 'Deploying Applications', details: 'Learn how to deploy your web apps', videoUrl: 'https://www.youtube.com/embed/video17', isLocked: true },
                    { title: 'Best Practices', details: 'Follow best practices for web development', videoUrl: 'https://www.youtube.com/embed/video18', isLocked: true },
                ],
            },
        ],
    };

    const [openLesson, setOpenLesson] = useState(Array(course.lessons.length).fill(false));
    const [openSubLesson, setOpenSubLesson] = useState(Array(course.lessons.length).fill(Array(course.lessons[0].subLessons.length).fill(false)));
    const [openSubSubLesson, setOpenSubSubLesson] = useState(Array(course.lessons.length).fill(Array(course.lessons[0].subLessons.length).fill(Array(0).fill(false))));

    const toggleDropdown = (index) => {
        setOpenLesson((prev) => prev.map((item, i) => (i === index ? !item : item)));
    };

    const toggleSubDropdown = (lessonIndex, subIndex) => {
        setOpenSubLesson((prev) => {
            const newState = prev.map((item, i) => (i === lessonIndex ? [...item] : item));
            newState[lessonIndex][subIndex] = !newState[lessonIndex][subIndex];
            return newState;
        });
    };

    const toggleSubSubDropdown = (lessonIndex, subIndex, subSubIndex) => {
        setOpenSubSubLesson((prev) => {
            const newState = prev.map((item, i) => {
                if (i === lessonIndex) {
                    const newSubArray = item.map((subItem, j) => {
                        if (j === subIndex) {
                            const newSubSubArray = [...subItem];
                            newSubSubArray[subSubIndex] = !newSubSubArray[subSubIndex];
                            return newSubSubArray;
                        }
                        return subItem;
                    });
                    return newSubArray;
                }
                return item;
            });
            return newState;
        });
    };

    const loadVideo = (videoUrl) => {
        setCurrentVideoUrl(videoUrl);
    };

    return (
        <div className="container mx-auto p-6">
            <div className="flex flex-col md:flex-row">
                {/* Video and Buttons Section */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-lg mr-4 mb-4 md:mb-0">
                    <iframe
                        width="100%"
                        height="500"
                        src={currentVideoUrl}
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
                    <h2 className="text-3xl text-justify font-bold text-gray-800 mb-4">{course.title}</h2>
                </div>

                {/* Lessons Section */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full md:w-1/3">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Course Lessons</h3>
                    {course.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="mb-4">
                            <div 
                                className={`flex items-center justify-between cursor-pointer ${lesson.isLocked && !isEnrolled ? 'bg-gray-400' : 'bg-blue-500'} text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200`}
                                onClick={() => {
                                    if (!lesson.isLocked || isEnrolled) {
                                        toggleDropdown(lessonIndex);
                                        loadVideo(lesson.videoUrl);
                                    }
                                }}
                            >
                                <div className="flex-1 text-left">
                                    <h4 className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{lesson.title} {lesson.isLocked && !isEnrolled && <i className="fas fa-lock ml-2" />}</h4>
                                </div>
                                <div className="flex-none text-gray-200">
                                    <span className={`transform transition-transform duration-200 ${openLesson[lessonIndex] ? 'rotate-90' : ''}`}>
                                        ➤
                                    </span>
                                </div>
                            </div>
                            {openLesson[lessonIndex] && (
                                <ul className="list-none mt-2 pl-0">
                                    {lesson.subLessons.map((subLesson, subIndex) => (
                                        <div key={subIndex} className="mt-1">
                                            <div 
                                                className={`flex justify-between cursor-pointer ${subLesson.isLocked && !isEnrolled ? 'bg-gray-300' : 'bg-gray-200'} text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200`}
                                                onClick={() => {
                                                    if (!subLesson.isLocked || isEnrolled) {
                                                        toggleSubDropdown(lessonIndex, subIndex);
                                                        loadVideo(subLesson.videoUrl);
                                                    }
                                                }}
                                            >
                                                <h5 className="font-medium">{subLesson.title} {subLesson.isLocked && !isEnrolled && <i className="fas fa-lock ml-2" />}</h5>
                                                <span className={`transform transition-transform duration-200 ${openSubLesson[lessonIndex][subIndex] ? 'rotate-90' : ''}`}>
                                                    ➤
                                                </span>
                                            </div>
                                            {openSubLesson[lessonIndex][subIndex] && (
                                                <div className="bg-white shadow rounded-lg mt-1 p-4">
                                                    <p className="text-gray-600">{subLesson.details}</p>
                                                    {subLesson.subSubLessons && subLesson.subSubLessons.map((subSubLesson, subSubIndex) => (
                                                        <div key={subSubIndex} className="mt-2">
                                                            <div 
                                                                className={`flex justify-between cursor-pointer ${subSubLesson.isLocked && !isEnrolled ? 'bg-gray-200' : 'bg-gray-300'} text-gray-800 py-1 px-4 rounded-lg hover:bg-gray-400 transition duration-200`}
                                                                onClick={() => {
                                                                    if (!subSubLesson.isLocked || isEnrolled) {
                                                                        toggleSubSubDropdown(lessonIndex, subIndex, subSubIndex);
                                                                        loadVideo(subSubLesson.videoUrl);
                                                                    }
                                                                }}
                                                            >
                                                                <h6 className="font-medium">{subSubLesson.title} {subSubLesson.isLocked && !isEnrolled && <i className="fas fa-lock ml-2" />}</h6>
                                                                <span className={`transform transition-transform duration-200 ${openSubSubLesson[lessonIndex][subIndex][subSubIndex] ? 'rotate-90' : ''}`}>
                                                                    ➤
                                                                </span>
                                                            </div>
                                                            {openSubSubLesson[lessonIndex][subIndex][subSubIndex] && (
                                                                <div className="bg-white shadow rounded-lg mt-1 p-4">
                                                                    <p className="text-gray-600">{subSubLesson.details}</p>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
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
