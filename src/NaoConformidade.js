import { Box, Center } from '@chakra-ui/react';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Cadastro(props) {
	const location = useLocation();
	const [naoConformidadeList, setNaoConformidadeList] = useState([]);

	useEffect(() => {
		let newList = [...location.state.data].filter(
			(obj) => obj.isChecked === false
		);
		setNaoConformidadeList(newList);
	}, []);

	const handleSendEmail = () => {};

	return (
		<Box h="100vh">
			<Button
				variant="text"
				href="/"
				sx={{
					top: '2em',
					left: '1em',
					borderRadius: '900px',
					fontWeight: '600',
				}}
			>
				<ArrowBackIosIcon></ArrowBackIosIcon>
				Voltar
			</Button>
			<Center
				as="header"
				h={150}
				bg="teal.500"
				color="white"
				fontWeight="bold"
				fontSize="4xl"
				pb="8"
			>
				Formulário
			</Center>
			<section
				style={{ display: 'flex', flexDirection: 'column', margin: '0 auto' }}
			>
				{naoConformidadeList.map((item, index) => (
					<div
						key={item.id}
						style={{
							minHeight: '200px',
							width: '50vw',
							margin: 'auto',
							marginBottom: '40px',
							backgroundColor: 'white',
							borderRadius: '10px',
							padding: '16px',
							boxSizing: 'border-box',
							display: 'grid',
							gridTemplateColumns: '1fr 1fr',
							gridTemplateRows: '1fr 1fr 1fr',
							columnGap: '12px',
							rowGap: '12px',
						}}
					>
						<label style={{ textAlign: 'center' }}>
							Id Checkbox <br /> {item.id}
						</label>
						<label style={{ textAlign: 'center' }}>
							Descrição <br /> {item.title}
						</label>
						<label style={{ textAlign: 'center' }}>
							Observações: <br /> <input type="text" />
						</label>
						<label style={{ textAlign: 'center' }}>
							E-mail: <br /> <input type="text" />
						</label>
						<label style={{ textAlign: 'center' }}>
							Classificação: <br />{' '}
							<select id="classificacao" name="classificacao">
								<option value="">Selecione uma classificação</option>
								<option value="critico">Critico</option>
								<option value="moderado">Moderado</option>
								<option value="tolerável">Tolerável</option>
							</select>
						</label>
						<label style={{ textAlign: 'center' }}>
							Data de Vencimento: <br /> <input type="date" />
						</label>
					</div>
				))}
				<Button
					onClick={() => handleSendEmail()}
					sx={{
						width: 'fit-content',
						margin: 'auto',
						borderRadius: '900px',
						fontWeight: '600',
						marginBottom: '20px',
						border: '2px',
					}}
				>
					Enviar e-mails
				</Button>
			</section>
		</Box>
	);
}
