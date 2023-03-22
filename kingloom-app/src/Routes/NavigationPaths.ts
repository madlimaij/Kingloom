import Home from "../Views/Home"
import TodoPage from "../Views/TodoPage";


export type NavType = {
  name: string;
  path: string;
  component: React.FC;
};

const NavigationPaths: NavType[] = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Todos",
    path: "/Todos",
    component: TodoPage,
  }
];

export default NavigationPaths;
