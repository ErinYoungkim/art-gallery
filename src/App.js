import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Gallery from './Gallery';
import ButtonBar from './ButtonBar';


function App() {
  let [currentPhoto, setCurrentPhoto] = useState (12720)
  let [data, setData] = useState ({})
  useEffect (() => {
    document.title = 'Welcome to ArtWorld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${currentPhoto}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }, [currentPhoto])
  const handleIterate = (e) => {
    setCurrentPhoto(currentPhoto + Number(e.target.value))
  }
  
  const displayImg = () => {
    return (
      <Gallery currentPhoto={data.primaryImage} artist={data.artistDisplayName} title={data.title} />

    )
  }
  return (
    <div className='App'>
     <div>
      { displayImg() }
     </div>
      <ButtonBar handleIterate = {handleIterate}/>
    </div>
  );
}

export default App;
