import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [
    "@anthropic-ai/claude-agent-sdk",
    "@modelcontextprotocol/sdk",
  ],
};

export default nextConfig;
