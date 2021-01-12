import React from 'react';
import './Card.css';

function Card({ cardNo, name, date, code }){
	return(
		<div className='Card'>
			<div className='Card__parent'>
				<p className='Card__name'>Account holder name: {name}</p>
				<p className='Card__cardNo'>Card Number: {cardNo}</p>
				<p className='Card__date'>Expiration date: {date}</p>
				<p className='Card__code'>CVV: {code}</p>
			</div>
		</div>
	);
}


export default Card;