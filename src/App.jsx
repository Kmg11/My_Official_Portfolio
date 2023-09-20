import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ROUTES } from './constants';
import { HomePage, ErrorPage, ProfilePage, ProjectPage, ProjectsPage } from './pages';
import { MainLayout } from './layouts';

export function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact path={ROUTES.HOME} component={HomePage} />

        <Route path={[ROUTES.PROJECTS, ROUTES.PROJECT, ROUTES.PROFILE]}>
          <MainLayout>
            <Route path={ROUTES.PROJECTS} component={ProjectsPage} />
            <Route path={`${ROUTES.PROJECT}/:type/:id`} component={ProjectPage} />
            <Route path={ROUTES.PROFILE} component={ProfilePage} />
          </MainLayout>
        </Route>

        <Route path="*" component={ErrorPage} />
      </Switch>
    </AnimatePresence>
  );
}
