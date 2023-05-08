import { useState } from "react";
import { signIn } from 'next-auth/react';
import  Router  from "next/router";
const LogInForm = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [errorMsg,setErrorMsg] = useState("");

    const handleLogin= async() => {
        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });
        if(res.status === 200){
            Router.replace('/home')
        }
        if(res.status === 401){
            setErrorMsg(res.error)
            setTimeout(()=>{
                setErrorMsg('')
            },2000)
        }
    }
    return (
        <div id="logIn" className="p-8">
            {errorMsg ? <div className=" text-red-500 bg-red-50 p-2 text-sm">{errorMsg}</div> : ' '}
            <form>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-grey-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5  dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="shiro@gmail.com" required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5  dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="password" required />
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-cyan-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-cyan-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <button type="submit" onClick={handleLogin} className="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </div>
    );
}

export default LogInForm;