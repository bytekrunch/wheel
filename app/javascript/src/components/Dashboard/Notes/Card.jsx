import React from "react";

import { Clock, MenuVertical } from "@bigbinary/neeto-icons";
import { Tag } from "@bigbinary/neetoui/v2";
import { Avatar, Tooltip } from "@bigbinary/neetoui/v2";
import { Typography, Dropdown } from "@bigbinary/neetoui/v2";

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
            "cursor-pointer my-1  bg-white border neeto-ui-bd-gray-300 p-4 neeto-ui-shadow-s  w-full  hover:bg-gray-50 "
          }
        >
          <div className="border-b-2 relative">
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
            <Typography
              style="h4"
              className="font-semibold text-gray-900 my-0.5"
            >
              {note.title}
            </Typography>
            <Typography
              style="body2"
              className="neeto-ui-text-gray-600 mt-1 mb-3 "
            >
              {note.description}
            </Typography>
          </div>
          <div className="mt-4 flex flex-row justify-between">
            <Tag
              label="Getting Started"
              size="large"
              className="neeto-ui-bg-gray-100 neeto-ui-text-gray-500"
            />
            <div className="flex flex-row items-center justify-between space-x-1 neeto-ui-text-gray-600">
              <Clock size={14} />
              <Tooltip content="Wednesday, 10:30AM" placement="bottom-start">
                <span className="my-auto text-sm">Created 2 hours ago</span>
              </Tooltip>
              <Avatar
                size="small"
                user={{
                  imageUrl: "https://randomuser.me/api/portraits/women/90.jpg"
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
