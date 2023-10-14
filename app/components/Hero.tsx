import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    // style={{backgroundImage: `url(${background})`}}
    <div className="hero min-h-screen -mt-16" style={{backgroundImage: `url('/bg.png')`}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="avatar flex justify-center">
            <div className="mask mask-squircle w-96">
            <Image
              src="/eneotu-joe.png"
              alt="bg"
              width={100}
              height={24}
              priority
            />
            </div>
          </div>
          <div className="flex flex-col justify-center mt-3">
            <h1
              className="text-4xl md:text-8xl sm:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-violet-400"
            >
              Eneotu Joe
            </h1>
            <p className="prose text-primary font-thin text-2xl my-3">{`I'm An Artificial Intelligence Researcher`}</p>
            <p className="prose font-thin text-2xl mb-3">And Software Engineer</p>
            <button className="btn btn-primary btn-outline font-thin">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  )
}
