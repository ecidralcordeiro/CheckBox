import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkbox from './Checkbox';
import Home from './Home';
import Cadastro from './NaoConformidade';

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/checkbox" element={<Checkbox />} />
					<Route exact path="/naoconformidades" element={<Cadastro />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
