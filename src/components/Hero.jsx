import React from 'react'
import heroImg from '../assets/hero1.png'
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
const Hero = () => {
  return (
    <div>
      <div className="bg-emerald-100 py-24">
        <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8">
          <article>
            <h1 className="text-6xl font-bold tracking-wider">
              Furkan Karatekin
            </h1>
            <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
              Front-End Developer
            </p>
            <div className="flex gap-x-4 mt-4">
              <a href="https://github.com/furkankaratekin" target='blank'>
                <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/furkan-karatekin-479017234/" target='blank'>
                <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
              </a>
              <a href="https://www.instagram.com/furkankaratekinnn/" target='blank'>
                <FaInstagramSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
              </a>
            </div>
          </article>
          <article className='hidden md:block'>
            <img src={heroImg} alt="heroImg" className='h-80 lg:h-96' />
          </article>
        </div>
      </div>
    </div>
  );
}

export default Hero
