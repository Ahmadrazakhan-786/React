import Header from './Components/Header';
import Card from './Components/Card';

const Web = ()=>{
    // const user = "ahmad";

    const users = [
        {
          "name": "Amit Sharma",
          "city": "Mumbai",
          "age": 28,
          "profession": "Software Engineer",
          "profile_photo": "https://example.com/photos/amit.jpg"
        },
        {
          "name": "Priya Verma",
          "city": "Delhi",
          "age": 25,
          "profession": "Graphic Designer",
          "profile_photo": "https://example.com/photos/priya.jpg"
        },
        {
          "name": "Rohan Mehta",
          "city": "Bangalore",
          "age": 30,
          "profession": "Data Scientist",
          "profile_photo": "https://example.com/photos/rohan.jpg"
        },
        {
          "name": "Sneha Kapoor",
          "city": "Pune",
          "age": 27,
          "profession": "Marketing Manager",
          "profile_photo": "https://example.com/photos/sneha.jpg"
        },
        {
          "name": "Vikram Singh",
          "city": "Hyderabad",
          "age": 35,
          "profession": "Entrepreneur",
          "profile_photo": "https://example.com/photos/vikram.jpg"
        }
      ]
      
    return (
        <>
        {/* <Header /> */}
        <div className='p-10'>
            {users.map(function(elem,idx){
                return <Card key={idx} username={elem.name} prof={elem.profession} age={elem.age} city={elem.city} photu={elem.profile_photo} />
            })}
        </div>
        </>
    )
}

// a has been passed as component(Card.jsx) and we can write any other name other than 'a'

export default Web;