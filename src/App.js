import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';

function App() {
  //state with useState of the toggle
  const [toggle, setToggle] = useState('annualy');
  //state of the price
  const basePrice = 19.99;
  const discount = 0.9;
  const [prices, setPrices] = useState(
    {
      basic: Math.round(basePrice*12*0.9*100)/100,
      professional: Math.round((basePrice+5)*12*0.9*100)/100,
      master: Math.round((basePrice+20)*12*0.9*100)/100,
    });

  useEffect(
    ()=>{
    
    if(toggle === 'annualy') setPrices({
      basic: Math.round(basePrice*12*discount*100)/100,
      professional: Math.round((basePrice+5)*12*discount*100)/100,
      master: Math.round((basePrice+20)*12*discount*100)/100,
    })
    else setPrices({
      basic: basePrice,
      professional: basePrice+5,
      master: Math.round((basePrice+20)*100)/100,
    })
  },
  [toggle]
  )

  
  return (
    <div className="container">
      <div className='header'>
        <h1>
          Our Pricing
        </h1>
      </div>

      <div className='toggle'>
        <div className={toggle ==='annualy' ? 'toggle-item highlight' : 'toggle-item'}>
          Annualy
        </div>

        <div className='toggle-item'>
          <label className="switch">
            <input type="checkbox" onChange={()=> toggle === 'annualy' ? setToggle('monthly') : setToggle('annualy')}/>
            <span className="slider round"></span>
          </label>
        </div>

        <div className={toggle ==='monthly' ? 'toggle-item highlight' : 'toggle-item'}>
          Monthly
        </div>
      
      
      
      </div>

      <div className='cards-wrapper'>
        <Card 
        cardName={'Basic'} 
        cardClass={'bg-white'}
        cardValue={prices.basic} 
        cardDescription={['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB']}/>

        <Card 
        cardName={'Professional'} 
        cardClass={'bg-purple'}
        cardValue={prices.professional} 
        cardDescription={['1 TB Storage', '5 Users Allowed', 'Send up to 10 GB']}/>

        <Card 
        cardName={'Master'} 
        cardClass={'bg-white'}
        cardValue={prices.master} 
        cardDescription={['2 TB Storage', '10 Users Allowed', 'Send up to 20 GB']}/>
      </div>
     
    </div>
  );
}

export default App;
