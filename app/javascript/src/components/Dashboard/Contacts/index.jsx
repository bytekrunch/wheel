import React from "react";

import { Button } from "neetoui";
import { Header } from "neetoui/v2/layouts";
import { BrowserRouter } from "react-router-dom";

//import notesApi from "apis/notes";

const Contacts = () => {
  return (
    <>
      <BrowserRouter>
        <Header
          actionBlock={<Button label="Add Contact +" />}
          menuBarHandle={<Button className="mr-2" style="text" />}
          title="All Contacts"
        />
      </BrowserRouter>
    </>
  );
};

export default Contacts;
