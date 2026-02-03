import React from 'react';
import { useParams } from 'react-router-dom';

function CourseDetail() {
  const { id, type } = useParams();

  // Mock content with PDF link
  const content = {
    notes: {
      title: "Course Notes",
      content: "Here are the detailed notes for the course...",
      pdfUrl: "https://tite.ac.in/assets/frontend/pdf/lecture-notes/btech/2ndsem/c-programming.pdf"
    },
    'e-notes': {
      title: "Electronic Notes",
      content: "Interactive electronic notes with examples..."
    },
    video: {
      title: "Video Lectures",
      url: "https://example.com/course-video"
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        {content[type]?.title}
      </h1>
      
      {type === 'video' ? (
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
          {/* Add your video player component here */}
          <div className="p-4 text-center">Video Player Placeholder</div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            {content[type]?.content}
          </p>
          {type === 'notes' && (
            <div className="mt-4">
              <a 
                href={content.notes.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
                </svg>
                Download PDF Notes
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CourseDetail;