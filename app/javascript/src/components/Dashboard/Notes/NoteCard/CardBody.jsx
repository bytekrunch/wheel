import React from "react";

import { Typography } from "neetoui/v2";

export default function CardBody({ note }) {
  return (
    <Typography style="body2" className="neeto-ui-text-gray-600 mt-1 mb-3 ">
      {note.description}
    </Typography>
  );
}
