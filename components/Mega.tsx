import React from 'react';
import BlogCard from '../components/BlogCard';

const Mega = () => {
  const posts = [
    {
      id: '1',
      title: 'HTML Block Of Web',
      description: 'Explore the basic of HTML, the core.',
      date: "2024-12-26",
      imageUrl: '/images/slide1.jpeg',
    },
    {
      id: '2',
      title: 'Boostrap, The most Popular Library',
      description: 'Feature-packed frontend toolkit for building fast and responsive sites.',
      date: "2024-12-26",
      imageUrl: '/images/slide2.jpeg',
    },
    {
      id: '3',
      title: 'Github, A propietary developer PLatform',
      description: 'More than 100M people use to discover, fork and contribute to projects.',
      date: "2024-12-26",
      imageUrl: '/images/slide3.jpeg',
    }
  ];

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        Exploring the World of AI and Technology
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post,index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2===0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mega;
