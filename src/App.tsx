import React from 'react';
import Graph from './Graph';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { ThunkDispatch } from 'redux-thunk';
import { State } from './State';
import { PushAction } from './Actions';
import { raw } from './calculators/raw';
import { cooked } from './calculators/cooked';

var initialState: State = {
    hangover: 0
}

type Action = PushAction


function reducers(state: State = initialState, action: Action) {
//  switch (action.type) {
//    case 'push':
//      return state;
//    case default:
      return state;
//  }
}

const store = createStore(reducers)

export type Dispatch = ThunkDispatch<State, void, Action>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Graph key="graph" makeData={raw}/>
          <Graph key="graph" makeData={cooked}/>
        </Provider>
      </header>
    </div>
  );
}

export default App;

