import React, { useState, useEffect } from "react";

import { Search, BurgerMenu } from "@bigbinary/neeto-icons";
import { PageLoader } from "neetoui";
import { Button, Pagination } from "neetoui/v2";
import { Input } from "neetoui/v2";
import { Header } from "neetoui/v2/layouts";
import { Container } from "neetoui/v2/layouts";

import ContactsMenuBar from "components/Common/Navbar/ContactsMenuBar";

import DeleteAlert from "./DeleteAlert";
import NewContactPane from "./NewContactPane";
import Table from "./Table";

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
                  className="flex w-72 h-8 m-2"
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
            <Table setShowDeleteAlert={setShowDeleteAlert} />
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
