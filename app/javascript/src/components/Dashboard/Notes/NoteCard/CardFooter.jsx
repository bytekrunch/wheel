import React from "react";

import { Clock } from "@bigbinary/neeto-icons";
import { Tag } from "neetoui/v2";
import { Avatar, Tooltip } from "neetoui/v2";

export default function CardFooter() {
  return (
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
  );
}
