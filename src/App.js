import React from 'react'
import {Navbar} from './Navbar/Navbar'
import { Card } from "./Cards/Card";
import Products from './Products.json'
 const App = () => {
  return (
    <div className='bg-dark vh-100'>
        <Navbar/>
        <Card Data={Products}/>
    </div>
  )
}
export default App;