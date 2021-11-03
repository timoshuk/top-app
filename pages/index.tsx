import { useState, useEffect } from "react";
import { Htag, Button, P, Tag, Rating } from "../components";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState(4);

  return (
    <div>
      <Htag tag="h1">8.1</Htag>
      <Button appearance="primary" arrow="right">
        Increment
      </Button>
      <Button appearance="ghost" arrow="down">
        BTN
      </Button>

      <div>
        <Tag size="m" color="primary">
          Litle
        </Tag>

        <Tag size="s" color="red" href="http://vcci.com.ua">
          Litle
        </Tag>

        <Rating isEditable={true} rating={rating} setRating={setRating} />
      </div>
    </div>
  );
}
