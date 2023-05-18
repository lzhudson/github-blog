import { SearchFormContainer, SearchInput } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchInput name="search" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}