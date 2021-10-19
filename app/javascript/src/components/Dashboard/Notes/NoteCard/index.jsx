import React from "react";

import { Typography } from "neetoui/v2";

import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

export default function NoteCard({
  selectedNoteIds,
  setSelectedNoteIds,
  notes = [],
  setShowDeleteAlert
}) {
  return (
    <div className="w-full px-3 flex flex-col items-start ">
      {notes.map(note => (
        <div
          key={note.id}
          className={
            "cursor-pointer mt-4 bg-white border neeto-ui-bd-gray-300 p-4 neeto-ui-shadow-xs  w-full rounded-sm"
          }
        >
          <div className="border-b-2 relative">
            <CardHeader
              note={note}
              setShowDeleteAlert={setShowDeleteAlert}
              selectedNoteIds={selectedNoteIds}
              setSelectedNoteIds={setSelectedNoteIds}
            />
            <CardBody>
              <Typography style="body2">{note.description}</Typography>
            </CardBody>
          </div>
          <CardFooter />
        </div>
      ))}
    </div>
  );
}
