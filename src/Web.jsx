import Header from './Components/Header';
import Card from './Components/Card';

const Web = ()=>{
    // const user = "ahmad";
    return (
        <>
        {/* <Header /> */}
        <div className='p-10'>
        <Card user="Ahmad" age="21" city="Muzaffarpur" surname="Khan"/> 
        </div>
        </>
    )
}

// a has been passed as component(Card.jsx) and we can write any other name other than 'a'

export default Web;