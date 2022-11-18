import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box, Container } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';

import React from 'react';

function HeroSection() {
	const modoCelularPequenito = useMediaQuery('(max-width:768px)');
	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
			}}
		>
			<Container
				sx={{
					paddingTop: '4em',
					textAlign: modoCelularPequenito ? 'center' : 'start',
				}}
			>
				<Typography
					sx={{
						letterSpacing: '3px',
						fontSize: modoCelularPequenito ? '2.5em' : '4em',
						textTransform: 'uppercase',
						fontWeight: '600',
						color: '#FFFFFF',
						textShadow:
							'0 1px 0px #378ab4, 1px 0 0px #5dabcd, 1px 2px 1px #378ab4, 2px 1px 1px #5dabcd, 2px 3px 2px #378ab4, 3px 2px 2px #5dabcd, 3px 4px 2px #378ab4, 4px 3px 3px #5dabcd, 4px 5px 3px #378ab4, 5px 4px 2px #5dabcd, 5px 6px 2px #378ab4, 6px 5px 2px #5dabcd, 6px 7px 1px #378ab4, 7px 6px 1px #5dabcd, 7px 8px 0px #378ab4, 8px 7px 0px #5dabcd',
					}}
				>
					CHECKLIST
				</Typography>
			</Container>
			<Container
				sx={{
					paddingTop: '1em',
				}}
			>
				<Typography
					sx={{
						textTransform: 'uppercase',

						fontSize: modoCelularPequenito ? '1em' : '1.8em',
						color: '#fff',
						fontWeight: '900',
						letterSpacing: '3px',
						width: modoCelularPequenito ? '100%' : '55% ',
						overflowWrap: 'break-word',
						wordWrap: 'break-word',
						wordBreak: 'break-word',
						textAlign: modoCelularPequenito ? 'center' : 'start',
					}}
				>
					Ferramenta para demarcar Não-Conformidades
				</Typography>
				<Typography
					sx={{
						textTransform: 'uppercase',

						fontSize: modoCelularPequenito ? '0.5em' : '0.7em',
						paddingTop: '1em',
						color: '#fff',
						fontWeight: '600',
						letterSpacing: '3px',
						width: modoCelularPequenito ? '100%' : '35% ',
						overflowWrap: 'break-word',
						wordWrap: 'break-word',
						wordBreak: 'break-word',
						textAlign: modoCelularPequenito ? 'center' : 'start',
					}}
				>
					Feito por: Eduardo Cidral, Lucca, Tiago Yukio e Nicolas Brun
				</Typography>
			</Container>
			<Container
				sx={{
					paddingTop: '2em',
					textAlign: modoCelularPequenito ? 'center' : 'start',
				}}
			>
				<Link
					to="/checkbox"
					style={{
						outline: 'none',
						textDecoration: 'none',
						fontWeight: '600',
						border: '1px solid #1976d2',
						borderRadius: '900px',
						color: '#1976d2',
						padding: '8px 16px',
					}}
				>
					Comece Agora
				</Link>
			</Container>
		</Box>
	);
}

export default HeroSection;
