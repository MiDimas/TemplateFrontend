import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
};
export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (Story: StoryFn, context: any) => (
        <StoreProvider
            initialState={state as StateSchema}
            asyncReducers={
                {
                    ...defaultAsyncReducers,
                    ...asyncReducers,
                } as ReducersMapObject<StateSchema>
            }
        >
            {Story(context.args, context)}
        </StoreProvider>
    );
