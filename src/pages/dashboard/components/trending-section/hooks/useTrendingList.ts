import { useQuery } from "@tanstack/react-query";

import { getTrending } from "@/api/services/trending.service";
import type { Media } from "@/types/Media";

type UseTrendingListReturn = {
  trendingData?: Media[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
};

export const useTrendingList = (): UseTrendingListReturn => {
  const {
    data: trendingData,
    isLoading,
    error,
    refetch
  } = useQuery<Media[]>({
    queryKey: ["trending"],
    queryFn: getTrending
  });

  return {
    trendingData,
    isLoading,
    error,
    refetch
  };
};
