"use client";

import React, { useState } from "react";
import { SimpleGrid, useDisclosure, Button } from "@chakra-ui/react";
import CardItem from "./CardItem";
import PostDrawer from "./PostDrawer";

const UserPosts = ({ posts }: { posts: Post[] }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [postId, setPostId] = useState<string | undefined>(undefined);

  const content = posts.map((post: Post) => {
    return (
      <div key={post.id}>
        <CardItem
          postId={post.id.toString()}
          title={post.title}
          copy={post.body}
          onOpen={onOpen}
          setPostId={setPostId}
        />
      </div>
    );
  });

  return (
    <>
      <PostDrawer isOpen={isOpen} onClose={onClose} postId={postId} />
      <SimpleGrid columns={2} spacing={10} padding="10px">
        {content}
      </SimpleGrid>
    </>
  );
};

export default UserPosts;
