
import './App.css'
import Home from './Components/Home'
import NavBar from './Components/NavBar'

function App() {
  const [cart, setCart] = useState(0)
 const addCart = (item) => {
  setCart([...cart, item])
 }
  return (
    <>
    <div id= "root">
    <NavBar/>
    <Home addCart={data} />
    <Card data={data}/>
    </div>
    </>
  )
}

export default App
