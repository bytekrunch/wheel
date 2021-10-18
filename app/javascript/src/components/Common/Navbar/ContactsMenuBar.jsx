import React from "react";
import { useState } from "react";

import { Search, Settings, Plus } from "@bigbinary/neeto-icons";
import { Typography } from "neetoui/v2";
import { MenuBar } from "neetoui/v2/layouts";
import { withRouter } from "react-router-dom";

const ContactsMenuBar = () => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  return (
    <MenuBar
      showMenu={true}
      title={
        <div className="flex justify-between">
          <Typography style="h2">Contacts</Typography>
        </div>
      }
    >
      <MenuBar.Block label="All" count={0} active />
      <MenuBar.Block label="Archived" count={0} />
      <MenuBar.Block label="Completed" count={0} />
      <MenuBar.Block label="Phase 2" count={0} />

      <MenuBar.SubTitle
        iconProps={[
          {
            icon: () => <Search size={20} />,
            onClick: () => {
              setIsSearchCollapsed(isSearchCollapsed => !isSearchCollapsed);
              //setIsSearchCollapsed(!isSearchCollapsed)
            }
            //setIsSearchCollapsed(isSearchCollapsed => !isSearchCollapsed)
          }
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Segments
        </Typography>
      </MenuBar.SubTitle>
      <MenuBar.Search
        collapse={isSearchCollapsed}
        onCollapse={() => setIsSearchCollapsed(true)}
      />

      <MenuBar.SubTitle
        iconProps={[
          {
            icon: () => <Settings size={20} />
          },
          {
            icon: () => <Plus size={20} />
          },
          {
            icon: () => <Search size={20} />
          }
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Tags
        </Typography>
      </MenuBar.SubTitle>
    </MenuBar>
  );
};

export default withRouter(ContactsMenuBar);
