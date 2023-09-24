import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useFetchGet } from '../../hooks';
import { APIS, IMAGES } from '../../constants';
import { SingleProject } from './SingleProject/SingleProject';
import * as Style from './ProjectPage.style';

export function ProjectPage() {
  const { id, type } = useParams();
  const { data: projects, isPending, error } = useFetchGet(`${APIS[`${type.toUpperCase()}S`]}`);

  const targetProject = projects && projects.filter((project) => project.id.toString() === id)[0];
  const apiInfo = { project: targetProject, isPending, error };

  const helmetTitle =
    targetProject && targetProject.title.charAt(0).toUpperCase() + targetProject.title.slice(1);

  return (
    <>
      {targetProject && (
        <Helmet>
          <title>{helmetTitle}</title>
          <meta name="description" content={`${helmetTitle}, ${targetProject.description}`} />
          <meta
            name="keywords"
            content={`Frontend, Web Devolper, Programming, Portfolio, Kirolos Mahfouz, Web, HTML, HTML5, CSS, CSS3, Javascript, jQuery, Bootstrap, Sass, Pug, Gulp, Git, Github, React, Redux, CLI, ${helmetTitle}`}
          />

          <meta property="og:title" content={helmetTitle} />
          <meta
            property="og:description"
            content={`${helmetTitle}, ${targetProject.description}`}
          />
          <meta
            property="og:image"
            content={`${IMAGES.PROJECTS}/${targetProject.images.folder_name}/1.png`}
          />
        </Helmet>
      )}

      <Style.Content>
        <SingleProject data={apiInfo} />
      </Style.Content>
    </>
  );
}
