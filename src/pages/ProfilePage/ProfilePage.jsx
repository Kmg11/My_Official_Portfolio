import { Helmet } from 'react-helmet-async';
import { useFetchGet } from '../../hooks';
import { APIS, IMAGES } from '../../constants';
import * as Style from './ProfilePage.style';
import { Container } from '../../layouts';
import { ProfileContainer } from './ProfileContainer/ProfileContainer';

export function ProfilePage() {
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
        <Container>
          <ProfileContainer response={response} />
        </Container>
      </Style.Content>
    </>
  );
}
