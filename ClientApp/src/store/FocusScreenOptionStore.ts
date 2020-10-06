import { Action, Reducer } from 'redux';

export interface FocusScreenOptionState {
    screenOptionId: string;
    screenOptionId2: string;
}
export interface FocusScreenOptionId { type: 'FOCUS_SCREENOPTIONID', screenOptionId: string, screenOptionId2: string }
export type KnownAction = FocusScreenOptionId;
export const actionCreators = {
    focusScreenOptionIds: (screenOptionId: string, screenOptionId2: string) => ({
        type: 'FOCUS_SCREENOPTIONID',
        screenOptionId: screenOptionId,
        screenOptionId2: screenOptionId2
    } as FocusScreenOptionId)
};
export const reducer: Reducer<FocusScreenOptionState> = (state: FocusScreenOptionState | undefined, incomingAction: Action): FocusScreenOptionState => {
    if (state === undefined) {
        return {
            screenOptionId: "",
            screenOptionId2: ""
        };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'FOCUS_SCREENOPTIONID':
            return {
                screenOptionId: action.screenOptionId,
                screenOptionId2: action.screenOptionId2
            };
        default:
            return state;
    }
};
