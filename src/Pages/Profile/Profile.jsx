import { Helmet } from 'react-helmet-async';
import { useFetchGet } from '../../hooks';
import { APIS, IMAGES } from '../../constants';
import { Components } from '../../Style';
import { ProfileContainer } from '../../Components/ProfileContainer/ProfileContainer';
import * as Style from './Profile.style';

export function Profile() {
  const response = useFetchGet(APIS.INFO);
  const { data } = response;

  const title = data && `Profile | ${data.name}`;
  const description = data && `${data.name} | ${data.description}`;

  return (
    <>
      {data && (
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta
            name="keywords"
            content="Frontend, Web Devolper, Programming, Portfolio, Kirolos Mahfouz, Web, HTML, HTML5, CSS, CSS3, Javascript, jQuery, Bootstrap, Sass, Pug, Gulp, Git, Github, React, Redux, CLI"
          />

          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={`${IMAGES.GLOBAL}/personal-image.png`} />
        </Helmet>
      )}

      <Style.Content>
        <Components.Container>
          <ProfileContainer response={response} />
        </Components.Container>
      </Style.Content>
    </>
  );
}
