import React, { Component } from 'react';
import logo from './logo.svg';
import skype from './skype.png';
import './App.css';
import PhotoGallery from './PhotoGallery';
import landscape1 from './landscape1.jpg';
import landscape2 from './landscape2.jpg';
import landscape3 from './landscape3.jpg';
import landscape4 from './landscape4.jpg';

class App extends Component {
  render() {
    const imgList = this._initialImgs();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style={{alignItems:"center", justifyContent: "center", display: "flex"}}>
          <PhotoGallery imageUrl={logo} imgList={imgList}/>
        </div>        
      </div>
    );
  }

  _initialImgs()
  {
    const imgObj1={url: landscape1, caption: "this is img 1"};
    const imgObj2={url: landscape2, caption: "this is img 2"};
    const imgObj3={url: landscape3, caption: "this is img 3"};
    const imgObj4={url: landscape4, caption: "this is img 4"};

    const imgList = [];
    imgList.push(imgObj1);
    imgList.push(imgObj2);
    imgList.push(imgObj3);
    imgList.push(imgObj4);

    return imgList;
  }
}

export default App;
