import Translations from "../../DashboardPage.translation.json";
import { Card } from "../card/Card";
import { useTrendingList } from "./hooks/useTrendingList";

export const TrendingSection = () => {
  const { trendingData, isLoading, error, refetch } = useTrendingList();

  if (isLoading) {
    return <div>{Translations.trending_section.loading}</div>;
  }

  if (error) {
    return (
      <div>
        {Translations.trending_section.error}
        <button onClick={() => refetch()}>{Translations.trending_section.retry}</button>
      </div>
    );
  }

  return (
    <div>
      <h2>{Translations.trending_section.title}</h2>
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
