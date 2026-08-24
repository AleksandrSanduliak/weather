import { withPayload } from "@payloadcms/next/withPayload";

import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",

  webpack: (config, { isServer }) => {
    config.resolve.alias["react-hook-form"] = path.resolve(
      __dirname,
      "node_modules/react-hook-form"
    );
    if (!isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};
export default withPayload(nextConfig);
