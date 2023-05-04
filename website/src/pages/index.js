import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Button from '@site/src/ui/Button'

import HomepageFeatures from '@site/src/components/HomepageFeatures'

import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg text-white" to="/docs/intro">
            {/* <Link
            className={clsx(
              'bg-blurple-400 flex items-center justify-center rounded-md border border-transparent px-2 text-base font-bold text-white dark:bg-purple-600',
              'hover:bg-blurple-500 cursor-pointer hover:text-white dark:hover:bg-purple-500',
              'py-2',
            )}
            to="/docs/intro"
          > */}
            <span className="text-white">Docusaurus Tutorial - 5min ⏱️ </span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
