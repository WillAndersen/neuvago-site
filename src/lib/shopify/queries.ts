export const CART_CREATE_MUTATION = /* GraphQL */ `
  mutation cartCreate($input: CartInput!, $country: CountryCode!, $language: LanguageCode!) @inContext(country: $country, language: $language) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        field
        message
        code
      }
    }
  }
`;
