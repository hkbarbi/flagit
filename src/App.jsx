import React, {useState} from 'react';
import Header from "./Header.jsx"
import ColorPicker from "./ColorPicker.jsx";
import Footer from "./Footer.jsx"
import Card from "./Card.jsx";

function App() {

  const [color, setColor] = useState('#b45667')

  return(
    <div className="app" style={{backgroundColor: color}}>
      <ColorPicker setColor={setColor}/>
      <div className='app__flex'>
        <Header/>
        <Card color={color} />
        <Footer/>
      </div>
    </div>
  );
}

export default App
