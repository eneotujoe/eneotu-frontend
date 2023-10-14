import React from 'react'
import type { Metadata } from 'next'
import {motion} from 'framer-motion'

const title = 'About Me'
const description = 'Eneotu Joe is an artificial intelligence researcher'

export const metadata: Metadata = {
  title: title,
  description: description,
}
export default function about() {
  return (
    <div className="prose prose-xl mx-auto my-5">
      <div className="grid grid-cols-1">
        <div className="card bg-neutral shadow-xl mx-3">
          <div className="card-body items-center text-center">
            <h1 className="text-primary font-black md:text-6xl text-4xl my-0">{ title }</h1>
            <p className='text-primary my-0'>I’m an artificial intelligence researcher, I have over 4 years of experience in software engineering and a first-class degree in naval electromechanical engineering.</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 my-4">
        <div className="card bg-neutral shadow-xl mx-3">
          <div className="card-body text-primary">
            <h1 className="card-title text-primary my-0">Education</h1>
            <p className='my-0'>
              BSc in Marine Engineering (Naval Electromechanical Engineering),
            </p>
            <p className='my-0'>
              Constanta Maritime Unversity, Romania
            </p>
          </div>
        </div>
        <div className="card bg-neutral shadow-xl mx-3">
          <div className="card-body text-primary">
            <h1 className="card-title text-primary my-0">Awards</h1>
            <p className='my-0'>
              Best Student Award - Constanta Maritime Unversity, Romania
            </p>
          </div>
        </div>
        <div className="card bg-neutral shadow-xl mx-3">
          <a href="https://www.ej-eng.org/index.php/ejeng/article/view/1739" className='no-underline'>
            <div className="card-body text-primary">
              <h1 className="card-title text-primary my-0">Publication</h1>
              <i>
                Machine Learning Algorithmic Study of the Naira Exchange Rate
              </i>
              <button className="btn btn-primary"> View
                <svg width="24px" height="24px" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                </svg>
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
