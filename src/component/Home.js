import React, { useContext } from 'react';
import { PayContext } from '../context/PayContext';
import Card from './Card';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
	
	const [pay, setPay] = useContext(PayContext);
  
  return (
	
    <div className='Home'>
		<Link to='/payment'>
			<button className='Home__btn'>Proceed to payment</button>
		</Link>
		
		<h4 className='Home__stmt'>Recently used cards</h4>
		
		<div className='Home__cards'>
			
			{pay.map((cards) => {
				return (
					
					<Card cardNo={cards.cardNo} name={cards.name} date={cards.date} code={cards.code}  key={cards.cardNo}/>
				);
			})}
		</div>
    </div>
  );
}

export default Home;