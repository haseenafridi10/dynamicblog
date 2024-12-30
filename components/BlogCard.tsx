import React from 'react'
import {Card, CardContent, CardTitle} from '../components/ui/card';
import Image from 'next/image';
interface BlogCardProps {
  post: {id: string; title: string; description: string; date: string; imageUrl: string};
  isDarkBackground: boolean;
}

const BlogCard = ({ post, isDarkBackground}: BlogCardProps) => {
  return (
    <Card className={`p-4 ${isDarkBackground ? 'text-white bg-slate-700' : 'text-black'} rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}>
    <Image 
      src={post.imageUrl}
      alt={post.title}
      width={600}
      height={200}
      className='w-full h-49 object-cover rounded-t-lg'
    />
    <CardTitle className='text-xl font-normal mt-4 text-center'>{post.title}</CardTitle>
    <br />
    <CardContent className='text-center' > 
      <p>{post.description}</p>
    </CardContent>

    <div className="flex  flex-col items-center mt-4">
      <p className={`text-sm mb-2 `}>
        {/* published on: {new.Date(post.date).toLocalDateString()} */}
        published on: {new Date(post.date).toLocaleDateString()}
      </p>

    <a 
    href={`/posts/${post.id}`}
    className={`w-full px-6 text-white bg-blue-600 rounded hover:bg-blue-500 ${isDarkBackground ? 'bg-black hover:bg-red-500': 'bg-black hover:bg-red-500'}`}
    >Read More</a>
    </div>
    
    
    </Card>
  );
}

export default BlogCard
