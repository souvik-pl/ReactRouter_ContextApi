import React, { useState, useContext } from 'react';
import { PayContext } from '../context/PayContext';
import './Payment.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Payment() {
	
	const [pay, setPay] = useContext(PayContext);
	
	//importing system date
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; //as january = 0
	var yyyy = today.getFullYear();
	if(dd<10){ dd = '0' + dd; }
	if(mm<10){ mm = '0' + mm; }
	var day = yyyy + '-' + mm + '-' + dd;
	
	
	//card credentials
	const [cardNo, setCardNo] = useState('');
	const [name, setName] = useState('');
	const [date, setDate] = useState('');
	const [code, setCode] = useState('');
	const [amount, setAmount] = useState(0);
	
	
	const [cardDigits, setCardDigits] = useState([]);
	
	const updateCard = (e) => {
		setCardNo(e.target.value);
		
		setCardDigits((prev) => {return [...prev,cardNo]});
		
		if((cardDigits.length + 1) !== 16){
			document.getElementById('card').innerHTML = "Card number should be 16 digits";
		}
		else if((cardDigits.length + 1) === 16){
			document.getElementById('card').innerHTML  = "";
		}
	}
	
	const updateName = (e) => {
		setName(e.target.value);
	}
	
	const updateDate = (e) => {
		setDate(e.target.value);
	}
	
	
	const [codeDigits, setCodeDigits] = useState([]);
	
	const updateCode = (e) => {
		setCode(e.target.value);
		
		setCodeDigits((prev) => {return [...prev,code]});
		
		if((codeDigits.length + 1) !== 3){
			document.getElementById('code').innerHTML  = "CVV should be 3 digits";
		}
		else if((codeDigits.length + 1) === 3){
			document.getElementById('code').innerHTML  = "";
		}
	}
	
	const updateAmount = (e) => {
		setAmount(e.target.value);
	}
	
	const submitForm = (e) => {
		e.preventDefault();
		
				
		setPay((prevPays) => {
			return [...prevPays, { cardNo: cardNo, name: name, date: date, code: code, amount: amount }];
		});
		

		
		axios.post('https://jsonplaceholder.typicode.com/posts', pay )
		  .then(response => {
			  alert("Payment Successfull")
		  })
		  .catch(error => {
			  alert("Payment Failed")
		  })
		  
	}
	
  return (
    <div className='Payment'>
		<Link to='/'>
			<button className='Payment__btn--one'>Back to Home</button>
		</Link>

		<div className='Payment__form'>
			<form onSubmit={submitForm}>
				<div className='Payment__form--option'>
					<label>Credit card number:</label>
					<input type='text' value={cardNo} maxLength='16' minLength='16' name='cardNo' required onChange={updateCard} />
					<p id='card' style={{ color: 'red' }}></p>
				</div>
				
				<div className='Payment__form--option'>
					<label>Card holder name:</label>
					<input type='text' value={name} name='name' required onChange={updateName} />
				</div>
				
				<div className='Payment__form--option'>
					<label>Expiration date:</label>
					<input type='date' value={date} min={day} name='date' required onChange={updateDate} />
				</div>
				
				<div className='Payment__form--option'>
					<label>Security code- CVV:</label>
					<input type='text' value={code} maxLength='3' minLength='3' name='code' required onChange={updateCode} />
					<p id='code' style={{ color: 'red' }}></p>
				</div>
				
				<div className='Payment__form--option'>
					<label>Amount:</label>
					<input className='Payment__form--amt' type='number' value={amount} min='1' name='amount' required onChange={updateAmount} />
				</div>
				
				<button className='Payment__btn--two' type='submit'>Make payment</button>
			</form>
		</div>
    </div>
  );
}

export default Payment;