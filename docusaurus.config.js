// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
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
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jersyfi/cookify-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jersyfi/cookify-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'https://opengraph.githubassets.com/6c51a4f5d86f9960ae2b4c8ad85fc3f53bfc22b91d73beec9cf482f315608f9a/Jersyfi/react-cookify',
      navbar: {
        title: 'Cookify',
        logo: {
          alt: 'Cookify Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          /*{
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },*/
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/jersyfi/cookify-docs',
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
        copyright: `
          <div>
              <p style="margin-bottom: 0.5rem; font-size: .875rem; line-height: 1.25rem;">©${new Date().getFullYear()} Jersyfi</p>
              <a href="https://jersyfi.de">
                <img alt="Jersyfi Schriftzug" src="/img/JERSYFI.svg" width="128" height="32" decoding="async" data-nimg="1" loading="lazy" style="{"height: 2rem"/>
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
