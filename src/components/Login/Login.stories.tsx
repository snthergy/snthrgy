import React from "react";
import styled from "styled-components";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story} from "@storybook/react/types-6-0";

import {Login, LoginProps} from "./Login";

export default {
  title: "Login",
  component: Login,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

const Template: Story<LoginProps> = args => (
  <Container>
    <Login {...args} />
  </Container>
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Login",
};
