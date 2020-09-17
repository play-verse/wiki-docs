module.exports = {
  title: 'Wiki Playverse',
  tagline: '',
  url: 'https://wiki.playverse.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Playverse', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
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
      copyright: `Copyright © ${new Date().getFullYear()} Playverse, Inc. Powered by Docusaurus Facebook.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/play-verse/docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/play-verse/docs/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
