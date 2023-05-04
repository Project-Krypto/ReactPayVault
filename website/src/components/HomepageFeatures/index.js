import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const SupportedChains = ['Algorand', 'Avalanche', 'Ethereum', 'Flow', 'Hedera', 'Solana', 'Stellar', 'TRON']

const FeatureList = [
  {
    title: 'Store Management Dashboard',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Elevate your e-commerce experience with our powerful Store Management Dashboard! Take full control of your
        online store and effortlessly showcase your products to customers. Our user-friendly dashboard makes it easy to
        create, manage, and track your products, ensuring you stay ahead in the competitive e-commerce landscape.
      </>
    ),
  },
  {
    title: 'Easy to Build. Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Provides consistent interface for end users to use Crypto to purchase items, nearly all wallet connectors
        supported on available chains. <br />
        Typescript SDK is provided for developers to easily integrate with our service. Both simplistic and advanced
        access patterns are available depending on your usecase.
      </>
    ),
  },
  {
    title: 'Pay for Products using over 8 Different Chains',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Currently we support USDC Payments on 8 different Chains, and plan to support Native Solana/Ethereum Payments
        after release. <br />(
        {SupportedChains.map((chain) => (
          <>
            <code>{chain}</code>
            {', '}
          </>
        ))}{' '}
        )
      </>
    ),
  },
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
