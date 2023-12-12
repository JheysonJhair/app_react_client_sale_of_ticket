import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseLaptop, faUsers, faChartPie, faUtensils, faFolderOpen, faUserCog } from '@fortawesome/free-solid-svg-icons';

const MENU_ITEMS = [
  { 
    name: "Inicio",
    url: "/",
    icon: <FontAwesomeIcon icon={faHouseLaptop} />,
  },
  {
    name: "Apertura",
    url: "/opening",
    icon: <FontAwesomeIcon icon={faFolderOpen} />,
  },
  {
    name: "Estudiantes",
    url: "/students",
    icon: <FontAwesomeIcon icon={faUsers} />,
  },
  {
    name: "Productos",
    url: "/products",
    icon: <FontAwesomeIcon icon={faUtensils} />,
  },
  {
    name: "Reportes",
    url: "/reports",
    icon: <FontAwesomeIcon icon={faChartPie} />,
  },
  {
    name: "Usuarios",
    url: "/users",
    icon: <FontAwesomeIcon icon={faUserCog} />,
  },
];

export { MENU_ITEMS };
