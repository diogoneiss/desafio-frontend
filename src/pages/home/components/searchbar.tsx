import React from "react";

import * as Chakra from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

function Searchbar() {
   return (
      <Box paddingTop="50px">
         <Chakra.InputGroup>
            <Chakra.InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
            <Chakra.Input
               backgroundColor="white"
               type="text"
               placeholder="Search book"
               color="black"
               _placeholder={{ color: "black" }}
            />
         </Chakra.InputGroup>
      </Box>
   );
}

export default Searchbar;
