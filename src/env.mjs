import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Server Side Environment Variables
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
  },

  /**
   * Client Side Environment Variables (prefixed with `NEXT_PUBLIC_`)
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
  },

  /**
   * Runtime Environment Variables (prefixed with `NEXT_PUBLIC_`)
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },
  /**
   * Skip validation of environment variables, for building without verifying the environment variables.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
