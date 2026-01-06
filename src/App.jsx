import React, { useEffect, useState } from "react";
import { fetchCoins, CURRENCIES, getPriceDirection } from "./dummy";

import { useDebounce } from "./hooks/useDebounce";
import { useFavorites } from "./hooks/useFavorites";
import { useTheme } from "./hooks/useTheme";

import SearchBar from "./components/AreaChartComponents/SearchBar";
import ThemeToggle from "./components/AreaChartComponents/ThemeToggle";
import Pagination from "./components/AreaChartComponents/Pagination";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // currency state
  const [currentCurrency, setCurrentCurrency] = useState(CURRENCIES.usd);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

  // custom hooks
  const debouncedSearch = useDebounce(search, 500);
  const { toggleFavorite, isFavorite } = useFavorites();
  const { theme, toggleTheme } = useTheme();

  // fetch coins
  const loadCoins = async () => {
    setLoading(true);
    try {
      const data = await fetchCoins(currentCurrency.name, page);
      setCoins(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCoins();
  }, [currentCurrency, page]);


  useEffect(() => {
    const interval = setInterval(loadCoins, 30000);
    return () => clearInterval(interval);
  }, [currentCurrency, page]);

  // search filter
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-300 ${theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900"
        }`}
    >
      <div
        className={`flex justify-between items-center p-4 rounded shadow ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"
          }`}
      >        
      <h1 className="text-2xl font-bold">CryptoTracker</h1>

        <div className="flex items-center gap-5">
          <div className="relative">
            <button
              onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
              className="px-5 py-2 rounded bg-gray-200 dark:bg-gray-700"
            >
             {currentCurrency.name.toLocaleUpperCase()} ({currentCurrency.symbol})
            </button>

            {isCurrencyOpen && (
              <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow rounded">
                {Object.keys(CURRENCIES).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setCurrentCurrency(CURRENCIES[key]);
                      setIsCurrencyOpen(false);
                      setPage(1);
                    }}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {key.toUpperCase()} ({CURRENCIES[key].symbol})
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>

      {/* SEARCH */}
      <SearchBar value={search} onChange={setSearch} />

      {/* CONTENT */}
      {loading ? (
        <p className="mt-6 text-emerald-500">Loading market data...</p>
      ) : filteredCoins.length === 0 ? (
        <p className="mt-6">No coins found</p>
      ) : (
        <div className="space-y-3 mt-4">
          {filteredCoins.map((coin) => {
            const { icon, color } = getPriceDirection(
              coin.price_change_percentage_24h
            );

            return (
              <div
                key={coin.id}
                className="flex justify-between items-center p-4 rounded bg-white dark:bg-gray-800 shadow"
              >
                <div className="flex items-center gap-3">
                  <img src={coin.image} alt={coin.name} className="w-8 h-8" />
                  <span className="font-semibold">{coin.name}</span>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="font-medium">
                      {currentCurrency.symbol}
                      {coin.current_price.toLocaleString()}
                    </p>
                    <p className={`text-sm ${color}`}>
                      {icon}{" "}
                      {coin.price_change_percentage_24h?.toFixed(2)}%
                    </p>
                  </div>

                  <button
                    onClick={() => toggleFavorite(coin)}
                    className="text-xl"
                  >
                    {isFavorite(coin.id) ? "⭐" : "☆"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* PAGINATION */}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default App;
