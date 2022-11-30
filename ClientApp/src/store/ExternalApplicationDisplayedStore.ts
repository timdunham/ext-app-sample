import { Action, Reducer } from 'redux';

export interface ExternalApplicationDisplayedState {
    screenOptionId: string;
}
export interface ExternalApplicationDisplayedId { type: 'EXTERNAL_APPLICATION_DISPLAYED', screenOptionId: string }
export type KnownAction = ExternalApplicationDisplayedId;
export const actionCreators = {
    externalApplicationDisplayedId: (screenOptionId: string) => ({
        type: 'EXTERNAL_APPLICATION_DISPLAYED',
        screenOptionId: screenOptionId
    } as ExternalApplicationDisplayedId)
};
export const reducer: Reducer<ExternalApplicationDisplayedState> = (state: ExternalApplicationDisplayedState | undefined, incomingAction: Action): ExternalApplicationDisplayedState => {
    if (state === undefined) {
        return {
            screenOptionId: ""
        };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'EXTERNAL_APPLICATION_DISPLAYED':
            return {
                screenOptionId: action.screenOptionId
            };
        default:
            return state;
    }
};
