---
sidebar_position: 2
---

# Terminology

## Getting Started

### Operations

blah blah

### Checkout Session

A checkout session can be created from a cart of items that the user has built out. Checkout cart must have one or more items of varying quantity.  
When a checkout session is created, a unique **Session Id** is generated. This **Session Id** can be used in two ways:

- Navigate to the dedicated checkout site: `https://payvault.com/checkout/<Session Id>` and complete the payment/checkout there
- Use the Modal/React component to display a Modal on your site to checkout in.

Total cost of the cart is determined at Checkout creation time, and is defined in the stable coin **USDC**. Customers can use our integration to make USDC payments on any supported chain

:::tip Direct Solana/Ethereum Payments pending

After release we will be working on direct payments in Ethereum and Solana. For now, **USDC** payments are the primary approach.

:::

### API Key

An API Key is a unique identifier that can be generated in the Dashboard for your store.  
They are used to authenticate and authorize access to the services provided by the API. There are two types of API Keys: "Admin" and "Checkout". Each type serves a specific purpose and grants different levels of access to the API resources.

#### Two Types of API Key

- **[Checkout Key](https://example.com/)**: **Checkout Keys** have slightly more read privileges than a normal user, and they allow you to create sessions at will. They are meant to be used on the **Frontend**, so that you can create simple checkout sessions.
- **[Admin Key](https://example.com/)**: An **Admin Key** has more privileges than a Checkout key and is designed to be used in the **Backend** or in scripts, it **_should not be exposed_** to users, as this will be a vulnerability to your store.  
   API GET/Read requests will provide more access than a Checkout key, developers can:
  - Apply discounts
  - Perform CRUD operations on Products and Stores
  - More to come.

:::danger Do not expose your Admin Key to users

This action is dangerous

:::

---
