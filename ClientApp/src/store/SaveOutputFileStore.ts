import { Action, Reducer } from 'redux';

export interface SaveOutputFileState {
    filenameScreenOptionId: string;
    file: File;
}
export interface SetFilenameScreenOptionIdAction { type: 'SET_FILENAMESCREENOPTIONID', filenameScreenOptionId: string }
export interface SetFilenameAction { type: 'SET_FILE', file: File }
export type KnownAction = SetFilenameScreenOptionIdAction | SetFilenameAction;

export const actionCreators = {
    setScreenOptionId: (filenameScreenOptionId: string) => ({ type: 'SET_FILENAMESCREENOPTIONID', filenameScreenOptionId: filenameScreenOptionId } as SetFilenameScreenOptionIdAction),
    setFile: (file: File) => ({ type: 'SET_FILE', file: file } as SetFilenameAction)
};
export const reducer: Reducer<SaveOutputFileState> = (state: SaveOutputFileState | undefined, incomingAction: Action): SaveOutputFileState => {
    if (state === undefined) {
        return {
            filenameScreenOptionId: "",
            file: new File([], "")
        };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'SET_FILENAMESCREENOPTIONID':
            return {
                ...state,
                filenameScreenOptionId: action.filenameScreenOptionId
            };
        case 'SET_FILE':
            return {
                ...state,
                file: new File([action.file], action.file.name, { type: action.file.type, lastModified: action.file.lastModified })
            };
        default:
            return state;
    }
};
