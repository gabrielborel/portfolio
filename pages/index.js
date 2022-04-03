import { Box, Container, Heading } from '@chakra-ui/react';

const Page = () => {
  return (
    <Container>
      <Box borderRadius='lg' bg='red' p={3} mb={6} align='center'>
        Olá, sou um desenvolvedor front-end!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Gabriel Borel
          </Heading>
          <p>Desenvolvedor </p>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
