import { useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Form, InputWrapper } from "./styles";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Form>
      <InputWrapper>
        <input
          type="search"
          placeholder="Buscar produto"
          value={searchValue}
          onChange={({ target }) => setSearchValue(target.value)}
          required
        />
        <button type="submit">
          <MagnifyingGlass weight="bold" size={20} />
        </button>
      </InputWrapper>
    </Form>
  );
}
