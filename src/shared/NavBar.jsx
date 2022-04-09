import { Flex, Box, Link as StyledLink, Image } from "rebass/styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Container } from "./Container";
import { Button } from "antd";
import "antd/dist/antd.css";
import booksIcon from "./booksIcon.svg";
import addBookIcon from "./addBookIcon.svg";

export const NavBar = () => {
  return (
    <Flex bg="#aaa" color="white" justifyContent="center">
      <Container>
        <Flex px={3} width="100%" alignItems="center">
          <Image size={25} src={booksIcon} />
          <StyledLink as={RouterLink} variant="nav" to="/">
            BookList
          </StyledLink>
          <Box mx="auto" />

          <StyledLink as={RouterLink} variant="nav" to="/create-book">
            <Button>
              <Image size={20} src={addBookIcon} />
              <span style={{ width: "5px" }}></span> Add a Book
            </Button>
          </StyledLink>
        </Flex>
      </Container>
    </Flex>
  );
};
