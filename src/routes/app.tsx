import AppLayout from "@/layouts/AppLayout";
import { Navigate } from "react-router-dom";
import { Profile } from "@/modules/profile/pages/Profile";
import ReportDashboard from "@/modules/reports/components/ReportDashboard";
import FileUpload from "@/modules/reports/components/FileUpload";
import { Users } from "@/modules/user/pages/Users";
import { Students } from "@/modules/student/pages/Students";
import { Products } from "@/modules/product/pages/Products";
import { HomePage } from "@/pages/Home";
import Invoice from "@/modules/accounting/pages/Invoice";
import ProtectedRoute from "@/components/ProtectedRoute";

const appRouter = [
  {
    path: "/",
    element:
      //<ProtectedRoute>
        <AppLayout />,
      //</ProtectedRoute>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "file",
        element: <FileUpload />,
      },
      {
        path: "reports",
        element: <ReportDashboard />,
      },
      {
        path: "opening",
        element: <Invoice />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "students",
        element: <Students />,
      },
      {
        path: "proforma/:id",
        element: (
          <div>
            <h1>PROFORMA DETAIL</h1>
          </div>
        ),
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
];

export default appRouter;
