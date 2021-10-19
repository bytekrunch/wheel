import React from "react";

import { Formik, Form } from "formik";
import { Select, Input } from "neetoui/v2/formik";

import notesApi from "apis/notes";

import { ROLE, VALIDATION_SCHEMA, INITIAL_VALUES } from "./Constants";

export default function NewContactForm({ onClose, refetch }) {
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
          <div className="flex space-x-2">
            <Input
              label="First Name"
              name="firstName"
              className="mb-6"
              required
              placeholder="Enter First Name"
            />
            <Input
              label="Last Name"
              name="lastName"
              className="mb-6"
              required
              placeholder="Enter Last Name"
            />
          </div>

          <Input
            label="Email"
            name="email"
            className="mb-6"
            required
            placeholder="Enter Last Name"
          />

          <div className="my-6">
            <Select
              isClearable
              isSearchable
              required
              label="Role"
              name="role"
              options={ROLE}
              placeholder="Select Role"
            />
          </div>
          <div className="nui-pane__footer nui-pane__footer--absolute"></div>
        </Form>
      )}
    </Formik>
  );
}
