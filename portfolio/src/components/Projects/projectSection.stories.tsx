
import type { Meta, StoryObj } from '@storybook/react';
import ProjectsSection from '../Projects/ProjectsSection';
import { MemoryRouter } from 'react-router-dom';


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

const mockFilters = ['All', 'React', 'Vue'];
const mockActiveFilter = 'All';


export const Default: Story = {
  args: {
    projects: mockProjects,
    filters: mockFilters,
    activeFilter: mockActiveFilter,
    onFilterChange: (filter: string) => alert(`Filter changed: ${filter}`),
  },
};

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