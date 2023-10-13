import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg gap-10">
      <h1 className='text-9xl'>Banquet Bazaar</h1>
      <div className="z-10 max-w-5xl w-full items-center justify-center  text-sm lg:flex">

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-center justify-center gap-5 lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Link href='/login'> <button className=" custom-btn btn-15" id="signIn">Log In</button></Link>
          <Link href='/signup'> <button className=" custom-btn btn-15" id="signUp">Sign Up</button></Link>


        </div>
      </div>

    </main>
  )
}
