import React, { Component } from 'react';
import './App.css';
import Accordion from './state-drills/Accordion';

  const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]

  class App extends Component {
  render() {
     return (
     <div classNamme ='App'>
       <h2>Accordion</h2>
        <Accordion sections={sections} />
     </div>
     ) 
    }}


//import Tabs from './state/Tabs';
//import Bomb from './state-drills/Bomb';
//import HelloWorld from './state-drills/HelloWorld';
//import RouletteGun from './state-drills/RouletteGun';
//import TheDate from './state/TheDate';
//import Counter from './state/Counter';

/*
class App extends Component {
 render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <HelloWorld />
        <h2>Bomb</h2>
        <Bomb />
        <h2>Roulette Gun</h2>
        <RouletteGun bulletInChamber={3} />
      </div>
    );
  }
}
*/

/* tabs prop
const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

class App extends Component {
  render() {
    return <div>
    <Tabs tabs={tabsProp} />
  </div>
   }
 }
 */
export default App;
