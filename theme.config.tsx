import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import footer from './components/ui/footer'

const config: DocsThemeConfig = {
  logo: <span><strong>superiorsd10</strong></span>,
  darkMode: true,
  project: {
    link: 'https://github.com/superiorsd10/personal-site',
  },
  search: {
    placeholder: "Search..."
  },
  footer: {
    text: footer,
  },
}

export default config
