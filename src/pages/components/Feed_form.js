const FeedForm = () => {
    return (
        <div>
            <form className="m-2 bg-white">
                <textarea name="text" rows="3" className=" w-full p-2 border-2 rounded-md" placeholder="What's on your mind..."></textarea>
                <button type="submit" className="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </div>
    );
}

export default FeedForm;