import {
  Avatar,
  PostStyled,
  PostHeader,
  PostInfo,
  UserName,
  ProductCategory,
  PostDate,
  MenuOptions,
  PostText,
  PostGallery,
  ProductPicture,
  PostFooter,
  ButtonInterest,
} from "./postStyle";

import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import { IPost } from "../../types";

export default function Post({ data }: { data: IPost }) {
  const [showOptions, setShowOpt] = useState<boolean>(false);

  const { id, owner, category, gallery, date, text, interestings } = data;

  const convertMonth = (month: number) => {
    switch (month) {
      case 1: {
        return "Janeiro";
        break;
      }

      case 2: {
        return "Fevereiro";
        break;
      }

      case 3: {
        return "Março";
        break;
      }

      case 4: {
        return "Abril";
        break;
      }

      case 5: {
        return "Maio";
        break;
      }

      case 6: {
        return "Junho";
        break;
      }

      case 7: {
        return "Julho";
        break;
      }

      case 8: {
        return "Agosto";
        break;
      }

      case 9: {
        return "Setembro";
        break;
      }

      case 10: {
        return "Outubro";
        break;
      }

      case 11: {
        return "Novembro";
        break;
      }

      case 12: {
        return "Dezembro";
        break;
      }
    }
  };

  const convertDateToString = () => {
    return `${date.getDate()} de ${convertMonth(
      date.getMonth() + 1
    )} de ${date.getFullYear()}`;
  };

  const putInterest = async (id: string) => {
    await fetch("http://localhost:3000/api/interest/" + id, {
      method: "POST",
    }).then((res) => console.log(res.json()));
  };

  return (
    <PostStyled>
      <PostHeader>
        <PostInfo>
          <Avatar />
          <div>
            <UserName>{owner.name}</UserName>
            <ProductCategory>
              {category} <span></span>{" "}
              <img src="images/interesting.svg" alt="" />{" "}
            </ProductCategory>
            <PostDate>
              {convertDateToString()} <span></span>{" "}
              <img src="images/interesting.svg" alt="" />
            </PostDate>
          </div>
        </PostInfo>

        <MenuOptions>
          <div className="buttonDot" onClick={() => setShowOpt(!showOptions)}>
            <div className="dot"></div>
            <div className="dot"></div>

            <div className="dot"></div>
          </div>

          <CSSTransition
            unmountOnExit
            addEndListener={() => {}}
            timout={200}
            classNames="my-node"
            in={showOptions}
          >
            <div className="divModalOPtions"></div>
          </CSSTransition>
        </MenuOptions>
      </PostHeader>

      <PostText>{text}</PostText>

      <PostGallery>
        {gallery.map((value: string, index: number) => (
          <ProductPicture img={value} key={index} />
        ))}
      </PostGallery>
      <PostFooter>
        <ButtonInterest onClick={() => putInterest(id)}>
          <img src="images/interesting.svg" alt="" />
          <span>{interestings}</span>
        </ButtonInterest>
      </PostFooter>
    </PostStyled>
  );
}
