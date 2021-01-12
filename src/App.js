import React from 'react';
import './App.css';
import { PayProvider } from './context/PayContext';
import Nav from './component/Nav';
import Payment from './component/Payment';
import Home from './component/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
	<BrowserRouter>
		<PayProvider>
			<div className="App">
				<Nav />
				<Switch>	
					<Route path='/' exact component={Home} />
					<Route path='/payment' exact component={Payment} />
				</Switch>		
			</div>
		</PayProvider>
	</BrowserRouter>
  );
}

export default App;
