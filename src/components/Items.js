import { Typography, useMediaQuery } from '@mui/material';
import { Box, Container } from '@mui/system';

import React, { useState } from 'react';
import Item from './Item';

export default function ItemList() {
	const modoCelularPequenito = useMediaQuery('(max-width:768px)');
	const [itemList, setItemList] = useState([
		{ title: 'teste', id: 1, isChecked: false },
		{ title: 'teste2', id: 2, isChecked: false },
		{ title: 'teste3', id: 3, isChecked: false },
		{ title: 'teste3', id: 4, isChecked: false },
		{ title: 'teste3', id: 5, isChecked: false },
		{ title: 'teste3', id: 6, isChecked: false },
		{ title: 'teste3', id: 7, isChecked: false },
		{ title: 'teste3', id: 8, isChecked: false },
		{ title: 'teste3', id: 9, isChecked: false },
	]);
	const [percentage, setPercetage] = useState(0);

	const handleChangeItem = (id) => {
		let newItemList = [];
		itemList.map((item) => {
			let newItem = item;
			if (item.id === id) {
				newItem.isChecked = !newItem.isChecked;
			}
			newItemList.push(newItem);
		});
		setItemList(newItemList);

		let percentTotal = newItemList.length;
		let percentCount = newItemList.filter(
			(item) => item.isChecked === true
		).length;
		let percentage = (100 * percentCount) / percentTotal;
		setPercetage(percentage);
	};

	return (
	
		<div>
			<Container sx= {{
        paddingTop: "2em",
        textAlign: "center"
    }}>
        <Typography sx={{
            letterSpacing: "3px",
            fontSize: modoCelularPequenito ? "2.5em": "3em",
            textTransform: "uppercase",
            fontWeight: "600",
            color: "#FFFFFF",
            textShadow: "0 1px 0px #378ab4, 1px 0 0px #5dabcd, 1px 2px 1px #378ab4, 2px 1px 1px #5dabcd, 2px 3px 2px #378ab4, 3px 2px 2px #5dabcd, 3px 4px 2px #378ab4, 4px 3px 3px #5dabcd, 4px 5px 3px #378ab4, 5px 4px 2px #5dabcd, 5px 6px 2px #378ab4, 6px 5px 2px #5dabcd, 6px 7px 1px #378ab4, 7px 6px 1px #5dabcd, 7px 8px 0px #378ab4, 8px 7px 0px #5dabcd",
        }}>CHECKLIST</Typography>
        </Container>
			{itemList.map((item, index) => (
				<Item
					key={index}
					title={item.title}
					id={item.id}
					isChecked={item.isChecked}
					handleChangeItem={handleChangeItem}
				></Item>
			))}
			<Box sx={{
				paddingTop:"1em",
				textAlign: 'center'
			}}>
			<Typography sx={{
				color: '#fff',
				fontSize: '2em',
				fontWeight: "700",
				
			}}>Porcentagem: {percentage.toFixed(3)}%</Typography>
			</Box>
		</div>
		
	);
}