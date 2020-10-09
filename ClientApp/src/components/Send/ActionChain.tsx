import * as React from 'react';
import { useDispatch } from 'react-redux';
import * as ReceivedMessages from '../../store/ReceivedMessages';
import * as Action from './Action'
import * as Messages from '../../store/Messages'


export interface ActionChainProps {
    actions: Messages.Message[],
    delay?: number
}

const format = Messages.FormatMessage;

const ActionChain: React.FC<ActionChainProps> = (props: ActionChainProps) => {
    const dispatch = useDispatch();
    const onClick = (index: number) => index === 0 ? () => sendAction(0) : undefined;
    const sendAction = (index: number) => {
        dispatch(ReceivedMessages.actionCreators.sendMessage(props.actions[index]));
        if (index < props.actions.length - 1)
            setTimeout(() => sendAction(index + 1), props.delay)
    }

    return (
        <React.Fragment>
            {props.actions.map((a, i) =>
                <Action.default key={i} action={onClick(i)} text={format(a)} />
            )}
        </React.Fragment>
    );
}

export default ActionChain;