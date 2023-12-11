import { FileBarChart, FileText, Layout, PieChart, Upload, UserCircle, UserCog, ShoppingCart } from "lucide-react";

const MENU_ITEMS = [
  { 
    name: "Inicio",
    url: "/",
    icon: <Layout/>,
  },
  {
    name: "Apertura",
    url: "/invoice",
    icon: <FileText/>,
  },
  {
    name: "Estudiantes",
    url: "/student",
    icon: <UserCircle/>,
  },
  {
    name: "Productos",
    url: "/product",
    icon: <ShoppingCart/>,
  },

  {
    name: "Reportes",
    url: "/reports",
    icon: <PieChart/>,
  },
  {
    name: "Usuarios",
    url: "/users",
    icon: <UserCog/>,
  },
  // {
  //   name: "Archivos",
  //   url: "/file",
  //   icon: <Upload/>,
  // },  
  //{ 
  //  name: "Inicio",
  //  url: "/",
  //  icon: <Layout/>,
  //},
  // {
  //   name: "Facturación",
  //   url: "/invoice",
  //   icon: <FileText/>,
  // },
  // {
  //   name: "Proformas",
  //   url: "/proforma",
  //   icon: <FileBarChart/>,
  // },
  // {
  //   name: "Usuarios",
  //   url: "/users",
  //   icon: <UserCircle/>,
  // },
  // {
  //   name: "Reportes",
  //   url: "/reports",
  //   icon: <PieChart/>,
  // },
  // {
  //   name: "Archivos",
  //   url: "/file",
  //   icon: <Upload/>,
  // }, 
];

export { MENU_ITEMS };
