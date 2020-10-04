import { NextApiRequest, NextApiResponse } from "next";

export default function post(req: NextApiRequest, res: NextApiResponse) {
  const { body, query, method } = req;

  const posts = [
    {
      id: "4536874fshgd",
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
    ,
    {
      id: "23509809djfk",

      owner: {
        id: "34687668435",
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
  ];

  switch (method) {
    case "POST": {
      res.json({ msg: "Post something" });
      break;
    }

    case "GET": {
      res.json({ posts });
    }
  }
}
