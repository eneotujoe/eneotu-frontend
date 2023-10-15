import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='container text-2xl text-center text-warning mx-auto my-16'>
      <h2>Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}