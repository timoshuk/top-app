import axios from "axios";
import { GetStaticProps } from "next";
import { useState, useEffect } from "react";
import { Htag, Button, P, Tag, Rating } from "../components";
import { MenuItem } from "../interfaces/menu.interface";
import { withLayout } from "../layout";
function Home({ menu }: HomeProps): JSX.Element {
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

        <ul>
          {menu.map((item) => (
            <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
