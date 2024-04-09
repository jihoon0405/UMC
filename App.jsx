import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="app">
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button onClick={() => setModalVisible(true)}>버튼 열기</button>
      {modalVisible && <Modal onClose={() => setModalVisible(false)} />}
    </div>
  );
}

export default App;
