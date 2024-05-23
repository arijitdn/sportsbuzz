import axios from "axios";

export const fetchCurrentMatches = async () => {
  const response = await axios.get(
    `https://api.cricapi.com/v1/currentMatches?apikey=${process.env.CRICKET_API_KEY}&offset=0`
  );

  return response.data;
};
