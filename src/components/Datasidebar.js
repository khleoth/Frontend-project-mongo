import React from 'react';
import { Sidebar, Datalink } from './DatadisplayCSS';

export const Datasidebar = (linktitle1, linktitle2, SidebarWrapper) => {
  return (
    <SidebarWrapper>
      <Sidebar>
        <Datalink type="button" onClick="">{`${linktitle1}`}</Datalink>
        <Datalink>{`${linktitle2}`}</Datalink>
      </Sidebar>
    </SidebarWrapper>
  )
}