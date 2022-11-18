import {
    Flex,
    Box,
    Center,
    FormControl,
    Input,
    FormLabel,
    HStack,
    Button,
  } from "@chakra-ui/react";
  
  export default  function Cadastro(props) {
    return (
      <Box h="100vh">
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
        <Flex
          align="center"
          justify="center"
          bg="blackAlpha.200"
          h="calc(100vh - 150px)"
        >
          <Center
            w="100%"
            maxW={840}
            bg="white"
            top={100}
            position="absolute"
            borderRadius={5}
            p="6"
            boxShadow="0 1px 2px #ccc"
          >
            <FormControl display="flex" flexDir="column" gap="4">
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="nome">Id Checkbox</FormLabel>
                  <p>{props.id}</p>  
                </Box>

                <Box w="100%">
                  <FormLabel htmlFor="nome">Descrição</FormLabel>
                 <p>{props.title}</p>                </Box>
               
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="nasc">Observações</FormLabel>
                  <Input id="text" type="text" />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <Input id="text" type="text" />

                </Box>
                
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="nasc">Data Notificação</FormLabel>
                  <Input id="nasc" type="date" />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="nasc">Data de Vencimento</FormLabel>
                  <Input id="nasc" type="date" />
                </Box>
                
              </HStack>
            
              <HStack spacing="4">
               
                
              </HStack>
             
            
              <HStack justify="center">
                <Button
                  w={240}
                  p="6"
                  type="submit"
                  bg="teal.600"
                  color="white"
                  fontWeight="bold"
                  fontSize="xl"
                  mt="2"
                  _hover={{ bg: "teal.800" }}
                >
                  Enviar E-mail
                </Button>
              </HStack>
            </FormControl>
          </Center>
        </Flex>
      </Box>
    );
  }
  
