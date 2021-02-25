module.exports = {
  title: 'Wiki Playverse',
  tagline: '',
  url: 'https://wiki.playverse.org',
  baseUrl: '/',
  onBrokenLinks: 'log',
  favicon: 'img/logo.png',
  organizationName: 'play-verse', // Usually your GitHub org/user name.
  projectName: 'wiki-playverse', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Wiki Playverse',
      logo: {
        alt: 'Wiki Playverse',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://forum.playverse.org/',
          label: 'Forum',
          position: 'left',
        },
        {
          href: 'https://github.com/play-verse/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/playverse.community/',
            },
            {
              label: 'Discord',
              href: 'https://www.playverse.org/discord',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/pv.community',
            },
          ],
        },
      ],
      copyright: `Copyright © 2020 - ${new Date().getFullYear()} Playverse, Inc. Powered by Docusaurus Facebook.`,
    },
  },
  plugins: [require.resolve('docusaurus-lunr-search')],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/play-verse/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
