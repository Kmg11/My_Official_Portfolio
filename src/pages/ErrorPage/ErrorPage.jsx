import { Helmet } from 'react-helmet-async';
import { CreateImage } from '../../components';
import { IMAGES } from '../../constants';
import { ErrorContainer } from './ErrorContainer/ErrorContainer';
import * as Style from './ErrorPage.style';

export function ErrorPage() {
  const title = '404 | Error';
  const description = 'Page not found please try again';

  return (
    <Style.ErrorPage>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <Style.CoverImage>
        <CreateImage src={`${IMAGES.ERROR}/background`} alt="404 Page Background Image" />
      </Style.CoverImage>

      <Style.Content>
        <ErrorContainer />
      </Style.Content>
    </Style.ErrorPage>
  );
}
