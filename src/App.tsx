import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./page/Login";
import FeedPage from './page/FeedPage';
import PostPage from './page/PostPage';
import SignUp from './page/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
