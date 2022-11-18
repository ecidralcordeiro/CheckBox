import React from 'react';
import Items from './components/Items';
import './App.css';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Checkbox() {
	return (
		<div>
			<Link
				to="/"
				style={{
					marginLeft: '8px',
					outline: 'none',
					textDecoration: 'none',
					fontWeight: '600',
					border: '1px solid #1976d2',
					borderRadius: '900px',
					color: '#1976d2',
					padding: '8px 16px',
					display: 'flex',
					alignItems: 'center',
					width: 'fit-content',
				}}
			>
				<ArrowBackIosIcon></ArrowBackIosIcon>
				Voltar
			</Link>
			<Items />
		</div>
	);
}
