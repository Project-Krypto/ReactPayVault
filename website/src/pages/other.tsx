import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
// import {
// 	faBolt,
// 	faDiagramProject,
// 	faDiagramSankey,
// 	faLeaf,
// 	faSolarSystem,
// 	faToolbox,
// } from '@fortawesome/pro-duotone-svg-icons';
// import ProductSection from '@site/src/components/Home/ProductSection';
// import UsedBy from '@site/src/components/Home/UsedBy';
// import VaultbaseScreenshots from '@site/src/components/Products/Vaultbase/Screenshots';
// import Link from '@site/src/ui/typography/Link';
import Layout from '@theme/Layout'
import Hero from '../components/Hero'
// import TextVector from '../../static/brand/payvault/text-vector.svg';

export default function Home() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      title={siteConfig.tagline}
      description="From build to deploy, payvault is a better way to manage codebases, save developer time, and boost your business."
    >
      <div className="bg-gradient-to-b from-slate-900 to-slate-600">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center py-10 px-4 pb-6 sm:py-12 sm:px-6 md:py-14 lg:py-16 lg:px-8 xl:py-20">
          <h1 className="text-white">{/* <TextVector height={65} /> */}</h1>

          <h2 className="mb-3 text-center text-3xl font-medium text-white sm:text-4xl md:text-5xl">
            New era of productivity tooling
          </h2>

          <p className="mm-0 text-md px-4 text-center text-white opacity-60 sm:text-lg md:max-w-3xl md:text-xl">
            From build to deploy, payvault is a better way to manage codebases, save developer time, and boost your
            business.
          </p>
        </div>
      </div>
      <Hero />

      <main className="via-blurple-600 bg-gradient-to-b from-slate-600 to-white">
        {/* <ProductSection
					id="vault"
					color="text-blurple-400"
					suptitle="A system for a solid foundation"
					title="Supercharge your codebase"
					logo={<img src="/brand/vault/icon.svg" height={75} className="block" />}
					description={
						<>
							For repositories with multiple projects, any number of languages, and team members
							constantly pushing changes,{' '}
							<Link href="/vault" size="lg">
								vault
							</Link>{' '}
							will help simplify the experience of working in and maintaining a complex monorepo.
						</>
					}
					cta={{
						children: 'Learn more about vault',
						color: 'bg-blurple-400',
						href: '/vault',
					}}
					items={[
						{
							description:
								'Never run the same task twice. With our smart hashing, robust caching, and efficient task execution, vault will avoid unnecessary work.',
							icon: faDiagramSankey,
							title: 'Efficient task orchestation',
						},
						{
							description:
								'Neatly organize your codebase, declare ownership information, and simplify project discovery.',
							icon: faDiagramProject,
							title: 'Better project organization',
						},
						{
							description: (
								<>
									With our <Link href="#proto">integrated toolchain</Link>, development environments
									will be spun up in minutes, ensuring the exact tools and versions are used across
									developers and machines.
								</>
							),
							icon: faToolbox,
							title: 'Integrated development environment',
						},
					]}
				/>

				<ProductSection
					reversed
					stretched
					id="vaultbase"
					color="text-teal-700"
					suptitle="A service to expand to the cloud"
					title="Accelerate your pipelines"
					logo={<img src="/brand/vaultbase/icon.svg" height={75} className="block" />}
					description={
						<>
							With our hosted service{' '}
							<Link href="/vault" size="lg">
								vaultbase
							</Link>
							, easily cache build artifacts to reduce CI times, gain insight into your CI
							pipelines, track the health of your repositories, and overall cut costs.
						</>
					}
					cta={{
						children: 'Learn more about vaultbase',
						color: 'bg-teal-600',
						href: '/vaultbase',
					}}
				>
					<div className="relative sm:pb-8 h-full">
						<VaultbaseScreenshots />
					</div>
				</ProductSection>

				<ProductSection
					stretched
					id="proto"
					color="text-pink-600"
					suptitle="A toolchain for the modern era"
					title="Automate your environments"
					logo={<img src="/brand/proto/icon.svg" height={75} className="block" />}
					description={
						<>
							Remove the hassle of managing and enforcing specific versions of programming languages
							across teams or projects. With{' '}
							<Link href="/vault" size="lg">
								proto
							</Link>
							, our modern toolchain manager, this entire workflow is automated away through a
							single tool.
						</>
					}
					cta={{
						children: 'Learn more about proto',
						color: 'bg-pink-600',
						href: '/proto',
					}}
					items={[
						{
							description:
								'Manage versions of multiple languages and dependency managers through a single interface. A single source of truth.',
							icon: faSolarSystem,
							title: 'Multi-language support',
						},

						{
							description:
								"Detects and infers versions and semantics from a language's ecosystem for maximum compatibility and interoperability.",
							icon: faLeaf,
							title: 'Contextual version detection',
						},
						{
							description:
								'Download, install, and run tools with lightspeed, thanks to our Rust based foundation.',
							icon: faBolt,
							title: 'Lightspeed interface',
						},
					]}
				/> */}
      </main>

      {/* <UsedBy /> */}
    </Layout>
  )
}
