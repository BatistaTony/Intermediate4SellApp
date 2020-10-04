import Filter from "../filtro/filtro";
import { AdItem, AdsStyle, ContentStyled, ListPost } from "./contentStye";
import Post from "./../post/post";
import { useEffect, useState } from "react";
import { IPost } from "../../types";
import useSWR from "swr";

interface IProps {
  posts: Array<IPost>;
}

export default function ContentPage(props: IProps) {
  const [posts, setPosts] = useState<Array<IPost>>([
    {
      id: "53684756378hxjddgj",
      owner: {
        id: "34687358435",
        name: "Tone Oliveira",
        avatar: "/images/hero.png",
      },
      category: "Informatica",
      date: new Date(),
      gallery: ["/images/hero.png", "/images/hero.png", "/images/hero.png"],
      interestings: 0,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aut, recusandae, doloribus ratione alias et ex facere numquam sed soluta itaque. Reiciendis odio laboriosam praesentium doloremque! Molestias assumenda a optio?",
    },
  ]);

  return (
    <ContentStyled>
      <Filter />

      <ListPost>
        {posts.map((value: IPost, index: number) => (
          <Post data={value} key={index} />
        ))}
      </ListPost>
      <AdsStyle>
        {[1, 2, 3].map((value, index) => (
          <AdItem key={index} />
        ))}
      </AdsStyle>
    </ContentStyled>
  );
}

export async function getStaticProps() {
  const data = await fetch("http://localhost:3000/api/post");
  const posts = await data.json();

  console.log(data);

  return {
    props: {
      posts,
    },
  };
}
