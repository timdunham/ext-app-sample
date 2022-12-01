import { Action, Reducer } from 'redux';

export interface ScreenOptionUIDataState {
    screenOptionUIData: string;
}
export interface ScreenOptionUIDataId { type: 'SCREEN_OPTION_UI_DATA', screenOptionUIData: string }
export type KnownAction = ScreenOptionUIDataId;
export const actionCreators = {
    screenOptionUIData: (screenOptionUIData: string) => ({
        type: 'SCREEN_OPTION_UI_DATA',
        screenOptionUIData: screenOptionUIData
    } as ScreenOptionUIDataId)
};
export const reducer: Reducer<ScreenOptionUIDataState> = (state: ScreenOptionUIDataState | undefined, incomingAction: Action): ScreenOptionUIDataState => {
    if (state === undefined) {
        return {
            screenOptionUIData: "",
        };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'SCREEN_OPTION_UI_DATA':
            return {
                screenOptionUIData: action.screenOptionUIData
            };
        default:
            return state;
    }
};
