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
      //'@docusaurus/plugin-content-docs',
      './package/plugin-content-docs',
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
      //'@docusaurus/plugin-content-docs',
      './package/plugin-content-docs',
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

  /*plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-react',
        path: 'multidocs/react/docs',
        versionPath: 'multidocs/react',
        versionPrefix: false,
        editUrl: 'https://github.com/jersyfi/cookify-docs/tree/main/',
        routeBasePath: 'docs-react',
        sidebarPath: require.resolve('./multidocs/react/sidebars.js'),
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
      './package/plugin-content-multidocs',
      {
        id: 'docs-js',
        path: 'multidocs/vanillajs/docs',
        versionPath: 'multidocs/vanillajs',
        versionPrefix: false,
        editUrl: 'https://github.com/jersyfi/cookify-docs/tree/main/',
        routeBasePath: 'docs-js',
        sidebarPath: require.resolve('./multidocs/vanillajs/sidebars.js'),
        lastVersion: 'current',
        versions: {
          current: {
            label: 'v3.1',
          },
        },
      },
    ],
  ],*/

  themeConfig:
    ({
      // Replace with your project's social card
      image: 'https://opengraph.githubassets.com/6c51a4f5d86f9960ae2b4c8ad85fc3f53bfc22b91d73beec9cf482f315608f9a/Jersyfi/react-cookify',
      //metadata: [{name: 'twitter:card', content: 'summary'}],
      announcementBar: {
        id: 'under_construction',
        content:
          '🚧 This documentation is still under construction 🏗️',
        backgroundColor: 'repeating-linear-gradient(35deg,var(#000000),var(#000000) 20px,var(#ffffff) 10px,var(#ffffff) 40px)',
        textColor: '#091E42',
        isCloseable: false,
      },
      navbar: {
        title: 'Cookify',
        logo: {
          alt: 'Cookify Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Docs',
            position: 'left',
            items: [
              {
                type: 'html',
                value: `
                  <div class="dropdown-docs">
                    <div class="box">
                      <h3>Framework</h3>
                      <div class="items-list">
                        <div class="item">
                          <a href="/docs-js/intro">
                            <img alt="Vanilla JS" src="/img/frameworks/vanilla-js.svg" width="24" height="24" decoding="async" data-nimg="1" loading="lazy"/>
                            <p>Vanilla JS</p>
                            <span>v3.1</span>
                          </a>
                        </div>
                        <div class="item">
                          <a href="/docs-react/intro">
                            <img alt="React" src="/img/frameworks/react.svg" width="24" height="24" decoding="async" data-nimg="1" loading="lazy"/>
                            <p>React</p>
                            <span>v2.0</span>
                          </a>
                        </div>
                        <div class="item planned">
                            <img alt="Vue.js" src="/img/frameworks/vue-js.svg" width="24" height="24" decoding="async" data-nimg="1" loading="lazy"/>
                            <p>Vue.js</p>
                            <span>Planned 🚧</span>
                        </div>
                        <div class="item planned">
                            <img alt="Svelte" src="/img/frameworks/svelte.svg" width="24" height="24" decoding="async" data-nimg="1" loading="lazy"/>
                            <p>Svelte</p>
                            <span>Planned 🚧</span>
                        </div>
                        <div class="item planned">
                            <img alt="Laravel" src="/img/frameworks/laravel.svg" width="24" height="24" decoding="async" data-nimg="1" loading="lazy"/>
                            <p>Laravel</p>
                            <span>Planned 🚧</span>
                        </div>
                      </div>
                    </div>
                    
                    <div class="box">
                      <h3>Core</h3>
                      <div class="item planned">
                        <img alt="Vanilla JS" src="/img/frameworks/vanilla-js.svg" width="24" height="24" decoding="async" data-nimg="1" loading="lazy"/>
                        <p>Vanilla JS</p>
                        <span>Planned 🚧</span>
                      </div>
                    </div>
                  </div>
                `,
              },
            ]
          },
          /*{
            type: 'localeDropdown',
            position: 'right',
          },*/
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
