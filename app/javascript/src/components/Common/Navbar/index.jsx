import React from "react";

//import { Toastr } from "neetoui";
import { Dashboard, Settings, UserCircle } from "@bigbinary/neeto-icons";
import { Sidebar } from "neetoui/v2/layouts";
import { withRouter } from "react-router-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";

//import authenticationApi from "apis/authentication";
//import { resetAuthTokens } from "apis/axios";
//import { useAuthDispatch } from "contexts/auth";
import ContactsMenuBar from "./ContactsMenuBar";
import NotesMenuBar from "./Menubar";

//import NavItem from "./NavItem";
//import Notes from "components/Dashboard/Notes";

const NavBar = () => {
  //const authDispatch = useAuthDispatch();
  // const handleLogout = async () => {
  //   try {
  //     await authenticationApi.logout();
  //     authDispatch({ type: "LOGOUT" });
  //     resetAuthTokens();
  //     window.location.href = "/";
  //   } catch (error) {
  //     Toastr.error(error);
  //   }
  // };

  return (
    <BrowserRouter>
      <div className="flex flex-row items-start justify-start">
        <Sidebar
          isCollapsed
          navLinks={[
            {
              icon: function noRefCheck() {
                return <Dashboard />;
              },
              label: "Notes",
              to: "/notes/details"
            },
            {
              icon: function noRefCheck() {
                return <UserCircle />;
              },
              label: "Contacts",
              to: "/contacts/details"
            },
            {
              icon: function noRefCheck() {
                return <Settings />;
              },
              label: "Insights",
              to: "/formik"
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
                //onClick: function noRefCheck(){}
              },
              {
                label: "Logout"
                //onClick: function noRefCheck(){}
              }
            ],
            email: "kieranmiller@gmail.com",
            imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
            name: "Kieran Miller"
          }}
        />
        <div className="relative flex flex-col flex-grow h-screen overflow-auto">
          <Switch>
            <Route
              component={function noRefCheck() {
                return <NotesMenuBar />;
              }}
              path="/notes/details"
            />
            <Route
              component={function noRefCheck() {
                return <ContactsMenuBar />;
              }}
              path="/contacts/details"
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default withRouter(NavBar);
