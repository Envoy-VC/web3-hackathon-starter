import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	/**
	 * Client Side Environment Variables (prefixed with `NEXT_PUBLIC_`)
	 */
	client: {},
	/**
	 * Runtime Environment Variables (prefixed with `NEXT_PUBLIC_`)
	 */
	experimental__runtimeEnv: {},
	/**
	 * Skip validation of environment variables, for building without verifying the environment variables.
	 */
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
