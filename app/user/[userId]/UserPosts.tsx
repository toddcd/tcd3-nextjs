"use client";

import React, { useState } from "react";
import { SimpleGrid, useDisclosure, Button } from "@chakra-ui/react";
import CardItem from "./CardItem";
import PostDrawer from "./PostDrawer";
import { useStore } from "../../../lib/store/store";

const UserPosts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [postId, setPostId] = useState<string | undefined>(undefined);

  const posts = useStore.getState().posts;

  const content = posts.map((post: Post) => {
    return (
      <CardItem
        key={post.id}
        postId={post.id.toString()}
        title={post.title}
        copy={post.body}
        onOpen={onOpen}
        setPostId={setPostId}
      />
    );
  });

  return (
    <>
      {postId && (
        <PostDrawer isOpen={isOpen} onClose={onClose} postId={postId} />
      )}
      <SimpleGrid columns={2} spacing={10} padding="10px">
        {content}
      </SimpleGrid>
    </>
  );
};

export default UserPosts;
