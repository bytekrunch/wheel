import React from "react";

export default function NoteTables({
  //selectedNoteIds,
  //setSelectedNoteIds,
  notes = []
}) {
  return (
    <div className="w-full px-4 flex flex-col items-start ">
      {notes.map(note => (
        <div
          key={note.id}
          className={
            "cursor-pointer bg-white border neeto-ui-bd-gray-300 p-4 neeto-ui-shadow-s  w-full h-36 hover:bg-gray-50 "
          }
        >
          <div className="border-b-2 ">
            <h4 className="text-base font-semibold text-gray-900 my-0.5">
              {note.title}
            </h4>

            <div className="flex flex-row items-center neeto-ui-text-gray-600 justify-start ">
              {note.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
