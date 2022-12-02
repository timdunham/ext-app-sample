import { Action, Reducer } from 'redux';

export interface UiDataState {
    uiData: string;
}
export interface UiDataId { type: 'UI_DATA', uiData: string }
export type KnownAction = UiDataId;
export const actionCreators = {
    UiData: (uiData: string) => ({
        type: 'UI_DATA',
        uiData: uiData
    } as UiDataId)
};
export const reducer: Reducer<UiDataState> = (state: UiDataState | undefined, incomingAction: Action): UiDataState => {
    if (state === undefined) {
        return {
            uiData: "",
        };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'UI_DATA':
            return {
                uiData: action.uiData
            };
        default:
            return state;
    }
};
