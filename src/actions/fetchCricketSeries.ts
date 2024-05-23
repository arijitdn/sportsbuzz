import axios from "axios";

export const fetchCricketSeries = async (): Promise<string[]> => {
  const response = await axios.get(
    `https://api.cricapi.com/v1/series?apikey=${process.env.CRICKET_API_KEY}&offset=0`
  );

  console.log(response.data);
  return response.data;
};
