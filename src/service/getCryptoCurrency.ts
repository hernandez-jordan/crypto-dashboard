import axios from "axios";
import { API_COINS_MARKET } from "../constants";

export default async function getCryptoCurrency(resultsPerPage: string) {
  const url = `${API_COINS_MARKET}vs_currency=usd&order=market_cap_desc&per_page=${resultsPerPage}&page=1&sparkline=false`;
  try {
    const response = await axios(url);
    if (response.status === 200 && response.data) {
      console.log(response.data, "response");
      return response.data;
    }
  } catch (error) {
    console.log(error, "error");
  }
}
