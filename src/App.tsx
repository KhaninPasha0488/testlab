import React from 'react';

import {withLayout} from "./layaut/Layout";
import './App.css';
import Main from "./components/Main/Main";

function App() :JSX.Element {
  return (
      <>
      <Main/>
      </>

  )
}


export default withLayout(App);