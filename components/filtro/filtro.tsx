import { useState } from "react";
import {
  FilterStyle,
  FormGroup,
  Title,
  CategoryList,
  SelectGroup,
  ButtonSelect,
  ItemCategory,
} from "./filtroStyle";

import { CSSTransition } from "react-transition-group";

export default function Filter() {
  const [showList, setShowList] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("");
  const [categories, setCategories] = useState<string[] | null>([
    "Carro",
    "Imobiliario",
    "Informática",
    "Educação",
  ]);

  const chooseCategory = (value: string) => {
    setCategory(value);
    setShowList(false);
  };

  return (
    <FilterStyle>
      <Title>Pesquisar</Title>
      <FormGroup>
        <input
          type="text"
          name="prod"
          placeholder="Pesquise por: nome, vendedor, preço"
          id=""
        />
      </FormGroup>
      <SelectGroup>
        <ButtonSelect onClick={() => setShowList(!showList)}>
          {category ? category : "Categoria"}
        </ButtonSelect>

        {showList && (
          <CategoryList>
            {categories.map((value, index) => (
              <ItemCategory key={index} onClick={() => chooseCategory(value)}>
                {value}
              </ItemCategory>
            ))}
          </CategoryList>
        )}
      </SelectGroup>
    </FilterStyle>
  );
}
