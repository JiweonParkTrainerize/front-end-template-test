import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';
import { createHtmlPlugin } from 'vite-plugin-html';

const FALLBACK_SERVER = 'gymengine';
const PRODUCTION_SERVER = 'trainerize';
const DEFAULT_VERSION = '0.0.0';

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const isDevMode = mode === 'development';
  const isDocker = process.env.docker === 'true';
  const isAnalyzeMode = process.env.analyze === 'true';
  const isLocalDev = process.env.localDev === 'true';

  const fallbackServer = isDevMode ? FALLBACK_SERVER : PRODUCTION_SERVER;
  console.log('g1 hehe: isLocalDev', isLocalDev);
  const plugins = [react()];

  if (isAnalyzeMode) {
    console.log('Analyzing bundle...');
    plugins.push([visualizer({ open: true }) as PluginOption]);
  }

  // copied webpack.spa.config.js logic
  const clientSecret = process.env['npm_config_clientsecret'] ?? '';
  const clientSecretId = process.env['npm_config_clientid'] ?? '';

  const DEV_SERVER = process.env['npm_config_server'] ?? fallbackServer;
  const WEB_VERSION = process.env['npm_config_webversion'] ? process.env['npm_config_webversion'] : DEFAULT_VERSION;

  let deployMode = 'development';
  if (!isDevMode) {
      if (DEV_SERVER.toLowerCase() === 'trainerize') {
          deployMode = 'production';
      } else if (DEV_SERVER.toLowerCase() === 'gymengine' || DEV_SERVER.toLowerCase() === 'gymengine2') {
          deployMode = 'staging';
      }
  }
  console.log(
    `Running webpack in ${mode} mode. Server: ${DEV_SERVER} | isLocalDev: ${isLocalDev} | isDocker: ${isDocker}`,
  );

  // copied from spaServer.js
  if (isLocalDev) {
    if (DEV_SERVER === undefined) {
      console.log(
        'Dev server failure: No server defined (define with \x1b[36m%s\x1b[0m). Attempting to exit process.',
        '--server'
      );
      process.exit(1); // Exit with error code 1
    }
  }

  plugins.push(
    createHtmlPlugin({
      inject: {
        data: {
          SERVER: DEV_SERVER,
          isMinify: !isDevMode,
          WEB_VERSION,
          clientSecret,
          clientSecretId,
          isLocalDev,
          deployMode,
        },
      },
    })
  )

  const PORT = 9000;
  const localHostConfig = isDocker
  ? {
    host: '0.0.0.0',
    public: `0.0.0.0:${PORT}`,
    disableHostCheck: true,
    open: false,
    liveReload: true,
    }
  : {
      open: true,
      hot: true,
    };

  return {
    plugins,
    css: {
      devSourcemap: true,
    },
    build: {
      sourcemap: isDevMode,
      cssMinify: !isDevMode,
      minify: isDevMode ? false : 'terser',
      terserOptions: {
        output: {
          comments: false,
        },
        mangle: true,
        toplevel: true,
      }
    },
    server: {
      port: 3000,
      ...(isLocalDev ? localHostConfig : {}),
    },
  }
})
