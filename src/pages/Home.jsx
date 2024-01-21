import { Container, Parag, Title, Wraper } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <Wraper>
        <Title>The best rental car company in Ukraine</Title>
        <Parag>
          We offer machines of different brands and different price categories
        </Parag>
        <Parag>Go to the categories and choose your car</Parag>
      </Wraper>
    </Container>
  );
};

export default Home;
