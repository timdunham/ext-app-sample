import { Action, Reducer } from 'redux';

export interface RequestScreenOptionUiDataState {
    screenOptionId: string;
    screenOptionId2: string;
}
export interface RequestScreenOptionUiDataIds { type: 'REQUESTSCREENOPTIONUIDATA_SCREENOPTIONID', screenOptionId: string, screenOptionId2: string }
export type KnownAction = RequestScreenOptionUiDataIds;
export const actionCreators = {
    requestScreenOptionUiDataIds: (screenOptionId: string, screenOptionId2: string) => ({
        type: 'REQUESTSCREENOPTIONUIDATA_SCREENOPTIONID',
        screenOptionId: screenOptionId,
        screenOptionId2: screenOptionId2
    } as RequestScreenOptionUiDataIds)
};
export const reducer: Reducer<RequestScreenOptionUiDataState> = (state: RequestScreenOptionUiDataState | undefined, incomingAction: Action): RequestScreenOptionUiDataState => {
    if (state === undefined) {
        return {
            screenOptionId: "",
            screenOptionId2: ""
        };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUESTSCREENOPTIONUIDATA_SCREENOPTIONID':
            return {
                screenOptionId: action.screenOptionId,
                screenOptionId2: action.screenOptionId2
            };
        default:
            return state;
    }
};
