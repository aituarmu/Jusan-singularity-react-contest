import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPosts from './pages/AllPosts';
import NewPost from './pages/NewPost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<AllPosts />} />
          <Route path="/new" element={<NewPost />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
