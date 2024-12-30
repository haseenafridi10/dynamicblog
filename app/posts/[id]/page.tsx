// 'use client'
import React from 'react'
import CommentSection from '@/components/CommentSection'
import AuthorCard from '@/components/AuthorCard'

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


const Post = async ({ params}: {params: {id: string}}) => {
    // const resolvedParams = await params; 
    const { id } = params; 

    const post = posts.find((p) => p.id === id);

    if (!post) {
        return (
            <h2 className='text-2xl font-bold text-center mt-15'>Post not found!</h2>
        )
    }

    const renderParaghs = (description : string) => {
        return description.split('\n').map((para, index) => (
            <p key={index} className='mt-4 text-justify'>
                {para.trim()}
            </p>
        ));
    };
  return (
    <div className='max-w-3xl mx-auto p-5'>
        <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
            {" "}
            {post.title
        }</h1>

        {post.imageUrl && (
            <img src={post.imageUrl}
             alt={post.title}
             className='w-full h-auto rounded-md mt-4' 
            />
         )}
         <div className="mt-6 text-lg text-slate-700">
            {renderParaghs(post.description)}
         </div>


      <CommentSection postId={post.id}/>
      <AuthorCard />
    </div>
  )
}

export default Post
