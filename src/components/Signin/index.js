import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  Form,
  FormContent,
  FormButton,
  FormInput,
  FormLabel,
  Text,
  FormH1,
} from "./SigninElements";

const Signin = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">boats</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">{"Email"}</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">{"Password"}</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">{"Sign In"}</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signin;
