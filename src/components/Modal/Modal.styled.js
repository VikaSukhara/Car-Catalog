import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  max-width: 541px;
  overflow-y: auto;
  border-radius: 10px;
  background-color: white;
  width: 541px;
  height: 752px;
`;

export const GeneralWraper = styled.div`
  padding: 40px 36px 0 35px;
  height: 752px;
`;

export const Button = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  color: black;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Ul = styled.ul`
  margin-left: 128px;
  margin-right: 128px;
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
`;

export const Li = styled.li`
  width: 247px;
  height: 426px;
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 469px;
  height: 255px;
  border-radius: 24px;
`;

export const ImgCross = styled.img``;

export const Title = styled.p`
  color: #121417;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
export const Rental = styled.h2`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  margin-bottom: 8px;
`;

export const Accessories = styled.h3`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
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
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Parag = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-left: 6px;
  margin-top: 0;
  margin-bottom: 0;
`;



export const Stick = styled.span`
  color:#D8D6D4 ;
`;


export const ParagWrap = styled.div`
  width: 350px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 14px;
`;

export const ParagWrapTwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 24px;
  gap: 6px;
`;

export const Paragr = styled.p`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-top: 14px;
  margin-bottom: 24px;
`;

export const ConditionWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Paragraph = styled.p`
  display: flex;
  /* padding-left: 14px;
padding-right: 14px; */
  justify-content: center;
  align-items: center;
  gap: 3px;
  border-radius: 35px;
  background: #f9f9f9;

  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  padding: 7px 14px;

  color: #363535;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.24px;
  margin-bottom: 8px;
`;

export const Span = styled.span`
  color: #3470ff;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;
`;

export const OrderButton = styled.button`
  display: inline-flex;

  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #ffffff;
  width: 168px;
  height: 44px;
  border: none;
  margin-top: 16px;
  margin-bottom: 40px;
  &:hover{
    background: #0B44CD
  }
`;

export const A = styled.a`
  color: #ffffff;
`;
