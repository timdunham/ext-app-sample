import { Action, Reducer } from 'redux';

export interface SaveOutputFileState {
    filenameScreenOptionId: string;
}
export interface SetFilenameScreenOptionId { type: 'SET_FILENAMESCREENOPTIONID', filenameScreenOptionId: string }
export type KnownAction = SetFilenameScreenOptionId;
export const actionCreators = {
    setScreenOptionId: (filenameScreenOptionId: string) => ({ type: 'SET_FILENAMESCREENOPTIONID', filenameScreenOptionId: filenameScreenOptionId } as SetFilenameScreenOptionId)
};
export const reducer: Reducer<SaveOutputFileState> = (state: SaveOutputFileState | undefined, incomingAction: Action): SaveOutputFileState => {
    if (state === undefined) {
        return {
            filenameScreenOptionId: ""
        };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'SET_FILENAMESCREENOPTIONID':
            return {
                filenameScreenOptionId: action.filenameScreenOptionId
            };
        default:
            return state;
    }
};
