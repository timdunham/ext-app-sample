import { Action, Reducer } from 'redux';

export interface SaveOutputFileState {
    filenameScreenOptionId: string;
}
export interface SetFilenameScreenOptionIdAction { type: 'SET_FILENAMESCREENOPTIONID', filenameScreenOptionId: string }
export type KnownAction = SetFilenameScreenOptionIdAction;

export const actionCreators = {
    setScreenOptionId: (filenameScreenOptionId: string) => ({ type: 'SET_FILENAMESCREENOPTIONID', filenameScreenOptionId: filenameScreenOptionId } as SetFilenameScreenOptionIdAction)
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
                ...state,
                filenameScreenOptionId: action.filenameScreenOptionId
            };
        default:
            return state;
    }
};
