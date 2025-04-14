import AddProduct from '../Practice/AddProduct'
import Favfruits from '../Practice/Favfruits'
import NewProduct from '../Practice/NewProduct'
import ProductCard from '../Practice/ProductCard'
import './App.css'
import Counter from './Components/Counter'
import InputName from './Components/InputName'
import Likes from './Components/Likes'
import LoginForm from './Components/LoginForm'
import NewLoginForm from './Components/NewLoginForm'
import StudentList from './Components/StudentList'
import Team from './Components/Team'
import UserCard from './Components/UserCard'

function App() {

  // const products = [
  //   { name: "Apple", price: "$2", available: true },
  //   { name: "Banana", price: "$1", available: false },
  //   { name: "Orange", price: "$3", available: true }
  // ];
  

  return (
    <>
    {/* <Team /> */}

    {/* <h1>React Counter App</h1>
    <Counter /> */}

      {/* <Likes /> */}

      {/* <InputName /> */}

      {/* <LoginForm /> */}

      {/* <NewLoginForm /> */}

      {/* <StudentList /> */}

      {/* <Favfruits /> */}

      
      {/* <UserCard name='Ahmad' email='ark@123.com' />
      <UserCard name='Ashir' email='ash@786.com' />
      <UserCard name='Zaid'  email='zaid@456.com'/> */}

      {/* <ProductCard ProductName='Laptop' Price='35000' available={true} />
      <ProductCard ProductName='Mouse' Price='200' available={false} />
      <ProductCard ProductName='Keyboard' Price='700' available={true} /> */}

        {/* {products.map((item, idx)=>(
            <NewProduct 
              key={idx}
              name={item.name}
              price={item.price}
              available={item.available}
            />
        ))} */}

        <AddProduct />

    </>
  )
}

export default App
