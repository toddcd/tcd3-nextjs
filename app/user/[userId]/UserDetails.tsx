"use client";

import React from "react";
import { Box, Text } from "@chakra-ui/react";

const UserDetails = ({ user }: { user: User }) => {
  return (
    <Box bg="blue.100">
      <Text
        as="h1"
        fontSize="3xl"
        color="tomato"
        fontWeight="extrabold"
        ml="10px"
      >
        {user.name}
      </Text>
    </Box>
  );
};

export default UserDetails;
