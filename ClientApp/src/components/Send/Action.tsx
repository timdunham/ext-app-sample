import * as React from 'react';
import * as Messages from '../../store/Messages';
import './Action.css'

export interface ActionProps {
    action?: () => void;
    text: string;
}
const format = Messages.FormatMessage;
const Action: React.FC<ActionProps> = (props: ActionProps) => {

    return (
        <React.Fragment>
            {(props.action)
                ? <div className="btn-clipboard">
                    <button type="button" onClick={props.action} className="btn-sm btn-outline-primary">Send</button>
                </div>
                : ""
            }
            <pre><code>{props.text}</code></pre>
        </React.Fragment>
    );
}

export default Action;