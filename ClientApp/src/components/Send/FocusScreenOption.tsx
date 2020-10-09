import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import * as ReceivedMessages from '../../store/ReceivedMessages';
import * as Messages from '../../store/Messages';
import ActionChain from './ActionChain';

const format = Messages.FormatMessage;
const FocusScreenOption: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: ApplicationState) => {
    return state.focusScreenOptions;
  });
  const createAction = (first: boolean) => {
    return Messages.messageCreators.focusScreenOption(first ? state.screenOptionId : state.screenOptionId2)
  };
  const sendAction = (first: boolean) => {
    dispatch(ReceivedMessages.actionCreators.sendMessage(createAction(first)));
  }

  return (
    <div>
      <h3>The <code>focusScreenOption</code> action</h3>
      <p>This page alternately send different actions based on 2 different <code>screenOptionIds</code> received as commands</p>
      <p>First screen Option</p>
      <ActionChain actions={[createAction(true)]} />
      <p>Second screen Option</p>
      <ActionChain actions={[createAction(false)]} />
    </div>
  );
}

export default FocusScreenOption;
