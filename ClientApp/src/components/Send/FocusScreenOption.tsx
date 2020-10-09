import * as React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import * as Messages from '../../store/Messages';
import ActionChain from './ActionChain';

const FocusScreenOption: React.FC = () => {
  const state = useSelector((state: ApplicationState) => {
    return state.focusScreenOptions;
  });
  const createAction = (first: boolean) => {
    return Messages.messageCreators.focusScreenOption(first ? state.screenOptionId : state.screenOptionId2)
  };

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
