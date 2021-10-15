import React, { useState, useEffect } from "react";

import { Search, BurgerMenu, MenuHorizontal } from "@bigbinary/neeto-icons";
import { PageLoader } from "neetoui";
import { Button, Pagination, Dropdown, Checkbox, Avatar } from "neetoui/v2";
import { Input, Typography } from "neetoui/v2";
import { Header } from "neetoui/v2/layouts";
import { Container } from "neetoui/v2/layouts";

import ContactsMenuBar from "components/Common/Navbar/ContactsMenuBar";

import DeleteAlert from "./DeleteAlert";
import NewContactPane from "./NewContactPane";

const Contacts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showMenuBar, setShowMenuBar] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <div className="flex w-full">
        {showMenuBar ? <ContactsMenuBar /> : null}
        <Container>
          <Header
            actionBlock={
              <>
                <Input
                  placeholder="Search name, Email, Phone Number etc"
                  className="flex flex-row w-72 h-8 m-2"
                  size="small"
                  prefix={<Search size={16} />}
                />
                <Button
                  ClassName="mr-3 h-8"
                  label="Add Contact +"
                  onClick={() => setShowNewContactPane(true)}
                />
              </>
            }
            menuBarHandle={
              <Button
                onClick={() => {
                  setShowMenuBar(showMenuBar => !showMenuBar);
                }}
                icon={function noRefCheck() {
                  return <BurgerMenu />;
                }}
                style="text"
              />
            }
            title="All Contacts"
          />

          {isLoading ? (
            <PageLoader />
          ) : (
            <table
              className={`neeto-ui-table neeto-ui-table--checkbox neeto-ui-table--actions`}
            >
              <thead>
                <tr>
                  <th>
                    <Checkbox name="header" />
                  </th>
                  <th>Name & Role</th>
                  <th>Email</th>
                  <th>Created At</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {Array(3)
                  .fill()
                  .map((_, index) => (
                    <React.Fragment key={index}>
                      <tr className="h-10">
                        <td>
                          <Checkbox name="1" />
                        </td>
                        <td>
                          <div className="flex space-x-4">
                            <Avatar
                              size="large"
                              user={{
                                name: "Ronald Richards"
                              }}
                            />
                            <div className="flex flex-col mt-1">
                              <Typography style="h5">
                                Ronald Richards
                              </Typography>
                              <Typography style="body3" weight="light">
                                Owner
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td>albert@borer.com</td>
                        <td>Feb 5, 2021</td>
                        <td>
                          <div className="flex flex-row items-center justify-end space-x-3">
                            <Dropdown
                              icon={MenuHorizontal}
                              buttonStyle="icon"
                              autoWidth
                            >
                              <li className="w-52 my-2 m-4">Edit</li>
                              <li
                                className="w-52 my-2 m-4"
                                onClick={() => {
                                  setShowDeleteAlert(true);
                                }}
                              >
                                Delete
                              </li>
                            </Dropdown>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Checkbox name="2" />
                        </td>
                        <td>
                          <div className="flex space-x-4 ">
                            <Avatar
                              size="large"
                              user={{
                                imageUrl:
                                  "https://randomuser.me/api/portraits/women/90.jpg"
                              }}
                            />
                            <div className="flex flex-col mt-1">
                              <Typography style="h5">Jacob Jones</Typography>
                              <Typography style="body3" weight="light">
                                Owner
                              </Typography>
                            </div>
                          </div>
                        </td>

                        <td>albert@borer.com</td>
                        <td>Feb 5, 2021</td>
                        <td>
                          <div className="flex flex-row items-center justify-end space-x-3">
                            <Dropdown
                              icon={MenuHorizontal}
                              buttonStyle="icon"
                              autoWidth
                            >
                              <li className="w-52 my-2 m-4">Edit</li>
                              <li
                                className="w-52 my-2 m-4"
                                onClick={() => {
                                  setShowDeleteAlert(true);
                                }}
                              >
                                Delete
                              </li>
                            </Dropdown>
                          </div>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
              </tbody>
            </table>
          )}
          {/* </Scrollable> */}
          <div className="flex flex-row items-center justify-end w-full mt-6 mb-8">
            <Pagination
              count={300}
              pageNo={1}
              pageSize={25}
              navigate={() => {}}
            />
          </div>

          <NewContactPane
            showPane={showNewContactPane}
            setShowPane={setShowNewContactPane}
          />
          {showDeleteAlert && (
            <DeleteAlert
              setShowDeleteAlert={setShowDeleteAlert}
              onClose={() => {
                setShowDeleteAlert(false);
              }}
            />
          )}
        </Container>
      </div>
    </>
  );
};

export default Contacts;
