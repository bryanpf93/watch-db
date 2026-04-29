import { CardContainerStyled, ImageStyled } from "./Card.styled";

type CardProps = {
  title: string;
  poster: string;
  date: string;
};

export const Card = ({ title, poster, date }: CardProps) => {
  return (
    <CardContainerStyled $color="yellow">
      <h2>{title}</h2>
      <ImageStyled src={poster} alt={title} />
      <p>{date}</p>
    </CardContainerStyled>
  );
};
