import React from "react";
import { Text, Box, Image, GridItem } from "@chakra-ui/react";
import { BookType } from "../types";
import { useHistory } from "react-router";
// import { Container } from './styles';

const BookCard: React.FC<BookType> = (book) => {
   const history = useHistory();
   const onClickItem = () => {
      history.push(`/details/${book.id}`);
   };
   return (
      <GridItem colSpan={1} rowSpan={1} width="105px">
         <Image
            borderRadius="md"
            cursor="pointer"
            onClick={onClickItem}
            width="105px"
            height="153px"
            objectFit="fill"
            boxShadow="lg"
            src={book.thumbnail}
         />
         <Text marginTop="9px" fontSize="12px" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
            {book.name}
         </Text>
         <Text
            fontSize="10px"
            fontFamily="Roboto, sans-serif"
            fontWeight="900"
            lineHeight="11,72px"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
         >
            by {book.author}
         </Text>
      </GridItem>
   );
};

export default BookCard;
