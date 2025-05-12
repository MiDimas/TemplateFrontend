import type { Preview, ReactRenderer } from '@storybook/react';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import {withThemeByClassName} from '@storybook/addon-themes';
const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        layout: 'fullscreen',
    },
    decorators: [
        StyleDecorator,
        // ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        SuspenseDecorator,
        withThemeByClassName<ReactRenderer>({
            themes: {
                light: 'app light',
                dark: 'app dark',
            },
            defaultTheme: 'light',
        }),
    ],
};

export default preview;
