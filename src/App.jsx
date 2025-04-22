import './App.css'
import DeleteButton from './components/DeleteButton'
import Form from './components/Form'
import Header from './components/Header'
import LikeFilter from './components/LikeFilter'
import Likesbutton from './components/Likesbutton'
import PostItem from './components/PostItem'
import PostList from './components/PostList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <DeleteButton/>
      <Form/>
      <LikeFilter/>
      <Likesbutton/>
      <PostItem/>
      <PostList/>
    </>
  )
}

export default App
