
import type { Meta, StoryObj } from '@storybook/react';
import ContactForm from './ContactForm';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../../features/contact/contactSlice';

const createStore = (preloadedState = {}) =>
  configureStore({
    reducer: { contact: contactReducer },
    preloadedState: { contact: { status: 'idle', error: null, ...preloadedState } },
  });


const meta: Meta<typeof ContactForm> = {
  title: 'Forms/ContactForm',
  component: ContactForm,
  decorators: [
    (Story) => (
      <Provider store={createStore()}>
        <Story />
      </Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {};

export const WithError: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Shows the form with validation errors. (Manually trigger errors in the UI for demo.)',
      },
    },
  },
};

export const Submitted: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Shows the form after a successful submission. (Manually submit in the UI for demo.)',
      },
    },
  },
};
