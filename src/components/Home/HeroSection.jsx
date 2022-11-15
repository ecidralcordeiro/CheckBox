import { Button, Typography } from '@mui/material'
import { borderRadius, Box, Container, textAlign } from '@mui/system'

import React from 'react'

function HeroSection() {
  return (
    
    <Box sx={{
        width: "100%",
        height:"100%",
        


    }} >
        
        <Container sx= {{
        paddingTop: "4em",
        
        
    }}>
        <Typography sx={{
            letterSpacing: "3px",
            fontSize: "4em",
            textTransform: "uppercase",
            fontWeight: "600",
            color: "#FFFFFF",
            textShadow: "0 1px 0px #378ab4, 1px 0 0px #5dabcd, 1px 2px 1px #378ab4, 2px 1px 1px #5dabcd, 2px 3px 2px #378ab4, 3px 2px 2px #5dabcd, 3px 4px 2px #378ab4, 4px 3px 3px #5dabcd, 4px 5px 3px #378ab4, 5px 4px 2px #5dabcd, 5px 6px 2px #378ab4, 6px 5px 2px #5dabcd, 6px 7px 1px #378ab4, 7px 6px 1px #5dabcd, 7px 8px 0px #378ab4, 8px 7px 0px #5dabcd",
        }}>CHECKLIST</Typography>
        </Container>
        <Container sx={{
            paddingTop:"1em",
            
            
        }}>
            <Typography sx={{
                textTransform:"uppercase",
                fontSize:"1.8em",
                color:"#fff",
                fontWeight:"900",
                letterSpacing: "3px",
                width: "55%",
                overflowWrap: "break-word" , 
                wordWrap: "break-word",
                wordBreak: "break-word",
                
            }}>Ferramenta para demarcar Não-Conformidades</Typography>
            <Typography sx={{
                textTransform:"uppercase",
                fontSize:"0.7em",
                paddingTop:"1em",
                color:"#fff",
                fontWeight:"600",
                letterSpacing: "3px",
                width: "40%",
                overflowWrap: "break-word" , 
                wordWrap: "break-word",
                wordBreak: "break-word",
                
            }}>Feito por: Eduardo Cidral, Lucca, Tiago Yukio e Nicolas Brun</Typography>
        </Container>
        <Container sx={{
            
            
            paddingTop: "2em",
        }}><Button variant="outlined" sx={{
            fontWeight:"600",
            borderRadius:"900px"
        }
        }>Comece Agora</Button>
        
        </Container>
        
        </Box>
  )
}

export default HeroSection