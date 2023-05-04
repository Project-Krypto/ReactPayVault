---
sidebar_position: 1
---

# Quickstart

A quickstart guide to integrate PayVault Checkout into your application. In the following guide we're going to use Next.js as the frontend framework as it supports API routes by default.

:::info API Keys
:lock: API Keys would be needed to integrate Checkout, Generate yours [here](https://payvault.com)
:::
:::tip Source Code
:zap: Full source code for the demo app available [here](https://github.com/payvault/checkout-demo-example.git)
:::

## Setting up the application

Create a new Next.js application using `create-next-app`. You can remove the `--ts` flag if you don't want to use TypeScript.

```bash
npx create-next-app checkout --ts
```

Installing the required package:

- `@payvault/checkout-sdk` - Node.js SDK for interacting with PayVault Checkout's API

```bash
npm install @payvault/checkout-sdk
```

## Creating a Next.js API route

As creating a checkout session requires the developer to pass his private API key we're going to create a Next.js API route which would handling the logic for creating a session, so that the private API keys don't get exposed on the client-side.

Create a new file named `create-session.ts` under the `pages/api` folder and initialize the Node SDK. If you want to collect the end-user's shipping address, change the `collect_shipping_address` parameter to `true`

```ts
import { PayVault } from '@payvault/checkout-sdk'

const sdk = new PayVault({
  api_keys: {
    private_api_key: process.env.PAYVAULT_PRIVATE_API_KEY!,
    public_api_key: process.env.PAYVAULT_PUBLIC_API_KEY!,
  },
  network: 'mainnet', // use 'mainnet' for prod and 'devnet' for dev environment
  config: {
    collect_shipping_address: false,
  },
})
```

Create a function called `handler` which would contain the logic for creating a checkout session. The `STATIC_URL` environment variable is the deployed URL of the Next.js application

```ts
const handler = async (req, res) => {
  try {
    const response = await sdk.session.create({
      success_url: `${process.env.STATIC_URL}/success`,
      cancel_url: `${process.env.STATIC_URL}/cancel`,
      // additional tokens you can pass, SOL and USDC are default
      tokens: ['dust', 'samo'],
      items: [
        {
          name: 'Solana Shades',
          // price in USD
          price: 0.1,
          image: 'https://imgur.com/M0l5SDh.png',
          quantity: 1,
          // optional product size parameter
          size: '9',
        },
      ],
      shipping_fees: 0.5,
    })

    return res.status(200).json(response)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error: 'Error creating session',
    })
  }
}

export default handler
```

## Creating success and cancel pages

If the payment is completed successfully, the user would be redirected to the success URL. If the user chooses to go back, he would be redirected to the cancel URL.

Create a new file named `success.tsx` under the `pages` folder

```tsx
import type { NextPage } from 'next'

const Success: NextPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <h1>Your payment is successful!</h1>
    </div>
  )
}

export default Success
```

Create a new file named `cancel.tsx` under the `pages` folder

```tsx
import type { NextPage } from 'next'

const Cancel: NextPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <h1>Forgot to add something to your cart? Shop around then come back to pay!</h1>
    </div>
  )
}

export default Cancel
```

## Integrating the Payment button

Go ahead and open the `index.tsx` file under the `pages` folder. Create a new button and pass the function that generates a new session by calling the API route (/api/checkout) you have created in the previous step:

```tsx
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  const createSession = async () => {
    const response = await fetch('/api/create-session', {
      method: 'POST',
    })
    const data = await response.json()

    router.push(data.payment_url)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <img src="https://imgur.com/M0l5SDh.png" alt="solana shades" />
      <p>Buy your Solana Shades</p>
      <button onClick={createSession}>Checkout</button>
    </div>
  )
}

export default Home
```

## Congratulations! :partying_face:

Your base app is ready to accept Solana Payments with Checkout SDK in mins! Make sure to test your website and contact us at [Discord](https://discord.gg/VGjPXWUHGT) if you face any issues! Full source code available [here.](https://github.com/payvault/checkout-demo-example.git)

## Next steps

:::info [Webhooks](../features/webhooks)
🔥
Set up webhooks to detect and fulfill new payments and run post-checkout events such as saving the transaction details to a database, sending custom emails, and others
:::
:::info [Discounts](../features/discounts)
🎉
Reduce the amount charged to a customer by discounting their total due amount by a certain %, based on their NFT assets ownership
:::
:::info [Demo e-commerce app](https://github.com/payvault/checkout-ecom-example)
🎀
Access this demo e-commerce website accepting Solana payments with Checkout SDK and refer it to create your own more complex applications accepting crypto payments
:::
