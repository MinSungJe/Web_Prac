/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '민성제식 혼밥 맛집';
  let [title, setTitle] = useState(['가츠동 맛집 추천', '국밥 맛집 추천', '제육볶음 맛집 추천']);
  let [like, setLike] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: 'red', fontSize: '16px'}}>React 쓰는 민성제</h4>
      </div>
      <div className="list">
        <h4>{title[0]} <span onClick={()=>{setLike(like+1)}}>🥰</span> {like} </h4>
        <p>3월 19일 발행</p> <button onClick={()=>{setTitle(['에비동 맛집 추천', '국밥 맛집 추천', '제육볶음 맛집 추천'])}}>다음</button>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>3월 20일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>3월 21일 발행</p>
      </div>
    </div>
  );
}

export default App;
