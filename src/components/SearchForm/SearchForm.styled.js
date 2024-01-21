import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 128px;
  padding-right: 128px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: 18px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  margin-bottom: 8px;
`;

export const Select = styled.select`
  display: flex;
  padding: 14px 18px 14px 18px;

  /* width: 224px; */
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 14px;
  background: #f7f7fb;
  border: none;
  /* &.option{
    color: red,
    background-color: blue;
} */
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 14px;
  background: #f7f7fb;
  width: 160px;
  height: 48px;
  align-items: center;
  width: 160px;
  height: 48px;
  padding-left: 24px;
  box-sizing: border-box;

  background: #f7f7fb;
  border: none;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #ffffff;
  border: none;
  height: 48px;
  width: 136px;
`;
