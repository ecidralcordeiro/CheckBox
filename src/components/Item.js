import { Checkbox, Container, Typography } from '@mui/material';
import React from 'react';

export default function Item(props) {
	return (
		<Container
			sx={{
				paddingTop: '4px',
			}}
		>
			<Typography
				sx={{
					color: '#fff',
					textTransform: 'uppercase',
					fontWeight: '600',
					letterSpacing: '2px',
					textAlign: 'center',
				}}
			>
				<Checkbox
					type="checkbox"
					value={props.isChecked}
					onChange={() => props.handleChangeItem(props.id)}
					sx={{
						color: '#fff',
					}}
				/>
				{props.title}
			</Typography>
		</Container>
	);
}
