import { Box, Button } from "@chakra-ui/react";
import { USERS } from "lib/routes";
import { Link } from "react-router-dom";
import { ActiveUser } from "./Sidebar";

export default function SmallSidebar() {
  return (
    <>
      <Box align="center">
        <Box
          px="6"
          height="100vh"
          w="100%"
          maxW="300px"
          borderLeftColor="purple.100"
          position="sticky"
          top="16"
        >
          <ActiveUser />
          <Box align="center">
            <Box as="ul" borderBottom="2px solid" borderColor="purple.200" />
            <Button
              variant="outline"
              colorScheme="purple"
              as={Link}
              to={USERS}
              mt="4"
              size="sm"
            >
              ALL USERS
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
