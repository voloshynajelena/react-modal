import React, { useState, useEffect } from 'react';
import './App.css';
import PopupComponent from './components/popupComponent';

function App() {
  const textButton = 'Buy now'
  const [isShowPopup, changeState] = useState(false)
  const [dataPopup, setDataPopup] = useState({})

  useEffect(async () => {
    const data = await fetch(
      'https://api.jsonbin.io/b/5d3088deb06425706972906e',
    ).then(resp => resp.json());

    console.log(data);
    setDataPopup(data)
  }, []);


  return (
    <div className="App">
      <button className='button-text' onClick={_ => changeState(!isShowPopup)}>{textButton}</button>
      {isShowPopup && <PopupComponent onClose={_ => changeState(!isShowPopup)} data={dataPopup} />}
    </div>
  );
}

export default App;
