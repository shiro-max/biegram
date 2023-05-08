import { useEffect } from "react";
import FeedForm from "./components/Feed_form";
import FeedList from "./components/Feed_list";
import { useSession,signOut } from "next-auth/react";
import Router from "next/router";

const Home = () => {
    const {status,data} = useSession()
    useEffect(()=>{
        if(status === "unauthenticated"){
            Router.replace('/auth/login')
        }
    },[status]);
    if(status === "authenticated"){
    return (
        <div className="container max-w-[600px] w-full p-4 my-20 shadow rounded-md bg-white mx-auto">
            <button type="submit" className="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={()=>signOut()}>Log out</button>
            <FeedForm/>
            <FeedList/>
        </div>
    );
    }
    return(
        <>
        Loading.....
        </>
    )
}

export default Home;