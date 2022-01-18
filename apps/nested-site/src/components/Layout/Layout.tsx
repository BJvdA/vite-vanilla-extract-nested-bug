import React from 'react';
import lightTheme from 'components/themes/light';
import { Box } from 'components';

import * as styles from './Layout.css';

const Layout = ({ className = '', ...props }) => {
  return (
    <Box
      className={[lightTheme.vanillaTheme, styles.root, className]}
      {...props}
    />
  );
};

export default Layout;
