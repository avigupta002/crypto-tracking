// dummy.js

export const CURRENCIES = {
  usd: { name: "usd", symbol: "$" },
  eur: { name: "eur", symbol: "€" },
  inr: { name: "inr", symbol: "₹" },
};

// Fetch coins based on currency + page
export const fetchCoins = async (currency = "usd", page = 1) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets` +
      `?vs_currency=${currency}` +
      `&order=market_cap_desc` +
      `&per_page=10` +
      `&page=${page}` +
      `&sparkline=false` +
      `&price_change_percentage=24h`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch coins");
  }

  return res.json();
};

// Price direction helper
export const getPriceDirection = (percentage) => {
  if (percentage > 0) {
    return { icon: "▲", color: "text-green-400" };
  }
  if (percentage < 0) {
    return { icon: "▼", color: "text-red-400" };
  }
  return { icon: "—", color: "text-gray-400" };
};
