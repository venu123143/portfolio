import { StartOptions } from "pm2";

const config: { apps: StartOptions[] } = {
  apps: [
    {
      name: "vite-app",
      script: "serve",
      args: "-s dist -l 3000", // Serve the dist folder on port 3000
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};

export default config;