import "./Table.css";
import React from "react";
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  PercentageOutlined,
  DiffOutlined,
} from "@ant-design/icons";
import { Table, Button } from "antd";
import session from "../../utils/session";
import propTypes from "prop-types";

const CustomTable = (props) => {
  const {
    rowSelectionType,
    total,
    isPopup = false,
    size = "default",
    isPromoView = false,
  } = props;
  const isAdmin =
    session && session.role && session.role.toLowerCase() !== "admin";
  const prepareRowSelection = () => {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        props.onSelectRows && props.onSelectRows(selectedRowKeys, selectedRows);
      },
      getCheckboxProps: props.checkboxProps,
    };
    return rowSelection;
  };
  const editFunction = (event, record, onEdit) => {
    event.stopPropagation();
    onEdit && onEdit(record);
  };
  const viewFunction = (event, record, onView) => {
    event.stopPropagation();
    onView && onView(record);
  };
  const deleteFunction = (event, record, onDelete) => {
    event.stopPropagation();
    onDelete && onDelete(record);
  };
  const prepareColumns = () => {
    let { columns } = props;
    const {
      isEditable,
      isDeleteable,
      isViewable,
      isViewablePromoDetails,
      onView,
      onEdit,
      onDelete,
      onViewPromoDetails,
    } = props;
    if (isEditable || isDeleteable || isViewable || isViewablePromoDetails) {
      columns = [
        ...columns,
        {
          title: "Actions",
          dataIndex: "actions",
          render: (_, record) => {
            return (
              <div className="action-btns-container">
                {isViewable && (
                  <Button
                    className="btn-style"
                    onClick={(event) => {
                      viewFunction(event, record, onView);
                    }}
                  >
                    {isPromoView ? (
                      <DiffOutlined className="mr-5" />
                    ) : (
                      <EyeOutlined className="mr-5" />
                    )}
                  </Button>
                )}
                {isViewablePromoDetails && (
                  <Button
                    className="btn-style"
                    onClick={(event) => {
                      viewFunction(event, record, onViewPromoDetails);
                    }}
                  >
                    <PercentageOutlined className="mr-5" />
                  </Button>
                )}
                {isEditable && isAdmin && (
                  <Button
                    className="btn-style"
                    onClick={(event) => editFunction(event, record, onEdit)}
                    disabled={
                      record?.ticketStatusValue?.toLowerCase() === "resolved"
                    }
                  >
                    <EditOutlined className="mr-5" />
                  </Button>
                )}
                {isEditable && !isAdmin && (
                  <Button
                    className="btn-style"
                    onClick={(event) => editFunction(event, record, onEdit)}
                    disabled={
                      record?.promoStatus?.toLowerCase() === "live" ||
                      record?.promoStatus?.toLowerCase() === "live-errors" ||
                      record?.promoStatus?.toLowerCase() === "approved" ||
                      record?.promoStatus?.toLowerCase() === "expired" ||
                      record?.ticketStatusValue?.toLowerCase() === "resolved" ||
                      (!record?.promoCreatedBy && record?.isPromo)
                    }
                  >
                    <EditOutlined className="mr-5" />
                  </Button>
                )}
                {isDeleteable && isAdmin && (
                  <Button
                    className="btn-style"
                    onClick={(event) => {
                      deleteFunction(event, record, onDelete);
                    }}
                    disabled={
                      record?.role?.toLowerCase() === "admin" ||
                      record?.promoStatus?.toLowerCase() === "live" ||
                      record?.promoStatus?.toLowerCase() === "expired"
                    }
                  >
                    <DeleteOutlined className="mr-5" />
                  </Button>
                )}
                {isDeleteable && !isAdmin && (
                  <Button
                    className="btn-style"
                    onClick={(event) => {
                      deleteFunction(event, record, onDelete);
                    }}
                    disabled={
                      record?.role?.toLowerCase() === "admin" ||
                      record?.promoStatus?.toLowerCase() === "live" ||
                      record?.promoStatus?.toLowerCase() === "expired" ||
                      (!record?.mapCreatedBy && record?.isMap) ||
                      (!record?.promoCreatedBy && record?.isPromo)
                    }
                  >
                    <DeleteOutlined className="mr-5" />
                  </Button>
                )}
              </div>
            );
          },
        },
      ];
    }
    return columns;
  };
  return (
    <div className="pag" style={{ overflowX: "auto" }}>
      <Table
        className={props.className && props.className}
        columns={prepareColumns()}
        onChange={prepareRowSelection.onChange}
        dataSource={props?.rows}
        rowKey={props.rowKey || "key"}
        rowSelection={
          rowSelectionType
            ? { type: rowSelectionType, ...prepareRowSelection() }
            : null
        }
        pagination={
          props.pagination
            ? props.current
              ? {
                  showSizeChanger: false,
                  showQuickJumper: true,
                  showTotal: (total) => `Total ${total} items`,
                  total: total,
                  current: props.current,
                  position: ["bottomLeft"],
                  onChange: (page) => {
                    props.onChange(page);
                  },
                  defaultPageSize: props.pageSize ? props.pageSize : 5,
                }
              : {
                  showSizeChanger: total > 5 ? true : false,
                  showQuickJumper: true,
                  showTotal: (total) => `Total ${total} items`,
                  total: { total },
                  position: ["bottomLeft"],
                  defaultPageSize: props.pageSize ? props.pageSize : 5,
                }
            : props.pagination
        }
        size={size}
        onRow={(record) => {
          return {
            onClick: () => {
              if (
                props.isViewable &&
                props.isViewablePromoDetails &&
                isPopup === false
              ) {
                props.onView(record);
                props.onViewPromoDetails(record);
              }
            },
          };
        }}
        rowClassName={() => {
          if (props.isViewable && props.isViewablePromoDetails) {
            return "clickable";
          }
        }}
        footer={props.footer !== false ? () => props.footer : false}
      />
    </div>
  );
};
CustomTable.propTypes = {
  total: propTypes.string, // You can change the type to the appropriate data type
  rowSelectionType: propTypes.string,
  isPopup: propTypes.string,
  size: propTypes.string,
  isPromoView: propTypes.string,
  onSelectRows: propTypes.string,
  checkboxProps: propTypes.string,
  columns: propTypes.string,
  isEditable: propTypes.string,
  isDeleteable: propTypes.string,
  isViewable: propTypes.string,
  isViewablePromoDetails: propTypes.string,
  onView: propTypes.string,
  onDelete: propTypes.string,
  onEdit: propTypes.string,
  onViewPromoDetails: propTypes.string,
  className: propTypes.string,
  rows: propTypes.array,
  rowKey: propTypes.string,
  current: propTypes.string,
  onChange: propTypes.string,
  pagination: propTypes.boolean,
  pageSize: propTypes.string,
};
export default CustomTable;
