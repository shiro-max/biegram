import Image from "next/image";

const FeedList = () => {
    return (
        <div id="feedList">
            <div className="card p-4 bg-white shadow rounded-md m-2">
                <div className="imageWarp w-[200] h-[200]">
                    <Image className="mx-auto" src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="300" height="200" alt="feedPhoto"/>
                </div>
                <p className="my-4 text-lg mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt officiis, temporibus doloremque nisi maiores tenetur nobis quas quod delectus, dicta optio tempora praesentium saepe pariatur ipsam esse animi eum? Ullam.</p>
                <hr />
                <div className="flex gap-2 my-2 items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                        </svg>
                    </span>
                    <h4 className=" text-xl">Like</h4>
                </div>
            </div>
        </div>
    )
}

export default FeedList;