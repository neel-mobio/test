export const UNAUTHORIZED_ACTION_TYPES = [
  'LOGIN',
  'FORGOT_PASSWORD',
  'RESET_PASSWORD',
  'CREATE_PASSWORD',
];
export const FIELD_REQUIRED = 'This field is required.';
export const CONFRIM_MATCH = 'Confirm password needs to match password';
export const VALUE_TOO_SHORT = 'Given value is too short';
export const VALUE_TOO_LONG = 'Given value is too long';
export const EMAIL_NOT_VALID = 'Email is not valid';
export const INVALID_VALUE = 'Invalid value';
export const INVALID_QUANTITY = 'Invalid Quantity';
export const INVALID_QUANTITY_MAX = 'Quantity should be less than < 100000';
export const SUCCESS_OK = 200;
export const DEFAULT_INSTALLMENT_MONTH = 10;
export const IMAGE_URL =
  'https://img.favpng.com/23/20/7/computer-icons-information-png-favpng-g8DtjAPPNhyaU9EdjHQJRnV97_t.jpg';

export const TextMessage = {
  ROLE_CREATE_TEXT: 'User has been created successfully',
  ERROR_TEXT: 'Something went wrong',
  CONFIRMATION_TEXT: 'Are you sure you want to delete this role?',
  ROLE_DELETE_TEXT: 'Role has been deleted successfully',
  FORGOT_FAIL: 'FORGOT_PASSWORD_FAIL',
  FORGOT_PASSWORD_SUCCESS: 'FORGOT_PASSWORD_SUCCESS',
  SCHEME_ACTIVATE_SUCCESS: 'Scheme activated successfully',
  SCHEME_DEACTIVATE_SUCCESS: 'Scheme deactivated successfully',
  SCHEME_DELETE_SUCCESS: 'Scheme deleted successfully',
  USER_ACTIVATE_SUCCESS: 'User activated successfully',
  USER_DEACTIVATE_SUCCESS: 'User Deactivated successfully',
  DOWN_PAYMENT_VERIFICATION_PENDING: 'First need to verify down payment',
  FIRST_PREVIOUS_MONTH_INSTALLMENT_PAID: 'First need to pay previous month installment',
};

export const pageBreadCrumbMessages = {
  DASHBOARD: 'Dashboard',
  SCHEME_MANAGEMENT: 'Scheme Management',
  PYDS_REPORTS: 'PYDS Reports',
  JEWELLERS_AND_CUSTOMERS: 'Jewellers & Customers',
  INSTALLMENT_PAYMENT: 'Installment Payment',
  USER_MANAGEMENT: 'User Management',
  CUSTOMER_MANAGEMENT: 'Customer Management',
  SUPPORT: 'Support',
  SETTINGS: 'Settings',
};

export const pydsStatuses = {
  DOWN_PAYMENT_VERIFICATION_PENDING: 'down payment verification pending',
  BOOKED: 'booked',
  PRE_CLOSE_REQUESTED: 'pre close requested',
  PRE_CLOSE_ACCEPTED: 'pre close accepted',
  PRE_CLOSED: 'pre closed',
  ADJUST: 'adjust',
  VERIFICATION_PENDING: 'verification pending',
  VIEW_RECEiPT: 'view receipt',
  PAID: 'paid',
  UNPAID: 'unpaid',
};

export const shapes = {
  RND: 'ROUND',
};

export const dateFormat = {
  dateWithTime: 'MMM D, YYYY h:mm A',
};
export const SECONDS = 2000;
// `${record.firstName} ${record.lastName}`
export const USER_LIST_COLUMNS = (isActiveAll) => [
  {
    title: 'Member',
    dataIndex: 'member',
    key: 'member',
    sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    render: (_, record) =>
      record?.roleId?.name?.toLowerCase() === 'jewellers'
        ? record?.distributorDetails?.shopName
        : `${record?.firstName} ${record?.lastName}`,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    sorter: (a, b) => a?.email?.localeCompare(b?.email),
  },
  // {
  //   title: 'Phone Number',
  //   dataIndex: 'phoneNumber',
  //   key: 'phoneNumber',
  // },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
    sorter: isActiveAll ? (a, b) => a.roleId?.name.localeCompare(b.roleId?.name) : false,
    render: (_, record) => record?.roleId?.name,
  },
  {
    title: 'Access',
    dataIndex: 'access',
    key: 'access',
    sorter: isActiveAll ? (a, b) => a.roleId?.name.localeCompare(b.roleId?.name) : false,
    render: (_, record) => {
      if (
        record?.roleId?.name.toLowerCase() === 'admin' ||
        record?.roleId?.name.toLowerCase() === 'account teams'
      ) {
        return 'Full';
      } else if (record?.roleId?.name.toLowerCase() === 'jewellers') {
        return 'Edit';
      }
    },
  },
  {
    title: 'Activate/Deactivate',
    dataIndex: 'isActive',
    key: 'isActive',
  },
];
