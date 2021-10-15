import React from "react";

import { MenuVertical } from "@bigbinary/neeto-icons";
import { Typography, Dropdown } from "neetoui/v2";

export default function CardHeader({
  note,
  selectedNoteIds,
  setSelectedNoteIds,
  setShowDeleteAlert
}) {
  return (
    <div>
      <Typography style="h4" className="font-semibold text-gray-900 my-0.5">
        {note.title}
      </Typography>
      <div className="absolute top-0 right-0">
        <Dropdown
          icon={function noRefCheck() {
            return <MenuVertical size={15} />;
          }}
          position="bottom-end"
          buttonStyle="text"
        >
          <li className="w-52 my-2 m-4">Edit</li>
          <li
            className="w-52 my-2 m-4"
            onClick={() => {
              setSelectedNoteIds([...selectedNoteIds, note.id]);
              setShowDeleteAlert(true);
            }}
          >
            Delete
          </li>
        </Dropdown>
      </div>
    </div>
  );
}
