// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

// eslint-disable-next-line n/no-unpublished-require
const packageJson = require('../package.json')
const prismTheme = require('./prism.config')
const { RepoUrl, RepoName, OrgName } = require('./constants')

const social = [
  {
    label: 'GitHub',
    to: RepoUrl,
  },
  {
    label: 'Discord',
    to: 'https://discord.gg/payvault',
  },
  {
    label: 'Twitter',
    to: 'https://twitter.com/payvault',
  },
]

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: packageJson.name,
  // @ts-ignore
  tagline: packageJson.description,
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // @ts-ignore
  url: packageJson.homepage,
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: OrgName, // Usually your GitHub org/user name.
  projectName: RepoName, // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      'docusaurus-plugin-typedoc',

      // Plugin / TypeDoc options
      {
        out: 'sdk-docs',
        sidebar: {
          categoryLabel: 'TS/JS SDK',
          collapsed: false,
          position: 2,
          fullNames: true,
        },
        excludeExternals: true,
        entryPoints: ['../src/lib/index.tsx'],
        tsconfig: '../tsconfig.json',
        plugin: ['./plugin/typedoc-plugin-class-fns-to-methods.cjs'],
        readme: 'none',
        excludePrivate: true,
      },
    ],

    function tailwind() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // eslint-disable-next-line import/no-extraneous-dependencies
          postcssOptions.plugins.push(require('tailwindcss'))

          return postcssOptions
        },
      }
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `${RepoUrl}/website/docs`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `${RepoUrl}/website/blog`,
        },
        theme: {
          customCss: [require.resolve('./src/css/theme.css'), require.resolve('./src/css/custom.css')],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        apiKey: '85bc4947855dcc4a3cce9e5353ad8d5f',
        appId: 'QV1NZLXEBW',
        indexName: 'payvault',
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'PayVault Docs Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: RepoUrl,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/introduction/install',
              },
            ],
          },
          {
            title: 'Support',
            items: social,
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: RepoUrl,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc.`,
      },
      prism: {
        theme: prismTheme,
        darkTheme: prismTheme,
      },
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
      // clientModules: [require.resolve('./plugin/dark-mode-syncer.ts')],
    }),
}

module.exports = config
