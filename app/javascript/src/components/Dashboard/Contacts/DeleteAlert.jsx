import React from "react";

import { Modal, Typography, Button, Toastr } from "neetoui/v2";

export default function DeleteAlert({ onClose, setShowDeleteAlert }) {
  return (
    <Modal isOpen onClose={onClose} loading={false}>
      <Modal.Header>
        <Typography style="h2">Delete Contact</Typography>
      </Modal.Header>
      <Modal.Body>
        <Typography
          style="body2"
          lineHeight="normal"
          className="neeto-ui-text-gray-700"
        >
          Are you sure you want to delete the conntact? This action cannot be
          undone.
        </Typography>
      </Modal.Body>
      <Modal.Footer className="space-x-2">
        <Button
          label="Continue"
          size="large"
          onClick={() => {
            Toastr.success("Contact deleted Successfully");
            setShowDeleteAlert(false);
          }}
        />
        <Button style="text" label="Cancel" size="large" onClick={onClose} />
      </Modal.Footer>
    </Modal>
  );
}
