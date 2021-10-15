import React from "react";
import { useState } from "react";

import { Search, Settings, Plus } from "@bigbinary/neeto-icons";
import { Typography } from "neetoui/v2";
import { MenuBar } from "neetoui/v2/layouts";
import { withRouter } from "react-router-dom";

const NotesMenuBar = () => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  return (
    // <div className="flex w-auto">
    <MenuBar
      showMenu={true}
      title={
        <div className="flex justify-between">
          <Typography style="h2">Notes</Typography>
        </div>
      }
    >
      <MenuBar.Block label="All" count={200} active />
      <MenuBar.Block label="Users" count={80} />
      <MenuBar.Block label="Leads" count={60} />
      <MenuBar.Block label="Visitors" count={60} />

      <MenuBar.SubTitle
        iconProps={[
          {
            icon: () => <Search size={20} />,
            onClick: () =>
              setIsSearchCollapsed(isSearchCollapsed => !isSearchCollapsed)
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
      <MenuBar.Block label="Europe" count={80} />
      <MenuBar.Block label="Middle-East" count={60} />
      <MenuBar.Block label="Asia" count={60} />

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
      <MenuBar.Block label="Sales" count={80} />
      <MenuBar.Block label="Finance" count={60} />
      <MenuBar.Block label="User Experience" count={60} />
    </MenuBar>
  );
};

export default withRouter(NotesMenuBar);
