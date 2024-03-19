import logo from './logo.svg';
import './App.css';

function App() {

  let post = '민성제식 혼밥 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: 'red', fontSize: '16px'}}>블로그 제목 들어갈거임</h4>
      </div>
      <h4>{ post }</h4>
    </div>
  );
}

export default App;
