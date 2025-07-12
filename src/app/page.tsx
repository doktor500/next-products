import appRouter, { Route } from "@/router/appRouter";

export default function Home() {
  appRouter().redirectTo(Route.PRODUCTS);
}
