import React from 'react';
import Image from 'next/image';

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div className='border border-amber-50 w-[300px] sm:w-[350px] rounded-lg overflow-hidden shadow-lg' data-aos="zoom-in-up">
      
      <div className='flex justify-center'>
        <div className='relative w-[150px] h-[150px] overflow-hidden rounded-full border-4 border-blue-950'>
          <Image
            className='object-cover'
            src={img}
            layout='fill'
            alt={title}
          />
        </div>
      </div>
      
      <div className='p-4 space-y-4'>
        <div className='text-4xl font-extralight'>{title}</div>
        <div>{desc}</div>
        <div className='flex flex-wrap'>
          {tags.map((el) => (
            <div className='bg-gray-200 text-gray-700 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded' key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
