"use client";

import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useStore } from "../../../lib/store/store";

const UserDetails = () => {
  const name = useStore.getState().user?.name;

  return (
    <Box bg="blue.100">
      <Text
        as="h1"
        fontSize="3xl"
        color="tomato"
        fontWeight="extrabold"
        ml="10px"
      >
        {name}
      </Text>
    </Box>
  );
};

export default UserDetails;
