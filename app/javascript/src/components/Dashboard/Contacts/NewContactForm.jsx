import React from "react";

import { Formik, Form } from "formik";
import { Select } from "neetoui/v2";
import { Input } from "neetoui/v2/formik";
import * as yup from "yup";

import notesApi from "apis/notes";

import { ROLE } from "./Constants";

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
      initialValues={{
        title: "",
        description: ""
      }}
      onSubmit={handleSubmit}
      validationSchema={yup.object({
        firstName: yup.string().required("First Name is required"),
        lastName: yup.string().required("Last Name is required"),
        email: yup.string().email().required("Email is required"),
        role: yup
          .object({
            label: yup.string(),
            value: yup.string()
          })
          .required("Role required")
      })}
    >
      {() => (
        <Form>
          <div className="flex space-x-2">
            <Input
              label="First Name"
              name="firstName"
              className="mb-6"
              required={true}
              placeholder="Enter First Name"
            />
            <Input
              label="Last Name"
              name="lastName"
              className="mb-6"
              required={true}
              placeholder="Enter Last Name"
            />
          </div>

          <Input
            label="Email"
            name="email"
            className="mb-6"
            required={true}
            placeholder="Enter Last Name"
          />

          <div className="my-6">
            <Select
              isClearable
              isSearchable
              required={true}
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
