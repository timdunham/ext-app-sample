import * as React from 'react';
import * as ReceivedMessages from '../../store/ReceivedMessages';
import './Message.css';

const renderIcon = (outgoing: boolean) => {
  if (outgoing)
    return <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.5 8.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z" />
    </svg>
  return <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 8.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z" />
  </svg>
}

const Message: React.FC<ReceivedMessages.Message> = (props: ReceivedMessages.Message) => {
  const classname: string = `message alert ${props.outgoing ? "alert-primary" : "alert-success"}`;
  return (<div className={classname} title={props.message} >
    {renderIcon(props.outgoing)}
    <span>{props.command}</span>
  </div>);
}

export default Message;
