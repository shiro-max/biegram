const SignUp = () => {
    return (
        <div className="p-8">

            <form>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">First Name</label>
                    <input type="text" id="first_name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Jhon" required/>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Last Name</label>
                    <input type="text" id="last_name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Doe" required/>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="shiro@gmail.com" required/>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                    <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="password" required/>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Repeat password</label>
                    <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="repeat-password" required/>
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                    </div>
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                </div>
                <button type="submit" className="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register new account</button>
            </form>

        </div>
    );
}

export default SignUp;