import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import LayoutAuth from "../layout/layoutAuth";
import LoginCreative from "../pages/login-creative";
import Dashboard from "../pages/dashboard";
import ExpenseTracker from "../pages/expense-tracker";
import InventoryList from "../pages/inventory-list";
import InventoryView from "../pages/inventory-view";
import InventoryCreate from "../pages/inventory-create";
import InventoryEdit from "../pages/inventory-edit";
import InvoiceList from "../pages/invoice-list";
import InvoiceView from "../pages/invoice-view";
import InvoiceCreate from "../pages/invoice-create";
import InvoiceEdit from "../pages/invoice-edit";
import CustomersList from "../pages/customer-list";
import CustomersView from "../pages/customer-view";
import CustomersCreate from "../pages/customer-create";
import CustomerEdit from "../pages/customer-edit";
import SupplierList from "../pages/supplier-list";
import SupplierView from "../pages/supplier-view";
import SupplierCreate from "../pages/supplier-create";
import SupplierEdit from "../pages/supplier-edit";
import EmployeeList from "../pages/employee-list";
import EmployeeView from "../pages/employee-view";
import EmployeeCreate from "../pages/employee-create";
import EmployeeEdit from "../pages/employee-edit";
// import LoginMinimal from "../pages/extrapages/login-minimal";
// import RegisterMinimal from "../pages/extrapages/register-minimal";
// import RegisterCreative from "../pages/extrapages/register-creative";
// import ResetMinimal from "../pages/extrapages/reset-minimal";
// import ResetCreative from "../pages/extrapages/reset-creative";
// import ErrorCreative from "../pages/error-creative";
// import ErrorMinimal from "../pages/error-minimal";
// import OtpMinimal from "../pages/extrapages/otp-minimal";
// import OtpCreative from "../pages/extrapages/otp-creative";
// import MaintenanceMinimal from "../pages/extrapages/maintenance-minimal";
// import MaintenanceCreative from "../pages/extrapages/maintenance-creative";
// import WidgetsLists from "../pages/extrapages/widgets-lists";
// import WidgetsTables from "../pages/extrapages/widgets-tables";
// import WidgetsCharts from "../pages/extrapages/widgets-charts";
// import WidgetsStatistics from "../pages/extrapages/widgets-statistics";
// import WidgetsMiscellaneous from "../pages/extrapages/widgets-miscellaneous";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/expense-tracker",
                element: <ExpenseTracker />
            },
            {
                path: "/inventory/list",
                element: <InventoryList />
            },
            {
                path: "/inventory/add",
                element: <InventoryCreate />
            },
            {
                path: "/inventory/view",
                element: <InventoryView />
            },
            {
                path: "/inventory/edit",
                element: <InventoryEdit />
            },
            {
                path: "/invoice/list",
                element: <InvoiceList />
            },
            {
                path: "/invoice/view",
                element: <InvoiceView />
            },
            {
                path: "/invoice/create",
                element: <InvoiceCreate />
            },
            {
                path: "/invoice/edit",
                element: <InvoiceEdit />
            },
            {
                path: "/customers/list",
                element: <CustomersList />
            },
            {
                path: "/customers/view",
                element: <CustomersView />
            },
            {
                path: "/customers/create",
                element: <CustomersCreate />
            },
            {
                path: "/customers/edit",
                element: <CustomerEdit />
            },
            {
                path: "/supplier/list",
                element: <SupplierList />
            },
            {
                path: "/supplier/add",
                element: <SupplierCreate />
            },
            {
                path: "/supplier/view",
                element: <SupplierView />
            },
            {
                path: "/supplier/edit",
                element: <SupplierEdit />
            },
            {
                path: "/employees/list",
                element: <EmployeeList />
            },
            {
                path: "/employees/create",
                element: <EmployeeCreate />
            },
            {
                path: "/employees/view",
                element: <EmployeeView />
            },
            {
                path: "/employees/edit",
                element: <EmployeeEdit />
            },
            
            // {
            //     path: "/widgets/lists",
            //     element: <WidgetsLists />
            // },
            // {
            //     path: "/widgets/tables",
            //     element: <WidgetsTables />
            // },
            // {
            //     path: "/widgets/charts",
            //     element: <WidgetsCharts/>
            // },
            // {
            //     path: "/widgets/statistics",
            //     element: <WidgetsStatistics/>
            // },
            // {
            //     path: "/widgets/miscellaneous",
            //     element: <WidgetsMiscellaneous/>
            // },

        ]
    },
    {
        path: "/",
        element: <LayoutAuth />,
        children: [
            {
                index: true,
                element: <LoginCreative />
            },
            // {
            //     path: "/authentication/login/cover",
            //     element: <LoginCover />
            // },
            // {
            //     path: "/authentication/login/minimal",
            //     element: <LoginMinimal />
            // },
            // {
            //     path: "/authentication/login/creative",
            //     element: <LoginCreative />
            // },
            // {
            //     path: "/authentication/register/cover",
            //     element: <RegisterCover />
            // },
            // {
            //     path: "/authentication/register/minimal",
            //     element: <RegisterMinimal />
            // },
            // {
            //     path: "/authentication/register/creative",
            //     element: <RegisterCreative />
            // },
            // {
            //     path: "/authentication/reset/cover",
            //     element: <ResetCover />
            // },
            // {
            //     path: "/authentication/reset/minimal",
            //     element: <ResetMinimal />
            // },
            // {
            //     path: "/authentication/reset/creative",
            //     element: <ResetCreative />
            // },
            // {
            //     path: "/authentication/404/cover",
            //     element: <ErrorCover />
            // },
            // {
            //     path: "/authentication/404/minimal",
            //     element: <ErrorMinimal />
            // },
            // {
            //     path: "/authentication/404/creative",
            //     element: <ErrorCreative />
            // },
            // {
            //     path: "/authentication/verify/cover",
            //     element: <OtpCover />
            // },
            // {
            //     path: "/authentication/verify/minimal",
            //     element: <OtpMinimal />
            // },
            // {
            //     path: "/authentication/verify/creative",
            //     element: <OtpCreative />
            // },
            // {
            //     path: "/authentication/maintenance/cover",
            //     element: <MaintenanceCover />
            // },
            // {
            //     path: "/authentication/maintenance/minimal",
            //     element: <MaintenanceMinimal />
            // },
            // {
            //     path: "/authentication/maintenance/creative",
            //     element: <MaintenanceCreative />
            // },
        ]
    }
])