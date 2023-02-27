// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Cookify',
  tagline: 'This React library offers a customizable, easy-to-use solution for managing cookies and GDPR compliance in React.js applications.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cookify.jersyfi.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jersyfi', // Usually your GitHub org/user name.
  projectName: 'cookify-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        /*docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/jersyfi/cookify-docs/tree/main/',
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v2.0',
            },
            '1.0': {
              label: 'v1.0',
              banner: 'unmaintained',
            }
          },
        },*/
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/jersyfi/cookify-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-react',
        path: 'docs-react',
        editUrl: 'https://github.com/jersyfi/cookify-docs/tree/main/',
        routeBasePath: 'docs-react',
        sidebarPath: require.resolve('./docs-react_sidebars.js'),
        lastVersion: 'current',
        versions: {
          current: {
            label: 'v2.0',
            banner: 'none',
          },
          '1.0': {
            label: 'v1.0',
            banner: 'unmaintained',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-js',
        path: 'docs-js',
        editUrl: 'https://github.com/jersyfi/cookify-docs/tree/main/',
        routeBasePath: 'docs-js',
        sidebarPath: require.resolve('./docs-js_sidebars.js'),
        lastVersion: 'current',
        versions: {
          current: {
            label: 'v3.1',
          },
        },
      },
    ],
  ],

  themeConfig:
    ({
      // Replace with your project's social card
      image: 'https://opengraph.githubassets.com/6c51a4f5d86f9960ae2b4c8ad85fc3f53bfc22b91d73beec9cf482f315608f9a/Jersyfi/react-cookify',
      navbar: {
        //hideOnScroll: true,
        title: 'Cookify',
        logo: {
          alt: 'Cookify Logo',
          src: 'img/logo.svg',
        },
        items: [
          /*{
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },*/
          {
            type: 'dropdown',
            label: 'Docs',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'intro',
                docsPluginId: 'docs-react',
                label: 'React',
              },
              {
                type: 'doc',
                docId: 'intro',
                docsPluginId: 'docs-js',
                label: 'Vanilla JS',
              },
            ]
          },
          {
            type: 'html',
            position: 'left',
            value: '<button>Test</button>',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            docsPluginId: 'docs-react',
            //dropdownActiveClassDisabled: true,
            //dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            position: 'right',
            label: 'Test',
          },
          {
            type: 'docsVersionDropdown',
            docsPluginId: 'docs-js',
            //dropdownActiveClassDisabled: true,
            //dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            position: 'right',
            label: 'Test',
          },
          /*{
            type: 'search',
            position: 'right',
          },*/
          {
            href: 'https://github.com/jersyfi/cookify-docs',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
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
                label: 'React',
                to: '/docs-react/intro',
              },
              {
                label: 'Vanilla JS',
                to: '/docs-js/intro',
              },
            ],
          },
          {
            title: 'Frameworks on GitHub',
            items: [
              {
                label: 'Vanilla JS',
                href: 'https://github.com/Jersyfi/cookify',
              },
              {
                label: 'React',
                href: 'https://github.com/Jersyfi/react-cookify',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `
          <div>
              <p style="margin-bottom: 0.5rem; font-size: .875rem; line-height: 1.25rem;">©${new Date().getFullYear()} Jersyfi</p>
              <a href="https://jersyfi.de">
                <img alt="Jersyfi Schriftzug" src="/img/JERSYFI.svg" width="128" height="32" decoding="async" data-nimg="1" loading="lazy" style="height: 2rem"/>
              </a>
          </div>
        `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
