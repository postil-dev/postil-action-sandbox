interface CartItem {
  price: number;
  qty: number;
  discountPct?: number;
}

// Applies a percentage discount to a single item's line total.
function applyDiscount(item: CartItem): number {
  const lineTotal = item.price * item.qty;
  if (!item.discountPct) {
    return lineTotal;
  }
  // bug: discountPct is a whole-number percentage (e.g. 20 for 20%), but this
  // treats it as already-fractional, so a 20% discount only takes off 0.2%.
  return lineTotal - lineTotal * item.discountPct;
}

function cartTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + applyDiscount(item), 0);
}

export { CartItem, applyDiscount, cartTotal };
