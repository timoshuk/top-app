import { useState, useEffect } from "react";
import { Htag, Button, P, Tag } from "../components";

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log("Counter " + counter);

    return function cleanup() {
      console.log("unmount");
    };
  }, []);

  return (
    <div>
      <P fontSize="lg">{counter}</P>
      <Htag tag="h1">8.1</Htag>
      <Button
        appearance="primary"
        arrow="right"
        onClick={() => setCounter((prevValue) => prevValue + 1)}
      >
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
      </div>
    </div>
  );
}
