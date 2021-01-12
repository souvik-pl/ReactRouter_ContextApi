import React, { useState, createContext } from 'react';

const PayContext = createContext();

function PayProvider(props){
	
	const [pay, setPay] = useState([]);
	
	return(
		<PayContext.Provider value={[pay,setPay]}>
			{props.children}
		</PayContext.Provider>
	);
}

export { PayContext, PayProvider };