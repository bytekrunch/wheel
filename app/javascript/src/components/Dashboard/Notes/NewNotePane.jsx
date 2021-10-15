import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Formik, Form } from "formik";
import { Button, Pane, Typography } from "neetoui/v2";
import { Toastr } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";
import * as yup from "yup";

import { ASSIGNED_CONTACT, TAGS, INITIAL_NOTES } from "./Constants";

export default function NewNotePane({ showPane, setShowPane }) {
  const onClose = () => setShowPane(false);
  const handleSubmit = async () => {
    try {
      Toastr.success("Note Added Successfully");
      setShowPane(!showPane);
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };
  return (
    //
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography>Add New Note</Typography>
      </Pane.Header>
      <Formik
        initialValues={INITIAL_NOTES}
        onSubmit={handleSubmit}
        validationSchema={yup.object({
          title: yup.string().required("Title is required"),
          description: yup.string().required("Description is required"),
          role: yup
            .object({
              label: yup.string(),
              value: yup.string()
            })
            .required("Role required"),
          tags: yup.array().min(1).required("Tag required")
        })}
      >
        {({ isSubmitting }) => (
          <Form className="w-full">
            <Pane.Body>
              <div className="w-full space-y-6">
                <Input
                  label="Title"
                  name="title"
                  placeholder="Enter Title"
                  required={true}
                />
                <Input
                  label="Description"
                  name="description"
                  placeholder="Enter Description"
                  size="large"
                  required={true}
                />
                <Select
                  isClearable
                  isSearchable
                  required={true}
                  label="Assigned Contact"
                  name="role"
                  options={ASSIGNED_CONTACT}
                  placeholder="Select a Role"
                />
                <Select
                  isClearable
                  isSearchable
                  required={true}
                  isMulti
                  label="Tags"
                  name="tags"
                  options={TAGS}
                  placeholder="Select Tags"
                />
              </div>
            </Pane.Body>
            <Pane.Footer className="flex space-x-4">
              <Button
                icon={Check}
                label="Save Changes"
                type="submit"
                disabled={isSubmitting}
                loading={isSubmitting}
              />
              <Button style="text" label="Cancel" onClick={onClose} />
            </Pane.Footer>
          </Form>
        )}
      </Formik>
    </Pane>
  );
}
