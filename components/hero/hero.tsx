import {
  ApresentationContainer,
  HeroStyle,
  Title,
  Text,
  Button,
  BtnContainer,
} from "./heroStyle";

export default function Hero() {
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
          <Button>Fazer a tabua</Button>
          <Button>Quero Algo</Button>
        </BtnContainer>
      </ApresentationContainer>
    </HeroStyle>
  );
}
