import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Lets you open the dev server from another device on your network
   * (e.g. `npm run dev -- -H 0.0.0.0` and then visiting it from your
   * phone) without the "Blocked cross-origin request" warning. Add any
   * other LAN IP or hostname you test from to this list.
   */
  allowedDevOrigins: ["192.168.100.25", "192.168.*.*"],
};

export default nextConfig;
