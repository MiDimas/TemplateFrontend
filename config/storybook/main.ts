import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@storybook/addon-interactions',
        '@storybook/addon-themes',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {
            fastRefresh: true,
            fsCache: true,
            lazyCompilation: true,
        },
    },
    docs: {
        autodocs: 'tag',
    },
    typescript: {
        reactDocgen: false,
    },
};
export default config;
