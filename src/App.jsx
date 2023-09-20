import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ROUTES } from './constants';
import * as Page from './Pages';
import { MainLayout } from './layouts';

export function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact path={ROUTES.HOME} component={Page.Home} />

        <Route path={[ROUTES.PROJECTS, ROUTES.PROJECT, ROUTES.PROFILE]}>
          <MainLayout>
            <Route path={ROUTES.PROJECTS} component={Page.Projects} />
            <Route path={`${ROUTES.PROJECT}/:type/:id`} component={Page.Project} />
            <Route path={ROUTES.PROFILE} component={Page.Profile} />
          </MainLayout>
        </Route>

        <Route path="*" component={Page.Error} />
      </Switch>
    </AnimatePresence>
  );
}
