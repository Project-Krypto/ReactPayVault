import React from 'react'
import Link from '@docusaurus/Link'
// import YC from '../../static/img/logo-yc.svg';
import Icon from '../ui/iconography/Icon'
import DocLink from '../ui/typography/Link'
import HeroTerminal from './HeroTerminal'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import CTA from './CTA'
// import CTA from '../../Home/CTA';
// import HeroIcon from '../HeroIcon';
// import HeroTerminal from './HeroTerminal';

// eslint-disable-next-line import/no-extraneous-dependencies
const { version } = require('../../../package.json') as { version: string }

export default function Hero() {
  return (
    <div className="star-pattern bg-gradient-to-b from-slate-900 to-slate-600">
      <div className="mx-auto flex max-w-7xl flex-col py-10 px-4 pb-6 sm:py-12 sm:px-6 md:flex-row md:py-14 lg:py-16 lg:px-8 xl:py-20">
        <div className="text-center md:w-6/12 md:text-left">
          {/* <HeroIcon
						icon={<LogoIcon height={75} style={{ marginTop: 1 }} />}
						text={<TextVector height={51} style={{ top: 19 }} className="absolute" />}
					/> */}

          <p className="mt-1 mb-0 text-base text-white sm:mx-auto sm:max-w-xl sm:text-lg md:mx-0 md:pr-4 md:text-xl">
            A task runner and monorepo management tool for the web ecosystem, written in Rust.
          </p>

          <p className="mt-1 text-sm text-white opacity-50 md:pr-4 md:text-base">
            Supports JavaScript, TypeScript, Rust, Go, Ruby,{' '}
            <DocLink href="/docs/intro" variant="muted">
              and more
            </DocLink>
            .
          </p>

          <div className="mt-3 flex justify-center md:justify-start">
            <div>
              <CTA href="/docs/install">
                Get started
                <Icon icon={faRocket} className="ml-1 inline-block md:ml-2" style={{ maxWidth: 18 }} />
              </CTA>
            </div>

            <div className="ml-1 sm:ml-2 lg:ml-3">
              <Link
                href="https://www.npmjs.com/package/@payvault"
                className="group flex w-full items-center justify-center rounded-md bg-white/5 px-2 py-1 text-base font-bold text-white transition-transform hover:scale-110 hover:text-white sm:px-3 sm:py-2 md:text-lg"
              >
                <span className="opacity-50">v</span>
                {version}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-grow-0 flex-col md:mt-0 md:w-6/12">
          <HeroTerminal />
        </div>
      </div>
    </div>
  )
}
