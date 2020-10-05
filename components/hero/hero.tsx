import {
  ApresentationContainer,
  HeroStyle,
  Title,
  Text,
  Button,
  BtnContainer,
} from "./heroStyle";

import { useDispatch } from "react-redux";
import { getUser } from "./../../store/actions/user";

export default function Hero() {
  const dispatch = useDispatch();

  return (
    <HeroStyle>
      <ApresentationContainer>
        <Title>Do not seatle in, faz a tabua bigBro !</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto
          ratione qui delectus vitae adipisci, excepturi eaque mollitia
          pariatur, magnam culpa, provident architecto voluptate beatae? Labore
          deleniti unde consequatur cumque?
        </Text>

        <BtnContainer>
          <Button onClick={() => dispatch(getUser())}>Fazer a tabua</Button>
          <Button>Quero Algo</Button>
        </BtnContainer>
      </ApresentationContainer>
    </HeroStyle>
  );
}
