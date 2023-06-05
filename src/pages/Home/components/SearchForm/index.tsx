import { SearchFormContainer, SearchInput } from "./styles";

interface SearchFormProps {
  onChangeSearch: (search: string) => void;
  search: string;
}

export function SearchForm({ onChangeSearch, search } : SearchFormProps) {

  return (
    <SearchFormContainer>
      <SearchInput 
        name="search" 
        placeholder="Buscar conteúdo" 
        onChange={(e) => onChangeSearch(e.target.value)}
        value={search}
      />
    </SearchFormContainer>
  )
}