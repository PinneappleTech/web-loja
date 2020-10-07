import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Button({ children, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Button;
