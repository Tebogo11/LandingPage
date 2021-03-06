import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 689px;

  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 18px;
  }
`;

export const Form = styled.form`
  background: #010101;
  height: auto;
  max-width: 400px;
  width: 100%;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  z-index: 1;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  color: #fff;
  font-size: 14px;
`;

export const FormInput = styled.input`
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  padding: 16px 16px;
`;

export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.p`
  margin-top: 24px;
  color: #fff;
  text-align: center;
  font-size: 14px;
`;
