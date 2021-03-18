import React from "react";
import {Story, Meta} from "@storybook/react/types-6-0";
import {PlayButton, ButtonProps} from "./index";

export default {
  title: "PlayButton",
  component: PlayButton,
  argTypes: {
    children: {control: "string"},
    selected: {control: "boolean"},
    isActive: {control: "boolean"},
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const ButtonBase = Template.bind({});
ButtonBase.args = {
  children: "image",
  selected: "boolean",
  isActive: "boolean",
  isMuted: "boolean",
};
