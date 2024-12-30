import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import Image from 'next/image'
import React from 'react'

const AuthorCard = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
      <div className="flex items-center animation-fadeIn">

      <img 
        className='w-16 h-16 rounded-full mr-4 object-cover border-2 shadow-lg'
        src='/images/banner_bg.jpg'
        alt='Author image'
      />

      <div>
        <h3 className='text-xl font-bold'>Haseen Afridi</h3>
        <p className="text-slate-400">Telecom Engineer | Web Developer | Content Writer</p>
      </div>
  
      </div>

      <p className='mt-4 text-black leading-relaxed font-lato font-semibold'>
        Haseen Afridi is a dynamic professional with expertise spanning
        telecom, web Developing, and content creation.
      </p>

      <div className="mt-4 flex space-x-3">
        {/* Twitter */}
      <a
        href="https://twitter.com/yourusername" // Replace with your Twitter URL
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition"
        aria-label="Twitter"
      >
        <FaTwitter size={24} />
      </a>
      
      {/* Facebook */}
      <a
        href="https://facebook.com/" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-blue-700 text-white rounded-full shadow hover:bg-blue-800 transition"
        aria-label="Facebook"
      >
        <FaFacebook size={24} />
      </a>
      
      {/* GitHub */}
      <a
        href="https://github.com/"  
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full shadow hover:bg-gray-900 transition"
        aria-label="GitHub"
      >
        <FaGithub size={24} />
      </a>
      </div>

    </div>
  )
}

export default AuthorCard
