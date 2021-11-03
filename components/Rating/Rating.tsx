import { useEffect, KeyboardEvent } from "react";
import cn from "classnames";

import { RatingProps } from "./Rating.props";
import { useState } from "react";
import StarIcon from "./star.svg";
import styles from "./Rating.module.css";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <StarIcon
          key={i}
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editebl]: isEditable,
          })}
          onMouseEnter={() => changrDisplay(i + 1)}
          onMouseLeave={() => changrDisplay(rating)}
          onClick={() => {
            handleClick(i + 1);
          }}
          onKeyDown={(e: KeyboardEvent<SVGElement>) => {
            isEditable && handleSpace(i + 1, e);
          }}
          tabindex={isEditable ? 0 : -1}
        />
      );
    });

    setRatingArray(updatedArray);
  };

  const changrDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const handleClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }

    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code != "Space" || !isEditable) {
      return;
    }

    setRating(i);
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
