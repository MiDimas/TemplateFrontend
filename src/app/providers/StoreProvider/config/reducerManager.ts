import { UnknownAction, combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ReducerManager, StateSchemaKey, StateSchema } from './StateSchema';

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
    const reducers = { ...initialReducers };
    let combinedReducer = combineReducers(reducers);

    let keysToRemove: Array<StateSchemaKey> = [];

    return {
        getReducerMap: () => reducers,
        reduce: (state: StateSchema|undefined, action: UnknownAction) => {
            let newstate = state ? { ...state } : {} as StateSchema;
            if (keysToRemove.length > 0 && state) {
                keysToRemove.forEach((key) => {
                    if (newstate[key]) {
                        delete newstate[key];
                    }
                });
                keysToRemove = [];
            }
            if (state === undefined) {
                newstate = {} as StateSchema;
            }
            // @ts-ignore new-line
            return combinedReducer(newstate, action);
        },
        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);
        },
        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
}
