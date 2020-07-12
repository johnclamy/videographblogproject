import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/home'
import AboutPage from './pages/about'
import ContactPage from './pages/contact'
import * as ROUTES from '../routes'

export default function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ABOUT} component={AboutPage} />
        <Route path={ROUTES.CONTACT} component={ContactPage} />
      </Switch>
    </Fragment>
  );
}