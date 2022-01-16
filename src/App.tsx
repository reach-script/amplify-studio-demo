import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SocialB } from './ui-components';

const post = {
  user_name: 'じゃけぇ',
  created_by: '2022-10-31T09:22Z',
  content: 'ここに本文が入りますここに本文が入りますここに本文が入ります',
  count_reply: 10,
  count_retweet: 20,
  count_favorite: 30,
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SocialB post={post} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
