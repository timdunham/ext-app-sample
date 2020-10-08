import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { ApplicationState } from '../../store';
import * as ReceivedMessages from '../../store/ReceivedMessages';
import Message from './Message';
import VisibilityButton from './VisibilityButton';

const visibilityFilter = (visibility: ReceivedMessages.Visibility, messages: ReceivedMessages.Message[]) => {
  switch (visibility) {
    case ReceivedMessages.Visibility.All:
      return messages;
    case ReceivedMessages.Visibility.Cfg:
      return messages.filter(m => !m.outgoing);
    case ReceivedMessages.Visibility.App:
      return messages.filter(m => m.outgoing);
  }
}

const visibilitySelector = createSelector(
  [
    (state: ApplicationState) => state.receivedMessages.visibility,
    (state: ApplicationState) => state.receivedMessages.messages,
  ],
  visibilityFilter
)


const Messages: React.FC = () => {
  const messages = useSelector(visibilitySelector);
  const dispatch = useDispatch();
  const clearMessages = () => { dispatch(ReceivedMessages.actionCreators.clearMessages()); }
  const setVisibility = (visibility: ReceivedMessages.Visibility) => dispatch(ReceivedMessages.actionCreators.setVisibility(visibility));

  return (<div>
    <h3>Messages</h3>
    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group btn-group-sm" role="group">
        <VisibilityButton {...{ visibility: ReceivedMessages.Visibility.Cfg, label: "Cfg", color: "success" }} />
        <VisibilityButton {...{ visibility: ReceivedMessages.Visibility.App, label: "App", color: "primary" }} />
        <VisibilityButton {...{ visibility: ReceivedMessages.Visibility.All, label: "All", color: "secondary" }} />
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
    { (messages.length == 0) ? <span>No messages</span> : messages.map(m => <Message {...m} />)}
  </div>);
}

export default Messages;


// const Messages: React.FC<ReceivedMessages.Message[]> = (messages: ReceivedMessages.Message[]) => {
//   const dispatch = useDispatch();
//   const clearMessages = () => { dispatch(ReceivedMessages.actionCreators.clearMessages()); }
//   return (<div>
//     <h3>Messages</h3>
//     <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
//       <div className="btn-group btn-group-sm" role="group">
//         <button type="button" className="btn btn-outline-success">Cfg</button>
//         <button type="button" className="btn btn-outline-primary">App</button>
//         <button type="button" className="btn btn-secondary">Both</button>
//       </div>
//       <div className="btn-group btn-group-sm" role="group">
//         <button onClick={clearMessages} type="button" className="btn btn-outline-danger icon-delete">
//           <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//             <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
//             <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
//           </svg>
//         </button>
//       </div>
//     </div>
//     {messages && messages.length
//       ? messages.map((message, index) => <Message key={index} {...message} />)
//       : "No messages"}
//   </div>
//   );
// };

// const mapStateToProps = (state: ApplicationState) => {
//   const { receivedMessages } = state;
//   //const todos = getTodosByVisibilityFilter(state, visibilityFilter);
//   return { state };
//   //   const allTodos = getTodos(state);
//   //   return {
//   //     todos:
//   //       visibilityFilter === VISIBILITY_FILTERS.ALL
//   //         ? allTodos
//   //         : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
//   //           ? allTodos.filter(todo => todo.completed)
//   //           : allTodos.filter(todo => !todo.completed)
//   //   };
// };
// // export default TodoList;
// export default connect(mapStateToProps)(Messages);
