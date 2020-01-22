import React from 'react';
import Header from './component/Header';
import './App.css';
import Profile from './component/Profile';
import Body from './component/Body';
import Porto from './component/Porto';
import Footer from './component/Footer';
import ClassComponent from './component/ClassComponent';
import FunctionComponent from './component/FunctionComponent';
import Counter from './component/Counter';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Profile/>
        <Body/>
        <Porto/>
        <ClassComponent/>
        <Counter/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
