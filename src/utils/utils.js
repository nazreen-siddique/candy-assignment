export const COLUMNS = [
    {
        Header: 'ID',
        accessor: 'id'
    },
    {
        Header: 'Employee Name',
        accessor: 'name'
    },
    {
        Header: 'Email',
        accessor: 'email'
    },
    {
        Header: 'Department',
        accessor: 'department'
    },
    {
        Header: 'Designation',
        accessor: 'designamtion'
    },
    {
        Header: 'Status',
        accessor: 'status'
    },
]

export const links = [
  {
    id: 1,
    text: 'Home',
    path: '/',
  },
  {
    id: 2,
    text: 'Category',
    path: '/category',
  },
];

export const categories =[
    {
      id: 1,
      text: 'department',
      apiEndPoint :'departmentData'
    },
     {
    id: 2,
    text: 'designation',
    apiEndPoint :'designationData'
  },
]

export const viewOptions = [
  {id:1,
  text:'Table'
  },
  {id:2,
  text:'Pie Chart'
  },
]

