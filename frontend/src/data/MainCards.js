import { faBoxesStacked, faTruckFast, faCoins, faHelmetSafety } from "@fortawesome/free-solid-svg-icons";

const modules = [
  {
    title: "Inventory",
    description: "Track products, stock levels, and inventory movements.",
    icon: faBoxesStacked,
    route: "/main/inventory"
  },
  {
    title: "Human Resources",
    description: "Manage employee information, roles, and organizational structure.",
    icon: faHelmetSafety,
    route: "/main/rh"
  },
  {
    title: "Finance",
    description: "Monitor financial records, transactions, and business performance.",
    icon: faCoins,
    route: "/main/finance"
  },
  {
    title: "Logistics",
    description: "Coordinate supply chain operations, shipments, and deliveries.",
    icon: faTruckFast,
    route: "/main/logistics"
  }
];

export default modules;