import React from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Dropdown, Checkbox, Avatar, Typography } from "neetoui/v2";

const ContactTableBody = ({ setShowDeleteAlert }) => {
  return (
    <>
      <tbody>
        {Array(4)
          .fill()
          .map((_, index) => (
            <React.Fragment key={index}>
              <tr className="h-10">
                <td>
                  <Checkbox name="1" />
                </td>
                <td className="truncate">
                  <div className="flex space-x-4">
                    <Avatar
                      size="large"
                      user={{
                        name: "Ronald Richards"
                      }}
                    />
                    <div className="flex flex-col mt-1">
                      <Typography style="h5">Ronald Richards</Typography>
                      <Typography style="body3" weight="light">
                        Owner
                      </Typography>
                    </div>
                  </div>
                </td>
                <td className="truncate">albert@borer.com</td>
                <td className="truncate">Feb 5, 2021</td>
                <td className="truncate">
                  <div className="flex flex-row items-center justify-end space-x-3">
                    <Dropdown
                      icon={MenuHorizontal}
                      buttonStyle="icon"
                      autoWidth
                    >
                      <li>Edit</li>
                      <li
                        onClick={() => {
                          setShowDeleteAlert(true);
                        }}
                      >
                        Delete
                      </li>
                    </Dropdown>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <Checkbox name="2" />
                </td>
                <td className="truncate">
                  <div className="flex space-x-4 ">
                    <Avatar
                      size="large"
                      user={{
                        imageUrl:
                          "https://randomuser.me/api/portraits/women/90.jpg"
                      }}
                    />
                    <div className="flex flex-col mt-1">
                      <Typography style="h5">Jacob Jones</Typography>
                      <Typography style="body3" weight="light">
                        Owner
                      </Typography>
                    </div>
                  </div>
                </td>

                <td className="truncate">albert@borer.com</td>
                <td className="truncate">Feb 5, 2021</td>
                <td className="truncate">
                  <div className="flex flex-row items-center justify-end space-x-3">
                    <Dropdown
                      icon={MenuHorizontal}
                      buttonStyle="icon"
                      autoWidth
                    >
                      <li>Edit</li>
                      <li
                        onClick={() => {
                          setShowDeleteAlert(true);
                        }}
                      >
                        Delete
                      </li>
                    </Dropdown>
                  </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
      </tbody>
    </>
  );
};

export default ContactTableBody;
