/* global devToolsExtension:false */

import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducers/todo'
import todoLogic from './logic/todoLogic'
import axios from 'axios';
import { compose, createStore, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';



//export default createStore(reducer, composeWithDevTools(middleware))




const deps = { // injected dependencies for logic
    httpClient: axios
  };
  
  const logicMiddleware = createLogicMiddleware(todoLogic, deps);
  
  const middleware = applyMiddleware(
    logicMiddleware
  );
  
  
  // using compose to allow for applyMiddleware, just add it in
  const enhancer = (typeof devToolsExtension !== 'undefined') ?
        compose( middleware, devToolsExtension()) :
        middleware;
  
  export default createStore(reducer, enhancer);
