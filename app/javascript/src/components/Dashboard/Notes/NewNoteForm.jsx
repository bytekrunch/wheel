import React from "react";

import { Formik, Form } from "formik";
import { Select, Tag } from "neetoui/v2";
import { Input, Textarea } from "neetoui/v2/formik";
import * as yup from "yup";

import notesApi from "apis/notes";

import { ASSIGNED_CONTACT } from "./Constants";

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
      initialValues={{
        title: "",
        description: ""
      }}
      onSubmit={handleSubmit}
      validationSchema={yup.object({
        title: yup.string().required("Title is required"),
        description: yup.string().required("Description is required")
      })}
    >
      {() => (
        <Form>
          <Input
            label="Title"
            name="title"
            className="mb-6"
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
              options={[
                {
                  label: (
                    <Tag color="green" label="Getting Started" size="small" />
                  ),
                  value: "Getting Started"
                },
                {
                  label: <Tag color="blue" label="Tag Two" size="small" />,
                  value: "Tag Two"
                },
                {
                  label: <Tag color="red" label="Tag Three" size="small" />,
                  value: "Tag Three"
                }
              ]}
              placeholder="Select Role"
            />
          </div>
          <div className="nui-pane__footer nui-pane__footer--absolute"></div>
        </Form>
      )}
    </Formik>
  );
}
