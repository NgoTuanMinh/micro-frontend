import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@kudo/react-app",
  app: () => System.import("@kudo/react-app"),
  activeWhen: ["/react"],
});

registerApplication({
  name: "angular-app",
  app: () => System.import("angular-app"),
  activeWhen: ["/angular"],
});

start({
  urlRerouteOnly: true,
});
