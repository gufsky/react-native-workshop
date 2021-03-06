import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute, IndexRedirect, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
import App from './App'
// workshop 1
import Prerequisites from './step-0/Prerequisites'
import Introduction from './step-1/Introduction'
import Setup from './step-2/Setup'
import UpAndRunning from './step-3/UpAndRunning'
import Components from './step-4/Components'
import Routing from './step-5/Routing'
import FetchingData from './step-6/FetchingData'
import Styles from './step-7/Styles'
import Homework from './step-8/Homework'
// workshop 2
import Recap from './step-9/Recap'
import Architecture from './step-10/Architecture'
import BackToFundamentals from './step-11/BackToFundamentals'
import ComponentDesign from './step-12/ComponentDesign'
import AirbnbMapView from './step-13/AirbnbMapView'
import OnYourOwn from './step-14/OnYourOwn'
// workshop 3
import RecapTwo from './step-15/RecapTwo'
import SearchUI from './step-16/SearchUI'
import MapUI from './step-17/MapUI'
import OnYourOwnTwo from './step-19/OnYourOwn'
import ListItemDetail from './step-18/ListItemDetail'
// workshop 4
import RecapThree from './step-20/RecapThree'
import StateManagement from './step-21/StateManagement'
import TheAPI from './step-22/TheAPI'
import ReOrg from './step-23/ReOrganize'
import StoreSetup from './step-24/StoreSetup'
import HomeScreen from './step-25/HomeScreen'
import MapScreen from './step-26/MapComponent'
import Congrats from './step-27/Congratulations'

import PageNotFound from './PageNotFound'
import './index.css'
import './App.css'
import './syntax.css'

console.log('Starting up app')

function scrollToTop() {
  document.body.scrollTop = document.documentElement.scrollTop = 0
}

ReactDOM.render(
  <Router history={appHistory} onUpdate={scrollToTop}>
    <Route path="/" component={App}>
      <IndexRoute component={Introduction} />
      <IndexRedirect to="/introduction" />
      // workshop 1
      <Route path="/prerequisites" component={Prerequisites} />
      <Route path="/introduction" component={Introduction} />
      <Route path="/setup" component={Setup} />
      <Route path="/up-and-running" component={UpAndRunning} />
      <Route path="/components" component={Components} />
      <Route path="/routing" component={Routing} />
      <Route path="/fetching-data" component={FetchingData} />
      <Route path="/styles" component={Styles} />
      <Route path="/homework" component={Homework} />
      // workshop 2
      <Route path="/recap" component={Recap} />
      <Route path="/architecture" component={Architecture} />
      <Route path="/back-to-fundamentals" component={BackToFundamentals} />
      <Route path="/component-design" component={ComponentDesign} />
      <Route path="/airbnb-map-view" component={AirbnbMapView} />
      <Route path="/on-your-own" component={OnYourOwn} />
       // workshop 3
      <Route path="/recap-two" component={RecapTwo} />
      <Route path="/search-ui" component={SearchUI} />
      <Route path="/map-ui" component={MapUI} />
      <Route path="/list-item-detail" component={ListItemDetail} />
      <Route path="/on-your-own-two" component={OnYourOwnTwo} />

      // workshop 4
      <Route path="/recap-three" component={RecapThree} />
      <Route path="/state-management" component={StateManagement} />
      <Route path="/the-api" component={TheAPI} />
      <Route path="/reorganize" component={ReOrg} />
      <Route path="/store-setup" component={StoreSetup} />
      <Route path="/home-screen" component={HomeScreen} />
      <Route path="/map-screen" component={MapScreen} />
      <Route path="/congrats" component={Congrats} />


      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
)
