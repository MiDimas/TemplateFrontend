import { StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (Story: StoryFn, context: any) => (
    <BrowserRouter>
        {Story(context.args, context)}
    </BrowserRouter>
);
