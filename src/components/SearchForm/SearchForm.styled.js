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
  align-items: end;
`;

export const Label = styled.label`
  color: rgb(84, 84, 84);
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;

export const Select = styled.select`
  display: flex;
  width: 48px;
  padding: 14px 18px 14px 18px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 14px;
  background: #f7f7fb;
  border: none;
  margin-top: 8px;
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  border-radius: 14px;
  background: #f8f8fa;

  width: 160px;
  height: 56px;
  padding-left: 24px;

  border: none;
  margin-top: 15px;
  &::placeholder {
    color: #0b0b0b;
    font-weight: 500;
    font-family: Manrope;
    font-size: 16px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-size: 18px;
  background: green;
  color: #ffffff;
  border: none;
  height: 58px;
  padding: 0 70px;
  &:hover {
    background: rgb(11, 90, 39);
  }
`;
