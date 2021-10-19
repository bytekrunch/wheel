import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Formik, Form } from "formik";
import { Button, Pane, Typography, Toastr } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";

import {
  ASSIGNED_CONTACT,
  TAGS,
  INITIAL_VALUES,
  VALIDATION_SCHEMA
} from "./Constants";

export default function NewNotePane({ newNotes, showPane, setShowPane }) {
  const onClose = () => setShowPane(false);

  const handleSubmit = async values => {
    try {
      newNotes(values);
      setShowPane(!showPane);
      Toastr.success("Note Added Successfully");
    } catch (err) {
      logger.error(err);
    }
  };
  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2">Add New Note</Typography>
      </Pane.Header>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={VALIDATION_SCHEMA}
      >
        <Form className="w-full">
          <Pane.Body>
            <div className="w-full space-y-6">
              <Input
                label="Title"
                name="title"
                placeholder="Enter Title"
                required
              />
              <Input
                label="Description"
                name="description"
                placeholder="Enter Description"
                size="large"
                required
              />
              <Select
                isClearable
                isSearchable
                label="Assigned Contact"
                name="assignedContact"
                options={ASSIGNED_CONTACT}
                placeholder="Select a Role"
              />
              <Select
                isClearable
                isSearchable
                required
                isMulti
                label="Tags"
                name="tags"
                options={TAGS}
                placeholder="Select Tags"
              />
            </div>
          </Pane.Body>
          <Pane.Footer className="flex space-x-4">
            <Button icon={Check} label="Save Changes" type="submit" />
            <Button style="text" label="Cancel" onClick={onClose} />
          </Pane.Footer>
        </Form>
      </Formik>
    </Pane>
  );
}
