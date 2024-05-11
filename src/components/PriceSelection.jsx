import { PRICE_SELLECTION } from "./constants";
import { useDispatch } from "react-redux";
import { sellectCurrency } from "../store/priceConversion";

const PriceSelection = () => {
  const dispatch = useDispatch();

  const handleLanguageChange = (e) => {
    dispatch(sellectCurrency(e.target.value));
  };

  return (
    <>
      <select
        className="p-2  h-8 w-18 text-sm bg-gray-500 font-bold text-white rounded-md "
        onChange={handleLanguageChange}
      >
        {PRICE_SELLECTION.map((lang) => (
          <option key={lang.identifier} value={lang.identifier}>
            {lang.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default PriceSelection;
