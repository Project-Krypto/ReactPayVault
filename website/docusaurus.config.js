// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

// eslint-disable-next-line n/no-unpublished-require
const packageJson = require('../package.json')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: packageJson.name,
  // @ts-ignore
  tagline: packageJson.description,
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // @ts-ignore
  url: packageJson.homepage,

  // url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ProjectKrypto', // Usually your GitHub org/user name.
  projectName: 'ReactPayVault', // Usually your repo name.

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
          categoryLabel: 'SDK Docs',
          collapsed: false,
          position: 0,
          fullNames: true,
        },
        excludeExternals: true,
        entryPoints: ['../src/lib/index.ts'],
        tsconfig: '../tsconfig.json',
        plugin: ['./plugin/typedoc-plugin-class-fns-to-methods.cjs'],
        readme: 'none',
        excludePrivate: true,

        // externalSymbolLinkMappings: {
        //   typescript: {
        //     Promise:
        //       'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
        //     URL: 'https://developer.mozilla.org/en-US/docs/Web/API/URL',
        //   },
        //   domhandler: {
        //     Document: 'https://domhandler.js.org/classes/Document.html',
        //     Element: 'https://domhandler.js.org/classes/Element.html',
        //     Node: 'https://domhandler.js.org/classes/Node.html',

        //     AnyNode: 'https://domhandler.js.org/types/AnyNode.html',
        //     ChildNode: 'https://domhandler.js.org/types/ChildNode.html',
        //     ParentNode: 'https://domhandler.js.org/types/ParentNode.html',

        //     DomHandlerOptions:
        //       'https://domhandler.js.org/interfaces/DomHandlerOptions.html',
        //   },
        //   parse5: {
        //     ParserOptions:
        //       'https://parse5.js.org/interfaces/parse5.ParserOptions.html',
        //   },
        // },
      },
    ],
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
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    // [
    //   'docusaurus-plugin-typedoc-api',
    //   {
    //     projectRoot: `${__dirname}/..`,
    //     changelogs: true,
    //     readmes: true,
    //     // sortPackages: (a, b) => {
    //     //     return packagesOrder.indexOf(a.packageName) - packagesOrder.indexOf(b.packageName);
    //     // },
    //     packages: [{ path: `src` }],
    //     typedocOptions: {
    //       excludeExternals: false,
    //     },
    //   },
    // ],
    // [
    //   'docusaurus-plugin-typedoc',

    //   // Plugin / TypeDoc options
    //   {
    //     entryPoints: ['../src/index.ts'],
    //     tsconfig: '../tsconfig.json',
    //   },
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/facebook/docusaurus',
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
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
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
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
