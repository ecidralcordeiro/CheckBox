import React from 'react'
import Item from './components/Item'
import Items from './components/Items'
import styles from './App.css';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Checkbox() {
  return (
    <div>
    
    <Button variant='text' href='/' sx={{
      top: '2em',
      left: '1em',
      borderRadius:'900px',
      fontWeight: '600',
    }}>
      <ArrowBackIosIcon></ArrowBackIosIcon>
      Voltar
    </Button>
    <Items></Items>   
    </div>
  )
}

export default Checkbox