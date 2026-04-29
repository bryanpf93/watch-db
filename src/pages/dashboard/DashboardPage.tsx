import { useQuery } from "@tanstack/react-query";

import { getTrending } from "../../api/services/trending.service";
import type { Media } from "../../types/Media";
import { Card } from "./components/card/Card";

export const DashboardPage = () => {
  const {
    data: trendingData,
    isLoading,
    error,
    refetch
  } = useQuery<Media[]>({
    queryKey: ["trending"],
    queryFn: getTrending
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error: {error.message}
        <button onClick={() => refetch()}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      {trendingData?.map((media) => (
        <Card
          key={media.id}
          title={media.title}
          poster={media.poster}
          date={media.first_air_date}
        />
      ))}
    </div>
  );
};
