import React, { Component } from 'react';

import { MyProvider } from './Components/ContextProvider/MyProvider';

import Layout from './Components/Layout';


class App extends Component {



  render() {
    return (
      <MyProvider>
       <div className="App">
              <Layout />
        </div>    
      </MyProvider>
    );
  }
}

export default App;
