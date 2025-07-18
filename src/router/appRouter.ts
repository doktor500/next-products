import { redirect } from "next/navigation.js";

export const Route = {
  PRODUCTS: "/products",
} as const;

export type Route = (typeof Route)[keyof typeof Route];

const appRouter = () => {
  return {
    redirectTo: (route: Route): never => {
      return redirect(route);
    },
  };
};

export default appRouter;
