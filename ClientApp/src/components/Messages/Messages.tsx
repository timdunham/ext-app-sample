import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { ApplicationState } from '../../store';
import * as ReceivedMessages from '../../store/ReceivedMessages';
import Message from './Message';
import VisibilityButton from './VisibilityButton';

const visibilityFilter = (visibility: ReceivedMessages.Visibility, messages: ReceivedMessages.Message[]) => {
  switch (visibility) {
    case ReceivedMessages.Visibility.Cfg:
      messages = messages.filter(m => !m.outgoing);
      break;
    case ReceivedMessages.Visibility.App:
      messages = messages.filter(m => m.outgoing);
      break;
  }
  return { messages, visibility };
}

const visibilitySelector = createSelector(
  [
    (state: ApplicationState) => state.receivedMessages.visibility,
    (state: ApplicationState) => state.receivedMessages.messages,
  ],
  visibilityFilter
)

const Messages: React.FC = () => {
  const state = useSelector(visibilitySelector);
  const dispatch = useDispatch();
  const clearMessages = () => { dispatch(ReceivedMessages.actionCreators.clearMessages()); }

  return (<div>
    <h3>Messages</h3>
    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group btn-group-sm" role="group">
        <VisibilityButton {...{ visibility: ReceivedMessages.Visibility.Cfg, label: "Cfg", color: "success", current: state.visibility }} />
        <VisibilityButton {...{ visibility: ReceivedMessages.Visibility.App, label: "App", color: "primary", current: state.visibility }} />
        <VisibilityButton {...{ visibility: ReceivedMessages.Visibility.All, label: "All", color: "secondary", current: state.visibility }} />
      </div>
      <div className="btn-group btn-group-sm" role="group">
        <button onClick={clearMessages} type="button" className="btn btn-outline-danger icon-delete">
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
          </svg>
        </button>
      </div>
    </div>
    { (state.messages.length == 0) ? <span>No messages</span> : state.messages.map(m => <Message {...m} />)}
  </div>);
}

export default Messages;