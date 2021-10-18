import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Formik, Form } from "formik";
import { Button, Pane, Typography, Toastr } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";

import { ROLE, VALIDATION_SCHEMA, INITIAL_VALUES } from "./Constants";

export default function NewContactPane({ showPane, setShowPane }) {
  const onClose = () => setShowPane(false);
  const handleSubmit = async () => {
    try {
      setShowPane(false);
      Toastr.success("Contact added Successfully");
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };
  return (
    <Pane title="Add New Contact" isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2">Add New Contact</Typography>
      </Pane.Header>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={VALIDATION_SCHEMA}
      >
        <Form>
          <Pane.Body>
            <div className="space-y-3">
              <div className="flex space-x-2">
                <Input
                  label="First Name"
                  name="firstName"
                  required={true}
                  placeholder="Enter First Name"
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  required={true}
                  placeholder="Enter Last Name"
                />
              </div>

              <Input
                label="Email"
                name="email"
                required={true}
                placeholder="Enter Email"
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
            </div>
          </Pane.Body>
          <Pane.Footer className="flex space-x-4">
            <Button icon={Check} type="submit" label="Save Changes" />
            <Button
              style="text"
              label="Cancel"
              onClick={() => setShowPane(false)}
            />
          </Pane.Footer>
        </Form>
      </Formik>
    </Pane>
  );
}
