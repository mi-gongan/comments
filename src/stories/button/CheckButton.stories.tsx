import type { Meta, StoryObj } from "@storybook/react";
import CheckButton from "../../components/mypage/atom/CheckBox/CheckButton";

const meta: Meta<typeof CheckButton> = {
  title: "Button/CheckButton",
  component: CheckButton,
};

export default meta;
type Story = StoryObj<typeof CheckButton>;

export const Checked: Story = {
  args: {
    text: "체크",
    checked: true,
  },
};

export const NotChecked: Story = {
  args: {
    text: "체크",
  },
};
