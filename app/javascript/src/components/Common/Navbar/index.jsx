import React from "react";

import { Dashboard, Settings, UserCircle } from "@bigbinary/neeto-icons";
import { Sidebar } from "neetoui/v2/layouts";
import { withRouter } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-row items-start justify-start">
      <Sidebar
        isCollapsed
        navLinks={[
          {
            icon: function noRefCheck() {
              return <Dashboard />;
            },
            label: "Notes",
            to: "/notes"
          },
          {
            icon: function noRefCheck() {
              return <UserCircle />;
            },
            label: "Contacts",
            to: "/contacts"
          },
          {
            icon: function noRefCheck() {
              return <Settings />;
            },
            label: "Settings",
            to: "/settings"
          }
        ]}
        organizationInfo={{
          name: "neetoUI",
          subdomain: "neetoui.netlify.app"
        }}
        profileInfo={{
          dropdownProps: [
            {
              label: "Edit"
            },
            {
              label: "Logout"
            }
          ],
          email: "kieranmiller@gmail.com",
          imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
          name: "Kieran Miller"
        }}
      />
    </div>
  );
};

export default withRouter(NavBar);
