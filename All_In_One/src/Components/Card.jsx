const Card = (props)=>{

    console.log(props.city);

    return (
        <>
        <div className=" mr-7 bg-white text-black inline-block p-6 text-center rounded ">
            <img className=" ml-8 h-32 w-32 rounded-full mb-3" src={props.photu} alt="" />
            <h1 className="text-2xl font-semibold mb-4"> {props.username}</h1>
            <h2>{props.city}, {props.age}</h2>
            <h4 className="text-blue-400">{props.prof}</h4>
            <button className=" mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium">Add Friend</button>
            {/* <h1 className="text-3xl">Username is {props.a}</h1> */}

            
        </div>
        </>
    )
}

export default Card;