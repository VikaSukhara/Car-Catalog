import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 50px;
  width: 1184px;
  margin: 50px auto;
`;

export const Wraper = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
`;

export const Title = styled.h1`
  color: #121417;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
  margin-bottom: 50px;
`;

export const Parag = styled.p`
  color: #121417;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  margin-bottom: 30px;
`;

export const Button = styled(Link)`
  color: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: 350px;
  height: 50px;
  border: 1px solid rgba(251, 251, 251, 0.4);
  background: green;
  margin: 30px auto;
  padding: 10px;

  transition: var(--button-transition);

  &: hover {
    background: rgb(11, 90, 39);
    transform: scale(var(--button-scale));
  }

  color: rgb(255, 255, 255);
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
