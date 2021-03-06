import React, { Component } from 'react'
import Highlight from 'react-syntax-highlight'
// import Note from '../Note'

import structurePng from './Structure.png'

const indexJs = `import React from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { fetchInitialState } from './store/actions/actions';
import { Provider, connect } from 'react-redux';

import configureStore from './store/configure-store';
import MapScreen from './components/Map'
import HomeScreen from './components/HomeScreen'

const Routes = StackNavigator({
  Home: { screen: HomeScreen },
  Map: { screen: MapScreen }
}, {
  headerMode: 'none'
})

const store = configureStore();

// If we need to fetch some intial data we can do that now! Dispatch an action!
// store.dispatch(fetchInitialState());

// Console out changes to the store for easy debugging.
store.subscribe(() => {
    console.log('State Change: ', store.getState());
});

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store} >
        <Routes />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('barfinder', () => App)
`

const ConfigureStore = `import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}`

const ActionTypes = `export const SEARCH_START = 'SEARCH_START'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_ERRROR = 'SEARCH_ERROR'`

const Actions = `import * as ActionTypes from './action-types';
import * as helpers from './helpers';
import config from 'react-native-configs';

export function searchBars(text, lat, long) {
    return (dispatch) => {
        dispatch(helpers.startAction(ActionTypes.SEARCH_START))
        return fetch(\`\${config.barApi}?lat=\${lat}&long=\${long}&name=\${text}\`).then((response) => {
            if(response.status !== 200){
                throw new Error('error', response.statusText);
            }
            return response.json();
        })
        .then((json) => {
            return dispatch(helpers.successAction(ActionTypes.SEARCH_SUCCESS, json))
        })
        .catch((error) => {
            console.log(error);
            dispatch(helpers.failureAction('ERROR', error))
        });
    };
}

// Here is how we can structure a call to fetch some initial app data. See the comment in indes.ios.js
// export function fetchInitialState() {
//     return (dispatch) => {
//         dispatch(fetchsomething());
//     };
// }
`

const Helpers = `export function startAction(type) {
  console.log('start action ', type);
  return { type };
}

export function successAction(type, json) {
  console.log('success action ', type);
  return { type, payload: json};
}

export function failureAction(type, error) {
  console.log('failure action ', type, error);
  return { type, payload: error, error: true };
}`

const ReducerIndex = `import {combineReducers} from 'redux';
import search from './search';

const rootReducer = combineReducers({
  search
});

export default rootReducer`

const SearchReducer = `import * as ActionTypes from './../actions/action-types';
import _ from 'lodash';

const initialState = {
    results: [],
    error: null
};

const formatResults = results => _.map(results, result => ({
    name: result.name,
    coordinate: {
        longitude: result.location.coordinates[0],
        latitude: result.location.coordinates[1]
    },
    description: result.description,
    rating: result.avgRating,
    distance: Math.round(result.distance),
    address: result.address,
    image: result.image
}))

export default function search(state = initialState, { type, payload }) {
    switch(type){
        case ActionTypes.SEARCH_START:
            return _.assign({}, state, { isLoading: true });

        case ActionTypes.SEARCH_SUCCESS:
            return _.assign({}, state, { results: formatResults(payload.bars) });

        case ActionTypes.SEARCH_ERRROR:
            return _.assign({}, state, { error: payload });

        default:
            return state;
    }
}`

const config = `{
  "barApi":  "https://nm-bar-finder.herokuapp.com/api/v1/bar/search"
}
`

class SearchUiView extends Component {
  render() {

    return (
      <div className="general">
        <h1>16. Store Setup!</h1>
       
        <ul className="setup__steps">
          <li>
            <p>
              Now that we have a clean entry file, we can use it to intialize our redux store. Let's update our index files.
            </p>
            <Highlight lang='javascript' value={indexJs} />
          </li>
          <li>
            <p>Now lets add all the supporting files. I will go over these one by one but for now just copy them over</p>
          </li>
          <li>
            <p>/store/configure-store.js</p>
            <Highlight lang='javascript' value={ConfigureStore} />
          </li>
          <li>
            <p>/store/actions/action-types.js</p>
            <Highlight lang='javascript' value={ConfigureStore} />
          </li>
          <li>
            <p>/store/actions/actions.js</p>
            <Highlight lang='javascript' value={Actions} />
          </li>
          <li>
            <p>/store/actions/helpers.js</p>
            <Highlight lang='javascript' value={Helpers} />
          </li>
          <li>
            <p>/store/reducers/index.js</p>
            <Highlight lang='javascript' value={ReducerIndex} />
          </li>
          <li>
            <p>/store/reducers/search.js</p>
            <Highlight lang='javascript' value={SearchReducer} />
          </li>

          <li>
            <p>
              The 'react-nativ-configs' module is handy for configuring API endpoints. It uses the __DEV__ global to select the configs. 
              This is helpful if you want to setup a mock endpoint for local development and a seperate enpoint for release.
            </p>
            <p>
              You can also use it for other configurations that you might want to only run in development. Let's set up the supporting files.
            </p>
            <p>/config/debug.json</p>
            <Highlight lang='javascript' value={config} />
            <p>/config/release.json</p>
            <Highlight lang='javascript' value={config} />
          </li>
         
        </ul>
      </div>
    )
  }
}

export default SearchUiView
