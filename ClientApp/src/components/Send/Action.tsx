import * as React from 'react';
import { useDispatch } from 'react-redux';
import * as ReceivedMessages from '../../store/ReceivedMessages';
import * as Messages from '../../store/Messages';
import './Action.css'

export interface ActionProps {
    action: any;
}
const format = Messages.FormatMessage;
const Action: React.FC<ActionProps> = (props: ActionProps) => {
    const dispatch = useDispatch();
    const sendAction = () => {
        dispatch(ReceivedMessages.actionCreators.sendMessage(props.action));
    }

    return (
        <React.Fragment>
            <div className="btn-clipboard">
                <button type="button" onClick={sendAction} className="btn-sm btn-outline-primary">Send</button>
            </div>
            <pre><code>{format(props.action)}</code></pre>
        </React.Fragment>
    );
}

export default Action;