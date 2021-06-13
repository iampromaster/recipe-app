import styled from "styled-components";
import {
  Header,
  AppNameComponent,
  AppIcon,
  SearchComponent,
  SearchIcon,
  SearchInput
} from "./components/headerComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const RecipeListContainer = styled.div`
  display:flex;
  flex-direction: row;
  padding:30px;
  justify-content: space-evenly;
`;

const RecipeContainer = styled.div`
  display:flex;
  flex-direction:column;
  padding:10px;
  width: 300px;
  box-shadow: 0 3px 10px 0 #aaa;
`
const CoverImage = styled.img`
  height: 200px;
`

const RecipeName = styled.span`
  font-size:18px;
  font-weight:bold;
  color:black;
  margin:10px 0;
`

const IngredientsText = styled.span`
  font-size:18px;
  border:solid 1px green;
  color:black;
  cursor:pointer;
  padding:10px 15px;
  border-radius: 4px;
  color:green;
  text-align:center;
  margin-bottom:12px;
`

const SeeMoreText = styled(IngredientsText)`
  color:#eb3300;
  border:solid 1px #eb3300;
`

function App() {
  return (
    <Container>
      <Header>
        <AppNameComponent>
          <AppIcon src="/hamburger.svg" />
          Recipe Finder
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon src="/search-icon.svg" />
          <SearchInput placeholder="Search Recipe" />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        <RecipeContainer>
          <CoverImage src="/hamburger.svg" />
          <RecipeName>Matar</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>

        <RecipeContainer>
          <CoverImage src="/hamburger.svg" />
          <RecipeName>Matar</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>

        <RecipeContainer>
          <CoverImage src="/hamburger.svg" />
          <RecipeName>Matar</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>

        <RecipeContainer>
          <CoverImage src="/hamburger.svg" />
          <RecipeName>Matar</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>

        <RecipeContainer>
          <CoverImage src="/hamburger.svg" />
          <RecipeName>Matar</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>

      </RecipeListContainer>
      
      
    </Container>
  );
}

export default App;
