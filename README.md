## Shopify Storefront + NextJS SSR

Implement Shopify StorefrontAPI with NextJS SSR and Apollo. Styled Components is also added but it's just not usefull to care about on this.
[Apollo Chrome Plugin]: https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm

## Usage
Don't forget to create a .env.local file and add your storefront access token and url in it as follow:

env.local
```
SHOPIFY_URL=https://XXXXXXXXXXXXX.myshopify.com
STOREFRONT_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

## Run The exemple
```
yarn install
yarn run dev
```

On the developer console if you have Apollo Chrome Plugin installed you should see your store graphql schema

