import styled from 'styled-components';

import { ReactComponent as HeartIcon } from '../img/heart.svg';

export const Heart = styled(HeartIcon)`
  width: 18px;
  height: 18px;

  color: white;
  width: 18px;
  height: 18px;
  transition: fill scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    scale: 1.1;
  }
  &:focus {
    fill: #3470ff;
    color: #3470ff;
  }
`;

export const HeartBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
`;

export const Container = styled.div`
  padding-left: 128px;
  padding-right: 128px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 29px;
  row-gap: 50px;
`;

export const Li = styled.li`
  width: 247px;
  height: 426px;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  position: relative;
`;

export const Img = styled.img`
  width: 247px;
  height: 268px;
  border-radius: 24px;
  margin-bottom: 14px;
`;

export const Title = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  margin-bottom: 8px;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
`;

export const Parag = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding-left: 6px;
  margin-top: 0;
  margin-bottom: 0;
`;

export const ParagWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 28px;
`;

export const Button = styled.button`
  display: flex;

  height: 44px;

  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #ffffff;
  border: none;
  &:hover {
    background: #0b44cd;
  }
`;
