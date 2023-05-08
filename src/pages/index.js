import Link from 'next/link'
import LogIn from './components/Login_form'
import LogInSvg from './components/Login_svg'


export default function Home() {
  return (
    <div>
      <div>
      <button className='p-2 bg-cyan-200 rounded-md shadow'>
        <Link href="/auth/login">Login</Link>
      </button>
    </div>
    <div>
      <button className='p-2 bg-cyan-200 rounded-md shadow'>
        <Link href="/register">SignUp</Link>
      </button>
    </div>
    </div>
  )
}
