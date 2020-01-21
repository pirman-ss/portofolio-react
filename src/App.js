import React from 'react';
import Header from './component/Header';
import './App.css';
import Profile from './component/Profile';
import Body from './component/Body';
import Porto from './component/Porto';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Profile/>
        <Body/>
        <Porto/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
