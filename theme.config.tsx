import React, { use } from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import  footer  from './components/ui/footer'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span><strong>superiorsd10</strong></span>,
  darkMode: true,
  project: {
    link: 'https://github.com/superiorsd10/personal-site',
  },
  search: {
    placeholder: "Search..."
  },
  head: () => {
    const router = useRouter();

    const currentPageTitle = router.pathname === '/' ? 'superiorsd10' : router.pathname.replace('/', '');
    return (
      <>
        <title>{currentPageTitle}</title>
      </>
    );
  },
  footer: {
    text: footer,
  },
  navigation: {
    prev: false,
    next: false
  }
}

export default config
