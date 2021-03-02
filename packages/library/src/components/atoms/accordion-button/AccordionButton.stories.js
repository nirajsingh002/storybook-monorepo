import React from 'react';

import AccordionButton from '.';

export default {
  title: '/Atoms/button',
  component: AccordionButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <AccordionButton {...args} />;

export const IconButton = Template.bind({});
IconButton.args = {
  label: '',
  isActive: false,
};

