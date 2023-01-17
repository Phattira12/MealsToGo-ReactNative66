import { StatusBar, SafeAreaView, View } from "react-native";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;
const SearchContainer = styled(View)`
  padding:16px;
`;
const RestaurantListCon = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: lightpink;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantListCon>
        <RestaurantInfoCard />
      </RestaurantListCon>
    </SafeArea>
  );
};
