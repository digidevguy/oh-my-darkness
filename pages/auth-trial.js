import { Flex, Heading, Text } from "@chakra-ui/react";
import { useSession, getSession } from "next-auth/react";
import { useEffect } from "react";

const AuthTestPage = () => {
  const { data: session, status } = useSession();
  const stuff = getSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unathenticated") {
    return <p>Access Denied</p>;
  }

  return (
    <Flex flexDir="column" p={6}>
      <Heading>Hello!</Heading>
      <Text>You are logged in!</Text>
      <Text>{session}</Text>
      <Text>{status}</Text>
    </Flex>
  );
};

export default AuthTestPage;
