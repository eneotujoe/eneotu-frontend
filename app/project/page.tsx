import React from 'react'
import Link from 'next/link'
import {FaLanguage, FaStar, FaCodeBranch, FaEye} from 'react-icons/fa'

async function fetchRepos() {
    const response = await fetch('https://api.github.com/users/eneotujoe/repos')
    return await response.json()
}
const ReposPage = async () => {
    const repos = await fetchRepos()

    return (
        <div className='prose mx-auto'>
            <div className="grid grid-cols-1 pb-5">
                <div className="card bg-neutral mx-3">
                <div className="card-body items-center text-center">
                    <h1 className="text-primary font-black text-4xl md:text-6xl my-0">Project</h1>
                </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-4">
                {repos.map((repo:any) => (
                    <div key={repo.id} className="card card-bordered border-primary mx-3 p-3">
                        <Link href={repo.html_url} target='_blank' className='text-primary no-underline ' >
                            <p>{repo.name}</p>

                            <div className="flex justify-between">
                                <div>
                                    <FaLanguage />{repo.language}
                                </div>
                                <div>
                                    <FaEye />{repo.visibility}
                                </div>
                                <div>
                                    <FaCodeBranch />{repo.forks_count}
                                </div>
                            </div>


                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
   
export default ReposPage
