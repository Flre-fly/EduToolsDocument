import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { Styled } from 'theme-ui';
import { globalStyles } from '../styles';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const Layout = ({ children }) => {
  return (
    <Styled.root>
      <SiteWrapper>
        <Global styles={globalStyles} />
        <LeftSidebar />
        <SiteContent>{children}</SiteContent>
        <RightSidebar />
      </SiteWrapper>
    </Styled.root>
  );
};

const SiteWrapper = styled.div`
  display: flex;
  background: ${p => p.theme.colors.background};
  transition: background 0.25s var(--ease-in-out-quad);
  min-height: 100vh;
`;

const SiteContent = styled.main`
  flex-grow: 1;
  min-width: 20rem;
  padding: 2rem 1rem;
`;

export default Layout;
