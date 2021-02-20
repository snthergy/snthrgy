import React from "react";
import {Story, Meta} from "@storybook/react/types-6-0";
import {Button, ButtonProps} from "./index";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {control: "string"},
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const ButtonBase = Template.bind({});
ButtonBase.args = {
  children: "Test",
};
