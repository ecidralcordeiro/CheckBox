import { Typography, useMediaQuery, Button } from '@mui/material';
import { Box, Container } from '@mui/system';
import { Link } from 'react-router-dom';

import React, { useState, useRef } from 'react';
import Item from './Item';

export default function ItemList() {
	const modoCelularPequenito = useMediaQuery('(max-width:768px)');
	const [percentage, setPercetage] = useState(0);
	const addItemRef = useRef(null);
	/* prettier-ignore */
	const [itemList, setItemList] = useState([
		{ title: 'Cabeçalho apresenta nome do projeto.', id: 1, isChecked: false, classificacao: ""},
		{ title: 'Cabeçalho apresenta versão do documento.', id: 2, isChecked: false, classificacao: "" },
		{ title: 'O FOOTER do documento esta com a paginação e data de criação?', id: 3, isChecked: false, classificacao: "" },
		{ title: 'O indice esta de acordo com o documento?', id: 4, isChecked: false, classificacao: "" },
		{ title: 'O indice leva até a pagina correta ao clicar?', id: 5, isChecked: false, classificacao: "" },
		{ title: 'O NOME DO PROJETO FOI DEFINIDO?', id: 6, isChecked: false, classificacao: "" },
		{ title: 'OS AUTORES FORAM DEFINIDOS?', id: 7, isChecked: false, classificacao: "" },
		{ title: 'A VERSÃO DO PROJETO FOI DEFINIDA?', id: 8, isChecked: false, classificacao: "" },
		{ title: 'O LOCAL DA CRIAÇÃO DO PLANO FOI DEFINIDO?', id: 9, isChecked: false, classificacao: "" },
		{ title: 'A DATA DE CRIAÇÃO DO DOCUMENTO FOI DEFINIDA?', id: 10, isChecked: false, classificacao: "" },
		{ title: 'O NOME DO RESPONSÁVEL PELO PROJETO FOI DEFINIDO?', id: 11, isChecked: false, classificacao: "" },
		{ title: 'O NOME DO REPRESENTANTE DA QUALIDADE FOI DEFINIDO?', id: 12, isChecked: false, classificacao: "" },
		{ title: 'A ASSINATURA DO RESPONSÁVEL PELO PROJETO FOI DEFINIDA?', id: 13, isChecked: false, classificacao: "" },
		{ title: 'A ASSINATURA DO REPRESENTANTE DA QUALIDADE FOI DEFINIDA?', id: 14, isChecked: false, classificacao: "" },
		{ title: 'O OBJETIVO DO PROJETO FOI DEFINIDO?', id: 15, isChecked: false, classificacao: "" },
		{ title: 'AS REFERENCIAS DO PROJETO FORAM DEFINIDAS?', id: 16, isChecked: false, classificacao: "" },
		{ title: 'O LOCAL DE ARMAZENAMENTO FOI DEFINIDO?', id: 17, isChecked: false, classificacao: "" },
		{ title: 'A VISÃO GERAL DO DOCUMENTO FOI DEFINIDA?', id: 18, isChecked: false, classificacao: "" },
		{ title: 'A DOCUMENTAÇÃO, PADRÕES E DIRETRIZES FOI PREENCHIDO?', id: 19, isChecked: false, classificacao: "" },
		{ title: 'A VERSÃO DA DOCUMENTAÇÃO, PADRÕES E DIRETRIZES FOREM DEFINIDOS?', id: 20, isChecked: false, classificacao: "" },
		{ title: 'O PLANO DE AVALIAÇÕES FOI DEFINIDO?', id: 21, isChecked: false, classificacao: "" },
		{ title: 'A AVALIAÇÃO QUE SERÁ REALIZADA FOI DEFINIDA?', id: 22, isChecked: false, classificacao: "" },
		{ title: 'OS ARTEFATOS AVALIADOS FORAM DEFINIDOS?', id: 23, isChecked: false, classificacao: "" },
		{ title: 'A DATA DE AVALIAÇÃO DO PLANO DE AVALIAÇÕES FOI DEFINIDO?', id: 24, isChecked: false, classificacao: "" },
		{ title: 'O AUDITOR DO PLANO DE AVALIAÇÕES FOI DEFINIDO?', id: 25, isChecked: false, classificacao: "" },
		{ title: 'OS REGISTROS DE QUALIDADE FORAM DEFINIDOS?', id: 26, isChecked: false, classificacao: "" },
		{ title: 'AS DEFINIÇÕES DE NÃO CONFORMIDADES FORAM DEFINIDOS?', id: 27, isChecked: false, classificacao: "" },
		{ title: 'FOI ESTABELECIDO O PRAZO DE RESOLUÇÃO DAS NÃO CONFORMIDADES?', id: 28, isChecked: false, classificacao: "" },
		{ title: 'O PROCESSO DE ESCALONAMENTO NO CASO DE NÃO RESOLUÇÃO DAS AÇÕES CORRETIVAS SOLICITADAS FOI DEFINIDO?', id: 29, isChecked: false, classificacao: "" },
	]);

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

	const handleAddClick = () => {
		setItemList((prev) => [
			...prev,
			{
				title: addItemRef.current.value,
				id: itemList.length + 1,
				isChecked: false,
				classificacao: '',
			},
		]);
		addItemRef.current.value = '';
	};

	return (
		<div>
			<Container
				sx={{
					textAlign: 'center',
				}}
			>
				<Typography
					sx={{
						letterSpacing: '3px',
						fontSize: modoCelularPequenito ? '2.5em' : '3em',
						textTransform: 'uppercase',
						fontWeight: '600',
						color: '#FFFFFF',
						textShadow:
							'0 1px 0px #378ab4, 1px 0 0px #5dabcd, 1px 2px 1px #378ab4, 2px 1px 1px #5dabcd, 2px 3px 2px #378ab4, 3px 2px 2px #5dabcd, 3px 4px 2px #378ab4, 4px 3px 3px #5dabcd, 4px 5px 3px #378ab4, 5px 4px 2px #5dabcd, 5px 6px 2px #378ab4, 6px 5px 2px #5dabcd, 6px 7px 1px #378ab4, 7px 6px 1px #5dabcd, 7px 8px 0px #378ab4, 8px 7px 0px #5dabcd',
					}}
				>
					CHECKLIST
				</Typography>
				<div>
					<input ref={addItemRef} placeholder="Adicione um item" />{' '}
					<button onClick={handleAddClick}>Adicionar</button>
				</div>
			</Container>
			{itemList.map((item, index) => (
				<Item
					key={index}
					title={item.title}
					id={item.id}
					isChecked={item.isChecked}
					handleChangeItem={handleChangeItem}
				/>
			))}
			<Box
				sx={{
					paddingTop: '1em',
					textAlign: 'center',
				}}
			>
				<Typography
					sx={{
						color: '#fff',
						fontSize: '2em',
						fontWeight: '700',
					}}
				>
					Porcentagem de aderencia: {percentage.toFixed(2)}%
				</Typography>
				<Typography
					sx={{
						color: '#fff',
						fontSize: '2em',
						fontWeight: '700',
					}}
				>
					Porcentagem de não conformidade: {100 - percentage.toFixed(2)}%
				</Typography>
			</Box>
			<Container
				sx={{
					paddingTop: '2em',
					textAlign: 'center',
				}}
			>
				<Link
					to="/naoconformidades"
					style={{
						marginTop: '16px',
						marginLeft: '8px',
						outline: 'none',
						textDecoration: 'none',
						fontWeight: '600',
						border: '1px solid #1976d2',
						borderRadius: '900px',
						color: '#1976d2',
						padding: '8px 16px',
					}}
					state={{ data: itemList }}
				>
					Gerar não conformidades
				</Link>
			</Container>
		</div>
	);
}
