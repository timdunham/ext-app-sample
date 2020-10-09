import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../store';
import * as RulesetDefinitionStore from '../store/RulesetDefinitionStore'
import './Home.css';

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
      <h3>Infor CPQ - External Application Tutorial</h3>
      <p>This page will show you how to create an external application for use inside Infor CPQ Configurator.</p>
      <h4>Get Started</h4>
      <ol>
        <li>Copy the text below.</li>
        <li>Open Design Studio</li>
        <li>Right-click in the Rulesets list and Paste</li>
        <li>Run Default.SampleExternalApplication from Simulator</li>
        <li>Click the External Application tab in the information pane</li>
      </ol>
      <textarea readOnly ref={textAreaRef} value={state.definition} id="ruleset-xml" />
      <br/>
      <input type="button" value="Copy" onClick={copy} />
    </div>
  );
}

export default Home;
