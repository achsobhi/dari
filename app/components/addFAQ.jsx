'use client';

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [text, setText] = useState('');
  const maxChars = 400;

//   const handleSubmit = async () => {
//     if (rating === 0 || text.trim() === '') {
//       alert('Please give a rating and write a comment.');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:3000/api/faqs', {
//         rating,
//         comment: text,
//       });
//       alert('Submitted!');
//       setRating(0);
//       setText('');
//     } catch (error) {
//       console.error('Error submitting review:', error);
//     }
//   };

  return (
    <div className="flex flex-col space-y-4 items-start w-full max-w-3xl p-4">
      {/* Star Rating */}
      <div className="flex space-x-1 text-2xl">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            className={`cursor-pointer transition-colors ${
              (hoverRating || rating) >= star ? 'text-yellow-500' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Text Area + Counter + Submit */}
      <div className="flex items-center w-full space-x-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Partager mon expérience"
            maxLength={maxChars}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
          />
          <span className="absolute right-3 bottom-2 text-sm text-gray-400">
            {text.length}/{maxChars}
          </span>
        </div>
        <button
          onClick={''}
          className="bg-black text-white px-6 py-2 rounded-full hover:opacity-90 transition"
        >
          poster
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;
