import './Pro.css';
const Pro = ()=>{

    const user = "ahmad";
    const abc = ()=>{
        console.log("hello");
    }
    abc();

    return (
        <div>
            <h1>Username is {user} </h1>
            <button onClick={abc}>Change User</button>
        </div>
    )
}

export default Pro;