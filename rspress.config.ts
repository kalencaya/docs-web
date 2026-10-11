import { defineConfig } from '@rspress/core';
import { pluginApiDocgen } from '@rspress/plugin-api-docgen';
import { pluginPreview } from '@rspress/plugin-preview';
import * as path from 'node:path';
import { pluginWorkspaceDev } from 'rsbuild-plugin-workspace-dev';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  base: '/docs-web/',
  title: 'Docs Web',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  lang: 'zh',
  locales: [
    {
      lang: 'en',
      label: 'English'
    },
    {
      lang: 'zh',
      label: '简体中文'
    },
  ],
  themeConfig: {
    lastUpdated: true,
    editLink: {
      docRepoBaseUrl:
        'https://github.com/kalencaya/docs-web/docs',
      text: '📝 在 GitHub 上编辑此页',
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'github-stars',
        content: 'https://github.com/kalencaya/docs-web',
      },
      { icon: 'wechat', mode: 'img', content: '/wechat.png' },
    ],
  },
  builderConfig: {
    plugins: [
      pluginWorkspaceDev({
        startCurrent: true,
      }),
    ],
  },
  plugins: [
    pluginApiDocgen({
      entries: {
        Button: './src/Button.tsx',
      },
      apiParseTool: 'react-docgen-typescript',
    }),
    pluginPreview(),
  ],
  markdown: {
    defaultWrapCode: true,
    showLineNumbers: true,
    link: {
      checkDeadLinks: false,
    },
  },
  llms: true,
});
