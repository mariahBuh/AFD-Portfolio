// This is a Storybook story file for the ProjectsSection component

import type { Meta, StoryObj } from '@storybook/react';
import ProjectsSection from '../Projects/ProjectsSection';
import { MemoryRouter } from 'react-router-dom';

// define metadata for the ProjectsSection stories
const meta: Meta<typeof ProjectsSection> = {
  title: 'Sections/ProjectsSection',
  component: ProjectsSection,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProjectsSection>;

// mock data for projects and filters
const mockProjects = [
  {
    id: '1',
    title: 'Portfolio Website',
    image: 'https://via.placeholder.com/300x200',
    tech: 'React, TypeScript',
  },
  {
    id: '2',
    title: 'E-commerce App',
    image: 'https://via.placeholder.com/300x200',
    tech: 'Vue, Node.js',
  },
];

// mock filters and active filter
const mockFilters = ['All', 'React', 'Vue'];
const mockActiveFilter = 'All';

// define various story scenarios for the ProjectsSection component
export const Default: Story = {
  args: {
    projects: mockProjects,
    filters: mockFilters,
    activeFilter: mockActiveFilter,
    onFilterChange: (filter: string) => alert(`Filter changed: ${filter}`),
  },
};

// Shows the component with no projects
export const Disabled: Story = {
  args: {
    projects: [],
    filters: mockFilters,
    activeFilter: mockActiveFilter,
    onFilterChange: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'No projects available.',
      },
    },
  },
};

// Simulates hover state on project cards
export const Hover: Story = {
  ...Default,
  parameters: {
    pseudo: { hover: true },
    docs: {
      description: {
        story: 'Simulates hover state on project cards.',
      },
    },
  },
};

// Simulates focus state on project cards
export const Active: Story = {
  ...Default,
  parameters: {
    pseudo: { active: true },
    docs: {
      description: {
        story: 'Simulates active state on project cards.',
      },
    },
  },
};