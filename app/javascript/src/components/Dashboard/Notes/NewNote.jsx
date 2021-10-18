import React from "react";

import { Formik, Form } from "formik";
import { Input, Textarea, Select } from "neetoui/v2/formik";

import notesApi from "apis/notes";

import {
  ASSIGNED_CONTACT,
  TAGS,
  INITIAL_VALUES,
  VALIDATION_SCHEMA
} from "./Constants";

export default function NewNoteForm({ onClose, refetch }) {
  const handleSubmit = async values => {
    try {
      await notesApi.create(values);
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={VALIDATION_SCHEMA}
    >
      {() => (
        <Form>
          <Input
            label="Title"
            name="title"
            required={true}
            placeholder="Enter Note Title"
          />
          <Textarea
            label="Description"
            name="description"
            rows={1}
            required={true}
            placeholder="Enter Note Description"
          />
          <div className="my-6">
            <Select
              isClearable
              isSearchable
              required={true}
              label="Assigned Contact"
              name="assignedContact"
              options={ASSIGNED_CONTACT}
              placeholder="Select a Role"
            />
          </div>
          <div className="my-6">
            <Select
              isClearable
              isSearchable
              required={true}
              isMulti
              label="Tags"
              name="tags"
              options={TAGS}
              placeholder="Select Role"
            />
          </div>
          <div className="nui-pane__footer nui-pane__footer--absolute"></div>
        </Form>
      )}
    </Formik>
  );
}
