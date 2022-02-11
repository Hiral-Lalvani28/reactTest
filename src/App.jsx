import { useState } from 'react'
import './App.css'
import CardComponent from "./Components/CardComponent/CardComponent";
import BlogDetailPage from './Pages/BlogDetailPage/BlogDetailPage';
import BlogPage from './Pages/BlogPage/BlogPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     {/* <CardComponent/> */}
     {/* <BlogPage/> */}
     <BlogDetailPage/>
    </div>
  )
}

export default App
