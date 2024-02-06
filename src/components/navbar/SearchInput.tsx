import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

const SearchInput: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <Flex
      // flexGrow={1}
      maxWidth="200px"
      mr={2}
      align="center"
      _hover={{
        cursor: "pointer",
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <SearchIcon
            color="primary"
            boxSize={6}
            mb={1}
            onClick={() => setVisible(!visible)}
          />
        </InputLeftElement>
        <Input
          placeholder="Pesquisar"
          fontSize="10pt"
          _placeholder={{ color: "gray.500" }}
          _focus={
            visible
              ? {
                  outline: "none",
                  border: "1px solid",
                  borderColor: "blue.500",
                }
              : {
                  outline: "none",
                  border: "none",
                  borderColor: "blue.500",
                }
          }
          height="34px"
          bg={visible ? "secondary" : "transparent"}
          border={visible ? "1px solid" : "none"}
          borderColor="primary"
          width={visible ? "150px" : "0px"}
          transition="width 0.5s ease-in-out"
        />
      </InputGroup>
    </Flex>
  );
};

export default SearchInput;
