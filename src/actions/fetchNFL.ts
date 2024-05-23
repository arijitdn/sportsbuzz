import axios from "axios";

export const fetchNFL = async (season: any): Promise<any[]> => {
  const response = await axios.get(
    `https://api.sportsdata.io/v3/nfl/scores/json/SchedulesBasic/${season}?key=${process.env.FOOTBALL_API_KEY}`
  );

  return response.data;
};
