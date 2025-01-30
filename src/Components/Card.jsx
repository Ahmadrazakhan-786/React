const Card = (props)=>{
    console.log(props);
    return (
        <>
        <div className="bg-white text-black inline-block p-6 text-center rounded ">
            <h1> {props.user} {props.surname}</h1>
            <h2>{props.city}, age</h2>
            <button>Add Friend</button>
            {/* <h1 className="text-3xl">Username is {props.a}</h1> */}
        </div>
        </>
    )
}

export default Card;