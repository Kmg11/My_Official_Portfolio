import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useFetchGet } from '../../../hooks';
import { APIS } from '../../../constants';
import { CategoriesButtons } from './CategoriesButtons/CategoriesButtons';
import { Top } from './Top/Top';
import { All } from './All/All';
import * as Style from './ProjectsContainer.style';

const PAGES = {
  TOP: 'TOP',
  TEMPLATES: 'TEMPLATES',
  APPS: 'APPS',
};

const containerVariants = {
  hidden: { opacity: 0, y: 70, transition: { duration: 0.5 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export function ProjectsContainer() {
  const [currentProjectsTab, setCurrentProjectsTab] = useState(PAGES.TOP);
  const setTopPage = () => setCurrentProjectsTab(PAGES.TOP);
  const setTemplatesPage = () => setCurrentProjectsTab(PAGES.TEMPLATES);
  const setAppsPage = () => setCurrentProjectsTab(PAGES.APPS);

  const templates = useFetchGet(APIS.TEMPLATES);
  const apps = useFetchGet(APIS.APPS);

  return (
    <Style.ProjectsContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <CategoriesButtons
        setTopPage={setTopPage}
        setTemplatesPage={setTemplatesPage}
        setAppsPage={setAppsPage}
        PAGES={PAGES}
        currentProjectsTab={currentProjectsTab}
      />

      <AnimatePresence exitBeforeEnter>
        {currentProjectsTab === PAGES.TOP && (
          <Top
            key="top"
            setCurrentProjectsTab={setCurrentProjectsTab}
            PAGES={PAGES}
            data={{ templates, apps }}
          />
        )}
        {currentProjectsTab === PAGES.TEMPLATES && <All key="templates" data={templates} />}
        {currentProjectsTab === PAGES.APPS && <All key="apps" data={apps} />}
      </AnimatePresence>
    </Style.ProjectsContainer>
  );
}
