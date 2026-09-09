export const menuList = [
    {
        id: 0,
        name: "dashboards",
        path: "#",
        icon: 'feather-airplay',
        dropdownMenu: [
            {
                id: 1,
                name: "CRM",
                path: "/",
                subdropdownMenu: false
            },
            {
                id: 2,
                name: "Analytics",
                path: "/dashboards/analytics",
                subdropdownMenu: false
            }
        ]
    },
    {
        id: 1,
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
        id: 2,
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
    // {
    //     id: 3,
    //     name: "reports",
    //     path: "#",
    //     icon: 'feather-cast',
    //     dropdownMenu: [
    //         {
    //             id: 1,
    //             name: "Sales Report",
    //             path: "/reports/sales",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 2,
    //             name: "Leads Report",
    //             path: "/reports/leads",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 3,
    //             name: "Project Report",
    //             path: "/reports/project",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 4,
    //             name: "Timesheets Report",
    //             path: "/reports/timesheets",
    //             subdropdownMenu: false
    //         },

    //     ]
    // },
    {
        id: 6,
        name: "sales",
        path: "#",
        icon: 'feather-dollar-sign',
        dropdownMenu: [
            {
                id: 1,
                name: "Invoice List",
                path: "/payment/list",
                subdropdownMenu: false
            },
            {
                id: 2,
                name: "Invoice Create",
                path: "/payment/create",
                subdropdownMenu: false
            }
        ]
    },
    {
        id: 7,
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
        id: 8,
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
    // {
    //     id: 10,
    //     name: "widgets",
    //     path: "#",
    //     icon: 'feather-layout',
    //     dropdownMenu: [
    //         {
    //             id: 1,
    //             name: "Lists",
    //             path: "/widgets/lists",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 2,
    //             name: "Tables",
    //             path: "/widgets/tables",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 3,
    //             name: "Charts",
    //             path: "/widgets/charts",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 4,
    //             name: "Statistics",
    //             path: "/widgets/statistics",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 5,
    //             name: "Miscellaneous",
    //             path: "/widgets/miscellaneous",
    //             subdropdownMenu: false
    //         },
    //     ]
    // },
    // {
    //     id: 11,
    //     name: "settings",
    //     path: "#",
    //     icon: 'feather-settings',
    //     dropdownMenu: [
    //         {
    //             id: 1,
    //             name: "Ganeral",
    //             path: "/settings/ganeral",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 2,
    //             name: "SEO",
    //             path: "/settings/seo",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 3,
    //             name: "Tags",
    //             path: "/settings/tags",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 4,
    //             name: "Email",
    //             path: "/settings/email",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 5,
    //             name: "Tasks",
    //             path: "/settings/tasks",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 6,
    //             name: "Leads",
    //             path: "/settings/leads",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 7,
    //             name: "Support",
    //             path: "/settings/Support",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 8,
    //             name: "Finance",
    //             path: "/settings/finance",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 9,
    //             name: "Gateways",
    //             path: "/settings/gateways",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 10,
    //             name: "Customers",
    //             path: "/settings/customers",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 11,
    //             name: "Localization",
    //             path: "/settings/localization",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 12,
    //             name: "reCAPTCHA",
    //             path: "/settings/recaptcha",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 13,
    //             name: "Miscellaneous",
    //             path: "/settings/miscellaneous",
    //             subdropdownMenu: false
    //         },
    //     ]
    // },
    // {
    //     id: 12,
    //     name: "authentication",
    //     path: "#",
    //     icon: 'feather-power',
    //     dropdownMenu: [
    //         {
    //             id: 1,
    //             name: "login",
    //             path: "#",
    //             subdropdownMenu: [
    //                 {
    //                     id: 1,
    //                     name: "Cover",
    //                     path: "/authentication/login/cover",
    //                 },
    //                 {
    //                     id: 2,
    //                     name: "Minimal",
    //                     path: "/authentication/login/minimal",
    //                 },
    //                 {
    //                     id: 3,
    //                     name: "Creative",
    //                     path: "/authentication/login/creative",
    //                 },
    //             ]
    //         },
    //         {
    //             id: 2,
    //             name: "register",
    //             path: "#",
    //             subdropdownMenu: [
    //                 {
    //                     id: 1,
    //                     name: "Cover",
    //                     path: "/authentication/register/cover",
    //                 },
    //                 {
    //                     id: 2,
    //                     name: "Minimal",
    //                     path: "/authentication/register/minimal",
    //                 },
    //                 {
    //                     id: 3,
    //                     name: "Creative",
    //                     path: "/authentication/register/creative",
    //                 },
    //             ]
    //         },
    //         {
    //             id: 3,
    //             name: "Error 404",
    //             path: "#",
    //             subdropdownMenu: [
    //                 {
    //                     id: 1,
    //                     name: "Cover",
    //                     path: "/authentication/404/cover",
    //                 },
    //                 {
    //                     id: 2,
    //                     name: "Minimal",
    //                     path: "/authentication/404/minimal",
    //                 },
    //                 {
    //                     id: 3,
    //                     name: "Creative",
    //                     path: "/authentication/404/creative",
    //                 },
    //             ]
    //         },
    //         {
    //             id: 4,
    //             name: "Reset Pass",
    //             path: "#",
    //             subdropdownMenu: [
    //                 {
    //                     id: 1,
    //                     name: "Cover",
    //                     path: "/authentication/reset/cover",
    //                 },
    //                 {
    //                     id: 2,
    //                     name: "Minimal",
    //                     path: "/authentication/reset/minimal",
    //                 },
    //                 {
    //                     id: 3,
    //                     name: "Creative",
    //                     path: "/authentication/reset/creative",
    //                 },
    //             ]
    //         },
    //         {
    //             id: 5,
    //             name: "Verify OTP",
    //             path: "#",
    //             subdropdownMenu: [
    //                 {
    //                     id: 1,
    //                     name: "Cover",
    //                     path: "/authentication/verify/cover",
    //                 },
    //                 {
    //                     id: 2,
    //                     name: "Minimal",
    //                     path: "/authentication/verify/minimal",
    //                 },
    //                 {
    //                     id: 3,
    //                     name: "Creative",
    //                     path: "/authentication/verify/creative",
    //                 },
    //             ]
    //         },
    //         {
    //             id: 6,
    //             name: "Maintenance",
    //             path: "#",
    //             subdropdownMenu: [
    //                 {
    //                     id: 1,
    //                     name: "Cover",
    //                     path: "/authentication/maintenance/cover",
    //                 },
    //                 {
    //                     id: 2,
    //                     name: "Minimal",
    //                     path: "/authentication/maintenance/minimal",
    //                 },
    //                 {
    //                     id: 3,
    //                     name: "Creative",
    //                     path: "/authentication/maintenance/creative",
    //                 },
    //             ]
    //         },
    //     ]
    // }
]
