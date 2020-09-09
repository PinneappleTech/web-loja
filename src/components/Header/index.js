import React from 'react';
import PropTypes from 'prop-types';

import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';

import { Account } from '../../assets/images';

import { Container } from './styles';

function Header({ titlePage }) {
  return (
    <Container>
      <div className="header-container">
        <div className="header-items">
          <Account />
          <span>Usuário</span>
          <MdKeyboardArrowDown size={24} color="#ecba2b" />
        </div>
      </div>
      <div className="breacrumps-container">
        <div className="breacrumps-items">
          <FaHome size={22} color="#515151" />
          <span>Dashboard</span>
          {titlePage && (
            <>
              <span>&gt;</span>
              <span>{titlePage}</span>
            </>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Header;

Header.propTypes = {
  titlePage: PropTypes.string.isRequired,
};
