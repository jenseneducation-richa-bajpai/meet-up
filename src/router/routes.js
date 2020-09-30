import Home from "../views/Home.vue";
import Description from "../views/Description.vue";
import Attending from "../views/Attending.vue";
import History from "../views/History.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/description/:id",
    name: "Description",
    component: Description,
  },
  {
    path: "/attending",
    name: "Attending",
    component: Attending,
  },
  {
    path: "/history",
    name: "History",
    component: History,
  },
];

export default routes;
