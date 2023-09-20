import React from 'react';
import PropTypes from 'prop-types';
import { faScroll } from '@fortawesome/free-solid-svg-icons';
import { Box } from '../../Box/Box';
import * as Styled from './Cv.style';

export function Cv({ response }) {
  const { isPending } = response;

  const cv = {
    cv: [
      {
        link: 'https://docs.google.com/document/d/1aR8djPyMD5d6kAVktywnSQfgZ042-gub/edit?usp=sharing&ouid=104483227602835515182&rtpof=true&sd=true',
        name: 'Preview',
      },
    ],
  };

  return (
    <Styled.Cv>
      <Box title="cv" icon={faScroll} isPending={isPending} data={cv} section="cv" isLink />
    </Styled.Cv>
  );
}

Cv.propTypes = {
  response: PropTypes.object.isRequired,
};
