"use client";

import React from "react";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import CardItem from "./CardItem";

const UserPosts = ({ posts }: { posts: Post[] }) => {
  const content = posts.map((post: Post) => {
    return (
      <div key={post.id}>
        <CardItem title={post.title} copy={post.body} />{" "}
      </div>
    );
  });

  return (
    <SimpleGrid columns={2} spacing={10} padding="10px">
      {content}
    </SimpleGrid>
  );
};

export default UserPosts;
