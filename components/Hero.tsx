import Image from 'next/image';
import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <section className=' bg-pink-300 w-full text-center h-screen p-4'>
      <h1 className='uppercase font-bold text-3xl'>Hero</h1>

      <div className='flex flex-row'>
        {Array(4).fill(1).map((_, index) => (
            <p key={index}>&#9733;</p>
        ))}
      </div>

      <div>
        <Button css="bg-green-300" type='button' title='component button'></Button>
      </div>
    </section>
  );
}

export default Hero;
