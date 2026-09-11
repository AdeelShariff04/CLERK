export const menuList = [
    {
        id: 0,
        name: "dashboard",
        path: "/dashboard",
        icon: 'feather-airplay',
        dropdownMenu: []
    },
    {
        id: 1,
        name: "expense tracker",
        path: "/expense-tracker",
        icon: 'feather-bar-chart-2',
        dropdownMenu: []
    },
    {
        id: 2,
        name: "inventory",
        path: "#",
        icon: 'feather-briefcase',
        dropdownMenu: [
            {
                id: 1,
                name: "Inventory List",
                path: "/inventory/list",
                subdropdownMenu: false
            },
            {
                id: 2,
                name: "Inventory Add",
                path: "/inventory/add",
                subdropdownMenu: false
            }
        ]
    },
    {
        id: 3,
        name: "supplier",
        path: "#",
        icon: 'feather-shopping-bag',
        dropdownMenu: [
            {
                id: 1,
                name: "Supplier List",
                path: "/supplier/list",
                subdropdownMenu: false
            },
            {
                id: 2,
                name: "Supplier Add",
                path: "/supplier/add",
                subdropdownMenu: false
            }
        ]
    },
    {
        id: 4,
        name: "sales",
        path: "#",
        icon: 'feather-dollar-sign',
        dropdownMenu: [
            {
                id: 1,
                name: "Invoice List",
                path: "/invoice/list",
                subdropdownMenu: false
            },
            {
                id: 2,
                name: "Invoice Create",
                path: "/invoice/create",
                subdropdownMenu: false
            }
        ]
    },
    {
        id: 5,
        name: "customers",
        path: "#",
        icon: 'feather-users',
        dropdownMenu: [
            {
                id: 1,
                name: "Customers",
                path: "/customers/list",
                subdropdownMenu: false
            },
            {
                id: 2,
                name: "Customers Create",
                path: "/customers/create",
                subdropdownMenu: false
            }
        ]
    },
    {
        id: 6,
        name: "employees",
        path: "#",
        icon: 'feather-user-check',
        dropdownMenu: [
            {
                id: 1,
                name: "Employees",
                path: "/employees/list",
                subdropdownMenu: false
            },
            {
                id: 2,
                name: "Employee Create",
                path: "/employees/create",
                subdropdownMenu: false
            }
        ]
    },
]
