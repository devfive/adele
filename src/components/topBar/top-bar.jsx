import React from 'react';
import PropTypes from 'prop-types';

import history from '../../modules/history';

import { StyledTopBar, StyledTopBarNav, StyledBrand } from './top-bar.styles';
import Button from '../button/button';
import Logo from '../logo/logo';
import Social from '../social/social';

const TopBar = props => (
  <StyledTopBar scroll={props.scroll} id="top-bar">
    <StyledBrand scroll={props.scroll}>
      <Logo tab={1} />
      <figcaption>
        <a
          tabIndex={1}
          href="http://uxpin.com"
          target="_blank"
          rel="noopener noreferrer"
          title="UXPin - The Design Systems Platform"
        >
          The Design Systems Platform
        </a>
      </figcaption>
    </StyledBrand>
    <StyledTopBarNav>
      <Button
        type="button"
        label="Home"
        action={() => {
          window.scrollTo({ behavior: 'smooth', left: '0', top: '0' });
          history.push('/');
        }}
        tab={1}
      />
      <Button
        type="button"
        label="Stats"
        action={() => {
          window.scrollTo({ behavior: 'smooth', left: '0', top: '0' });
          history.push('/stats');
        }}
        tab={1}
      />
    </StyledTopBarNav>
    <Social
      networks={['twitter', 'facebook', 'linkedin']}
      url="https://www.uxpin.com/adele"
      tab={1}
    />
  </StyledTopBar>
);

TopBar.propTypes = {
  scroll: PropTypes.bool,
};

TopBar.defaultProps = {
  scroll: false,
};

export { TopBar as default };
