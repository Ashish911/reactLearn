import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import LazyDynamicComponent from './components/LazyDynamicComponent'
import HighOrderFunction from './components/HighOrderFunction'
import ParentComponent from './components/ParentComponent'
import Memo from './components/Memo'

function App() {


  return (
    <>
      {/* <Counter />
      <LazyDynamicComponent />
      <HighOrderFunction /> */}
      {/* <ParentComponent /> */}
      <Memo />
    </>
  )
}

export default App
