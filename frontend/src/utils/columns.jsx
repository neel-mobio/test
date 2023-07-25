import { Checkbox } from "antd";

export const ROLES_COLUMNS = [
  {
    title: "#",
    isSortable: false,
    dataIndex: "srno",
    key: "srno",
    width: 1,
    render: (_, record, index) => <div>{index + 1}</div>,
  },
  {
    title: "Name",
    isSortable: true,
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name?.localeCompare(b.name),
  },
  {
    title: "External ID",
    isSortable: true,
    dataIndex: "external_id",
    key: "external_id",
    sorter: (a, b) => a.external_id?.localeCompare(b.external_id),
  },
  {
    title: "User",
    dataIndex: "user",
    key: "user",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
];
export const ROLE_MANAGEMENT = [
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Access Type",
    dataIndex: "accessType",
    key: "accessType",
  },
  {
    title: "Project Type",
    dataIndex: "projectType",
    key: "projectType",
  },
  {
    title: "Modify",
    dataIndex: "modify",
    key: "modify",
  },
  {
    title: "Moderate",
    dataIndex: "moderate",
    key: "moderate",
  },
  {
    title: "Delete",
    dataIndex: "delete",
    key: "delete",
  },
  // {
  //   title: "Action",
  //   dataIndex: "action",
  //   key: "action",
  // },
];
export const SUPER_ADMIN_ROLE_MANAGEMENT = [
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Read",
    dataIndex: "read",
    key: "read",
  },
  {
    title: "Write",
    dataIndex: "write",
    key: "write",
  },
  {
    title: "Modify",
    dataIndex: "modify",
    key: "modify",
  },
  {
    title: "Moderate",
    dataIndex: "moderate",
    key: "moderate",
  },
  {
    title: "Delete",
    dataIndex: "delete",
    key: "delete",
  },
];
