import React from 'react';
import image from '../assets/ThienTan.jpg';
import Button from '@mui/material/Button';
const Home = () => {
  return (
    <div className='flex justify-between'>
      <div>
        <div>
          <p>Hello, I am</p>
          <p>Cao Thien Thien Tan a</p>
          <p>Front-end Developer</p>
          <p></p>
          <p>Lorem ipsum</p>
        </div>
        <div>
          <Button variant='contained'>Contact Me</Button>
          <Button variant='contained'>Knowmore</Button>
        </div>
      </div>
      <div className='w-[400px] h-[600px]'>
        <img src={image} />
      </div>
    </div>
  );
};

export default Home;
