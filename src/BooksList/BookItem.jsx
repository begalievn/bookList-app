import {
  Flex,
  Text,
  Button,
  Image,
  Link as StyledLink,
} from "rebass/styled-components";
import { Link as RouterLink } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { removeBook } from "../api";
import Loader from "react-loader-spinner";
import trash from "../shared/trash.svg";
import {} from "antd";
import { EditOutlined } from "@ant-design/icons";

export const BookItem = ({ id, title, author }) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(removeBook);

  const remove = async () => {
    await mutateAsync(id);
    queryClient.invalidateQueries("books");
  };

  return (
    <Flex key={id} p={3} width="100%" alignItems="center">
      <StyledLink as={RouterLink} to={`/update-book/${id}`} mr="auto">
        <Text>{title}</Text>
        <Text>{author}</Text>
      </StyledLink>
      <Button type="link" as={RouterLink} to={`/update-book/${id}`}>
        <EditOutlined />
      </Button>

      <Button type="link" onClick={remove} ml="5">
        {isLoading ? (
          <Loader type="ThreeDots" color="#fff" height={10} />
        ) : (
          <Image size={20} src={trash} />
        )}
      </Button>
    </Flex>
  );
};
