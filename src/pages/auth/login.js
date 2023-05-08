import LogInForm from "../components/Login_form";
import LogInSvg from "../components/Login_svg";

const  LogIn= () => {
    return (
        <div className="sm:container sm:shadow-lg w-full sm:max-w-[1100px] mx-auto sm:mt-20 sm:bg-white sm:rounded-lg p-8 h-full">
            <h2 className='text-4xl tracking-wider font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-tl from-red-300 to-violet-400'>Biegram</h2>
            <div className="grid sm:grid-cols-12 gap-4 justify-center">
                <div className="col-span-6 p-4">
                    <LogInSvg />
                </div>
                <div className="col-span-6">
                    <h3 className='mt-8 text-2xl font-bold text-center text-blue-400'>Log In</h3>
                    <LogInForm/>
                </div>
            </div>
        </div>
    );
}

export default LogIn;