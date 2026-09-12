import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  // networkMode "always": without this, React Query treats server-side
  // rendering (no `navigator.onLine`) as offline and marks queries
  // fetchStatus "paused" — a state that then never resolves after
  // hydration, leaving every lesson page stuck on "nicht gefunden".
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { networkMode: "always" },
      mutations: { networkMode: "always" },
    },
  });

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
