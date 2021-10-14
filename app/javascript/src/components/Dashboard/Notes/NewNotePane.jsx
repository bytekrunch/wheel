import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Button, Pane, Typography } from "@bigbinary/neetoui/v2";

import NewNoteForm from "./NewNoteForm";

export default function NewNotePane({ fetchNotes, showPane, setShowPane }) {
  const onClose = () => setShowPane(false);
  return (
    // <Pane title="Add new note" isOpen={showPane} onClose={onClose}>
    //   <div className="px-6">
    //     <NewNoteForm onClose={onClose} refetch={fetchNotes} />
    //   </div>
    // </Pane>

    <Pane title="Add New Note" isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2">Add New Note</Typography>
      </Pane.Header>
      <Pane.Body>
        <div>
          <NewNoteForm onClose={onClose} refetch={fetchNotes} />
        </div>
      </Pane.Body>
      <Pane.Footer className="flex space-x-4">
        <Button
          icon={Check}
          label="Save Changes"
          onClick={() => setShowPane(false)}
        />
        <Button
          style="text"
          label="Cancel"
          onClick={() => setShowPane(false)}
        />
      </Pane.Footer>
    </Pane>
  );
}
