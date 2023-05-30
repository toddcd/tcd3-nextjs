"use client";
import React from "react";
import { Formik, Field } from "formik";
import useSWR from "swr";
import PostForm from "./PostForm";
import {
  Drawer,
  Button,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  Spinner,
  useToast,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  postId: string | undefined;
};

const PostDrawer = ({ isOpen, onClose, postId }: Props) => {
  const toast = useToast();
  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    fetcher
  );

  return (
    <>
      <Drawer
        isOpen={isOpen && !isLoading}
        placement="right"
        onClose={onClose}
        size="lg"
      >
        <DrawerOverlay />
        <Formik
          initialValues={{
            title: data?.title,
            type: "standard",
            body: data?.body,
          }}
          onSubmit={(values) => {
            onClose();
            toast({
              title: "Submitted",
              description: JSON.stringify(values, null, 2),
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth="1px">
                  Editing Post: {postId}
                </DrawerHeader>
                <DrawerBody>
                  {isLoading ? <Spinner /> : <PostForm />}
                </DrawerBody>
                <DrawerFooter borderTopWidth="1px">
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button type="submit" colorScheme="blue">
                    Submit
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </form>
          )}
        </Formik>
      </Drawer>
    </>
  );
};

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    return res.json();
  });

export default PostDrawer;
