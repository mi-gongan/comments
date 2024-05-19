import type { Meta, StoryObj } from "@storybook/react";
import CopyBox from "@components/mypage/block/ShareForm/CopyBox";

const meta: Meta<typeof CopyBox> = {
  title: "Ui/CopyBox",
  component: CopyBox,
};

export default meta;
type Story = StoryObj<typeof CopyBox>;

export const Default: Story = {
  args: {
    linkFormat: "https://www.naver.com",
  },
};
