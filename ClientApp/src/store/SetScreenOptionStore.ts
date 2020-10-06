import { Action, Reducer } from 'redux';

export interface SetScreenOptionState {
    screenOptionId: string;
}
export interface SetScreenOptionId { type: 'SET_SCREENOPTIONID', screenOptionId: string }
export type KnownAction = SetScreenOptionId;
export const actionCreators = {
    setScreenOptionId: (screenOptionId: string) => ({ type: 'SET_SCREENOPTIONID', screenOptionId: screenOptionId } as SetScreenOptionId)
};
export const reducer: Reducer<SetScreenOptionState> = (state: SetScreenOptionState | undefined, incomingAction: Action): SetScreenOptionState => {
    if (state === undefined) {
        return {
            screenOptionId: ""
        };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'SET_SCREENOPTIONID':
            return {
                screenOptionId: action.screenOptionId
            };
        default:
            return state;
    }
};
