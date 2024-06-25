// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Polkadot Hungary WIKI',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/polkadotHU.png',

  // Set the production url of your site here
  url: 'https://wiki.polkadothungary.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',


  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'hu',
    locales: ['hu'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',        
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Polkadot Hungary wiki',
        logo: {
          alt: 'Polkadot Hungary logo',
          src: 'img/polkadotHU.png',
          href:'docs/intro',
        },
        items: [
          {
            to: 'https://polkadothungary.net', 
            label: 'Vissza a blogra', 
            position: 'left', 
            target: '_self', 
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Polkadot Hungary közösség',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/polkadothungary',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/PolkadotHungary',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Polkadot Hungary. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
