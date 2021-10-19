import React from "react";

import ContactTableBody from "./ContactTableBody";
import ContactTableHeader from "./ContactTableHeader";

const ContactTable = ({ setShowDeleteAlert }) => {
  return (
    <>
      <table
        className={`neeto-ui-table neeto-ui-table--checkbox neeto-ui-table--actions`}
      >
        <ContactTableHeader />
        <ContactTableBody setShowDeleteAlert={setShowDeleteAlert} />
      </table>
    </>
  );
};

export default ContactTable;
