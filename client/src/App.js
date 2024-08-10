import { useState,useEffect } from 'react';
import './App.css';
import Show from './Show.js'
import Create from './Create.js'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'

function App() {

  const [posts, setPosts] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      fetch('http://localhost:3001/page')
      .then(res => res.json())
        .then(data => {
          setPosts(data)
        })
        .catch(error => console.error('Error fetching data:', error));
    }
    
    if(location.pathname  === '/'){
      fetchPosts();
    }
  },[location])

  const navigate = useNavigate();
  const switchCreate = () => {
    navigate('/create')
  }
  const switchShow = () => {
    navigate('/')
  }
  return (
    <div className="App">
      <header className='border-b border-b-slate-200 flex justify-between p-4'>
            <div>
            <h1 className='font-bold text-3xl'>PostWall</h1>
            </div>
            <div>
            <input type="text" name="searchbar" className='bg-slate-50 border border-gray-200 p-0.5 w-60 h-10' placeholder='Search'/>
            <button className='bg-slate-100 p-0.5 h-10 w-20'>Search</button>
            </div>
        </header>

        <Routes>
          <Route path="/" element={<Show posts={posts} func={switchCreate} />}/>
          <Route path="/create" element={<Create func={switchShow} />}/>
        </Routes>
        
    </div>
  );
}

export default App;
