import type { Media } from "../../types/Media";
import { api } from "../axios/axios";
import type { TrendingItemResponse, TrendingResponse } from "./types/TrendingReponse";

const trendingMapper = (item: TrendingItemResponse): Media => {
  return {
    id: item.id.toString(),
    title: item.title,
    poster: item.poster_path ? `${import.meta.env.VITE_API_IMAGE_BASE_URL}${item.poster_path}` : "",
    first_air_date: item.first_air_date
  };
};

export const getTrending = async (): Promise<Media[]> => {
  const response = await api.get<TrendingResponse>("/trending/all/week");

  return response.data.results.map(trendingMapper);
};
