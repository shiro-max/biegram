import FeedForm from "./components/Feed_form";
import FeedList from "./components/Feed_list";

const Home = () => {
    return (
        <div className="container max-w-[600px] w-full p-4 my-20 shadow rounded-md bg-white mx-auto">
            <FeedForm/>
            <FeedList/>
        </div>
    );
}

export default Home;