import Hero from '../Components/Hero/Hero';  
import Movies from '../Components/Movies/Movies';   

  
const Home = (props) => {  
    const {item,setItem} = props
    
    return (  
        <div>  
            <Hero />  
            <Movies item={item} setItem={setItem}/>     
        </div>  
    );  
}  
  
export default Home;
