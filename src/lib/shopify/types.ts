export type ShopifyGraphQLError = {
  message: string;
  extensions?: Record<string, unknown>;
};

export type ShopifyUserError = {
  field?: string[] | null;
  message: string;
  code?: string | null;
};

export type ShopifyCart = {
  id: string;
  checkoutUrl: string;
};

export type CartCreateResponse = {
  cartCreate: {
    cart: ShopifyCart | null;
    userErrors: ShopifyUserError[];
  };
};

export type CreateNeuvagoCartInput = {
  quantity?: number;
  locale?: "en" | "no";
};

export type CreateNeuvagoCartResult = {
  cartId: string;
  checkoutUrl: string;
};

export class ShopifyError extends Error {
  status: number;
  code?: string;
  details?: unknown;

  constructor(
    message: string,
    options: {
      status?: number;
      code?: string;
      details?: unknown;
    } = {},
  ) {
    super(message);
    this.name = "ShopifyError";
    this.status = options.status ?? 500;
    this.code = options.code;
    this.details = options.details;
  }
}
