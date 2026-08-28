import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/job-bewerbung")({
  component: () => <Outlet />,
});
