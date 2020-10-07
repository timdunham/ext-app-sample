import { send } from 'process';
import { Action, Reducer } from 'redux';

export interface ReceivedMessageState {
    received: boolean;
    messages: Message[];
}
export interface Message {
    outgoing: boolean;
    command: string;
    message: string;
}

export interface ReceiveMessage { type: 'RECEIVE_MESSAGE', message: string }
export interface SendMessage { type: 'SEND_MESSAGE', message: any }
export interface ClearMessages { type: 'CLEAR_MESSAGES' }

export type KnownAction = ReceiveMessage | SendMessage | ClearMessages;

export const actionCreators = {
    receiveMessage: (message: string) => ({ type: 'RECEIVE_MESSAGE', message: message } as ReceiveMessage),
    sendMessage: (message: string) => ({ type: 'SEND_MESSAGE', message: message } as SendMessage),
    clearMessages: () => ({ type: 'CLEAR_MESSAGES' } as ClearMessages)
};

export const reducer: Reducer<ReceivedMessageState> = (state: ReceivedMessageState | undefined, incomingAction: Action): ReceivedMessageState => {
    if (state === undefined) {
        return {
            received: false,
            messages: []
        };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'RECEIVE_MESSAGE':
            const messageJson = action ? JSON.parse(action.message) : { command: "unknown" };
            const command:any = messageJson.command || "";
            return {
                received: true,
                messages: [...state.messages, { outgoing: false, command: command, message: action.message} ]
            };
        case 'SEND_MESSAGE':
            const sendCommand = action.message.action || "unknown";
            return {
                ...state,
                messages: [...state.messages, { outgoing: true, command: sendCommand, message: JSON.stringify(action.message)}]
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
