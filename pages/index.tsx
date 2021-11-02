import { Htag, Button, P, Tag } from "../components";

export default function Home(): JSX.Element {
  return (
    <div>
      <P fontSize="lg">
        <span>sdlk;fjskl</span>
      </P>
      <Htag tag="h1">8.1</Htag>
      <Button appearance="primary" arrow="right">
        BTN
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
