// import React, { useState } from 'react';
// import './App.css';
// import Modal from './components/Modal';

// function App() {
//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     <div className="app">
//       <h1>안녕하세요!</h1>
//       <p>내용내용내용</p>
//       <button onClick={() => setModalVisible(true)}>버튼 열기</button>
//       {modalVisible && <Modal onClose={() => setModalVisible(false)} />}
//     </div>
//   );
// }

// export default App;

// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './2week/components/Navbar';
import Footer from './2week/components/Footer';
import MainPage from './pages/MainPage';
import PopularPage from './pages/PopularPage';
import NowPlayingPage from './pages/NowPlayingPage';
import TopRatedPage from './pages/TopRatedPage';
import UpComingPage from './pages/UpComing';
import MovieDetailPage from './pages/MovieDetailPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/now-playing" element={<NowPlayingPage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpComingPage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
