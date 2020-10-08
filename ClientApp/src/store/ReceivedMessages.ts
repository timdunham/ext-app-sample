import { Action, Reducer } from 'redux';

export interface ReceivedMessageState {
    received: boolean;
    visibility: Visibility;
    messages: Message[];
}
export interface Message {
    outgoing: boolean;
    command: string;
    message: string;
}

export enum Visibility {
    Cfg = 1,
    App,
    All
}

export interface ReceiveMessage { type: 'RECEIVE_MESSAGE', message: string }
export interface SendMessage { type: 'SEND_MESSAGE', message: any }
export interface SetVisibility { type: 'SET_VISIBILITY', visibility: Visibility }
export interface ClearMessages { type: 'CLEAR_MESSAGES' }

export type KnownAction = ReceiveMessage | SendMessage | SetVisibility | ClearMessages;

export const actionCreators = {
    receiveMessage: (message: string) => ({ type: 'RECEIVE_MESSAGE', message: message } as ReceiveMessage),
    sendMessage: (message: any) => ({ type: 'SEND_MESSAGE', message: message } as SendMessage),
    setVisibility: (visibility: Visibility) => ({ type: 'SET_VISIBILITY', visibility: visibility } as SetVisibility),
    clearMessages: () => ({ type: 'CLEAR_MESSAGES' } as ClearMessages)
};

export const reducer: Reducer<ReceivedMessageState> = (state: ReceivedMessageState | undefined, incomingAction: Action): ReceivedMessageState => {
    if (state === undefined) {
        return {
            received: false,
            visibility: Visibility.All,
            messages: []
        };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'RECEIVE_MESSAGE':
            const messageJson = action ? JSON.parse(action.message) : { command: "unknown" };
            const command: any = messageJson.command || "";
            return {
                ...state,
                received: true,
                messages: [...state.messages, { outgoing: false, command: command, message: action.message }]
            };
        case 'SEND_MESSAGE':
            const sendCommand = action.message.action || "unknown";
            window.parent.postMessage(action.message, "*");
            return {
                ...state,
                messages: [...state.messages, { outgoing: true, command: sendCommand, message: JSON.stringify(action.message) }]
            };
        case 'SET_VISIBILITY':
            return {
                ...state,
                visibility: action.visibility
            };
        case 'CLEAR_MESSAGES':
            return {
                ...state,
                messages: []
            };
        default:
            return state;
    }
};
