import React from 'react'

const Included = () => {
    return (
      
    <div className="max-w-6xl mx-auto px-4 py-52">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Included in Your Purchase</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Every subscription comes packed with these powerful features to accelerate your learning journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Interactive Learning */}
            <div className="p-6 rounded-xl bg-white border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Coding Environment</h3>
            <p className="text-gray-600">Write, run, and debug code directly in your browser with our advanced IDE. Get instant feedback and suggestions.</p>
            </div>

            {/* Personalized Learning */}
            <div className="p-6 rounded-xl bg-white border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Learning Path</h3>
            <p className="text-gray-600">Customized curriculum that adapts to your learning style and pace, ensuring optimal progress.</p>
            </div>

            {/* Career Support */}
            <div className="p-6 rounded-xl bg-white border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Coaching</h3>
            <p className="text-gray-600">Regular 1-on-1 sessions with industry experts to guide your career path and job search strategy.</p>
            </div>

            {/* Project Portfolio */}
            <div className="p-6 rounded-xl bg-white border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-World Projects</h3>
            <p className="text-gray-600">Build a professional portfolio with hands-on projects that demonstrate your skills to potential employers.</p>
            </div>

            {/* Interview Prep */}
            <div className="p-6 rounded-xl bg-white border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Interview Preparation</h3>
            <p className="text-gray-600">Comprehensive interview prep including mock interviews, technical challenges, and feedback sessions.</p>
            </div>

            {/* Community */}
            <div className="p-6 rounded-xl bg-white border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Access</h3>
            <p className="text-gray-600">Join our vibrant community of learners and professionals. Network, collaborate, and grow together.</p>
            </div>
        </div>

        {/* Money-back Guarantee */}
        {/* <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-lg">
            <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-blue-600 font-medium">30-Day Money-Back Guarantee. No questions asked.</span>
            </div>
        </div> */}
    </div>
    )
}

export default Included;



{/* 
    Things to add/include:
        * video Lessons
        * written Lessons/articles
        * code sandbox
        * practice projects/problems
        * code soludions
        * short quizzes
*/}