import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../store';
import * as RulesetDefinitionStore from '../store/RulesetDefinitionStore'
const Home: React.FC = () => {
  const dispatch = useDispatch();
  dispatch(RulesetDefinitionStore.actionCreators.requestRulesetDefinition());
  const state = useSelector((state: ApplicationState) => state.rulesetDefinition)
  const textAreaRef = React.createRef<HTMLTextAreaElement>();
  const copy = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand('copy');
    }
  };
  return (
    <div>
      <h1>Infor CPQ - External Application Tutorial</h1>
      <p>This page will show you how to create an external application for use inside Infor CPQ Configurator.</p>
      <textarea readOnly ref={textAreaRef} value={state.definition} />
      <br/>
      <input type="button" value="Copy" onClick={copy} />
    </div>
  );
}

export default Home;
