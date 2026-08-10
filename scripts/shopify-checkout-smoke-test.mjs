const baseUrl = (
  process.env.CHECKOUT_BASE_URL ||
  process.env.BASE_URL ||
  "http://localhost:3000"
).replace(/\/$/, "");

const expectedMode =
  process.env.EXPECT_CHECKOUT ||
  (baseUrl.includes("localhost") ? "enabled" : "disabled");

const endpoint = `${baseUrl}/api/shopify/cart`;

console.log("Shopify checkout smoke test");
console.log(`Endpoint: ${endpoint}`);
console.log(`Expected mode: ${expectedMode}`);
console.log("");

let response;

try {
  response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      quantity: 1,
      locale: "no",
    }),
  });
} catch (error) {
  console.error("Request failed.");
  console.error(error);
  process.exit(1);
}

const text = await response.text();

let payload = null;

try {
  payload = JSON.parse(text);
} catch {
  payload = null;
}

const checkoutHost =
  payload?.checkoutUrl && typeof payload.checkoutUrl === "string"
    ? new URL(payload.checkoutUrl).host
    : null;

const summary = {
  status: response.status,
  ok: Boolean(payload?.ok),
  hasCartId: Boolean(payload?.cartId),
  hasCheckoutUrl: Boolean(payload?.checkoutUrl),
  checkoutHost,
  error: payload?.error || null,
};

console.log(summary);

if (expectedMode === "enabled") {
  if (
    response.status !== 200 ||
    !payload?.ok ||
    !payload?.cartId ||
    !payload?.checkoutUrl
  ) {
    console.error("");
    console.error("Expected checkout to be enabled, but it did not return a checkout URL.");
    process.exit(1);
  }

  console.log("");
  console.log("✅ Checkout enabled smoke test passed.");
  process.exit(0);
}

if (expectedMode === "disabled") {
  if (response.status !== 503 || payload?.ok !== false) {
    console.error("");
    console.error("Expected checkout to be disabled, but it was not blocked.");
    process.exit(1);
  }

  console.log("");
  console.log("✅ Checkout disabled smoke test passed.");
  process.exit(0);
}

console.log("");
console.log("No strict expectation set. Use EXPECT_CHECKOUT=enabled or EXPECT_CHECKOUT=disabled.");
