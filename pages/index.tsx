import { useState, useEffect } from "react";
import { Htag, Button, P, Tag, Rating } from "../components";
import { withLayout } from "../layout";
function Home(): JSX.Element {
  const [rating, setRating] = useState(4);

  return (
    <>
      <Htag tag="h1">10.5</Htag>
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
    </>
  );
}

export default withLayout(Home);
