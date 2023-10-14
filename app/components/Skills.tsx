const skills = [
  { skill: 'Javascript' },
  { skill: 'Python' },
  { skill: 'C++' },
  { skill: 'Django Rest Framework' },
  { skill: 'GraphQL' },
  { skill: 'VueJS' },
  { skill: 'NuxtJS' },
  { skill: 'ReactJS' },
  { skill: 'NumPy' },
  { skill: 'Pandas' },
  { skill: 'Matplotlib' },
  { skill: 'TensorFlow' },
  { skill: 'PyTorch' },
  { skill: 'Postgres' },
  { skill: 'AWS' },
  { skill: 'Docker' },
  { skill: 'Adobe XD' },
  { skill: 'Figma' },
  { skill: 'Django' },
  { skill: 'Solidworks' },
]

import React from 'react'

export default function Skills() {
  return (
    <div className="my-10 md:mx-40 mx-3">
      <div>
        <h1 className="text-4xl font-black text-center text-primary py-5">Skills</h1>
        {skills.map(({skill}) => (
          <button key={skill} className="btn btn-primary btn-outline normal-case text-xl m-1">{skill}</button>
        ))}
      </div>
    </div>
  )
}
