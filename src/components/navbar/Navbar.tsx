import {
  Flex,
  Heading,
  Avatar,
  AvatarBadge,
  AvatarGroup,
} from "@chakra-ui/react";
import SearchInput from "./SearchInput";

const NavBar: React.FC = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="primary.900"
      color="secondary.900"
    >
      <>
        <Heading as="h1" size="lg" color="secondary.900">
          LOL Companion
        </Heading>
      </>
      <Flex align="center" justify="center" wrap="wrap">
        <Heading
          fontSize="20px"
          mr={8}
          _hover={{
            cursor: "pointer",
          }}
        >
          Champions
        </Heading>
        <Heading
          fontSize="20px"
          mr={8}
          _hover={{
            cursor: "pointer",
          }}
        >
          Players
        </Heading>
      </Flex>
      <Flex>
        <SearchInput />
        <Avatar
          size="sm"
          name="Draven"
          src="https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/Draven.png"
          _hover={{
            cursor: "pointer",
          }}
        />
      </Flex>
    </Flex>
  );
};

export default NavBar;
