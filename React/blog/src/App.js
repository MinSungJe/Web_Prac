/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '민성제식 혼밥 맛집';
  let [title, setTitle] = useState(['가츠동 맛집 추천', '국밥 맛집 추천', '제육볶음 맛집 추천']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [idx, setIdx] = useState(0);
  let [inputValue, setInputValue] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'red', fontSize: '16px' }}>React 쓰는 민성제</h4>
      </div>

      <button onClick={() => {
        let copy = [...title];
        copy.sort();
        setTitle(copy);
      }}>가나다순정렬</button>

      {/* <div className="list">
        <h4>{title[0]} <span onClick={() => { setLike(like + 1) }}>🥰</span> {like} </h4>
        <p>3월 19일 발행</p> <button onClick={() => {
          let copy = [...title];
          copy[0] = '에비동 맛집 추천';
          setTitle(copy);
        }}>글수정</button>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>3월 20일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => { setModal(!modal) }}>{title[2]}</h4>
        <p>3월 21일 발행</p>
      </div> */}

      {
        title.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {
                setModal(!modal);
                setIdx(i);
              }}>{title[i]}
                <span onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...like];
                  copy[i] = copy[i] + 1
                  setLike(copy)
                }}>🥰</span> {like[i]}</h4>
              <p>3월 20일 발행</p>
              <button onClick={() => {
                let copy = [...title];
                let likeCopy = [...like];
                copy.splice(i, 1);
                likeCopy.splice(i, 1);
                setTitle(copy);
                setLike(likeCopy);
              }}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e) => {
        setInputValue(e.target.value);
      }}></input>
      <button onClick={() => {
        if (inputValue == '')
          return;
        let copy = [...title];
        let likeCopy = [...like];
        copy.unshift(inputValue);
        likeCopy.unshift(0);
        setTitle(copy);
        setLike(likeCopy);
      }}>글발행</button>

      {
        modal == true ? <Modal title={title} idx={idx} /> : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.idx]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

export default App;