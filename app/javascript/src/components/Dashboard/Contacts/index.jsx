import React from "react";

import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Button } from "neetoui";
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
