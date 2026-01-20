
// Tests for ContactForm.stories.tsx

// import necessary modules and components
import type { Meta, StoryObj } from '@storybook/react';
import ContactForm from './ContactForm';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../../features/contact/contactSlice';

// helper function to create a Redux store with preloaded state
const createStore = (preloadedState = {}) =>
  configureStore({
    reducer: { contact: contactReducer },
    preloadedState: { contact: { status: 'idle', error: null, ...preloadedState } },
  });

// define metadata for the ContactForm stories
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

// Shows the form with validation errors
export const WithError: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Shows the form with validation errors.',
      },
    },
  },
};

// Shows the form while submission is in progress 
export const Submitted: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Shows the form after a successful submission.',
      },
    },
  },
};
