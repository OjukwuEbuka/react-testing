import React from 'react';
import './app.scss';

import Header from './components/header';
import Headline from './components/headline';

const tempArr = [{
  fName: 'John',
  lName: 'Doe',
  email: 'johndoe@gmail.com',
  age: 132,
  onlineStatus: true
}]

function App() {


  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts."  tempArr={tempArr}/>
      </section>
    </div>
  );
}

export default App;
