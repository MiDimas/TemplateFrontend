import { StoryFn } from '@storybook/react';
import { Suspense } from 'react';
import { Loader } from '@/shared/ui/Loader';

export const SuspenseDecorator = (Story: StoryFn, context: any) => (
    <Suspense fallback={<Loader />}>
        {Story(context.args, context)}
    </Suspense>
);
