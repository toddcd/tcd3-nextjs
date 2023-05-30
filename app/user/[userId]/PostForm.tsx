"use client";

import React from "react";
import { Field } from "formik";
import ImageDrawer from "./ImageDrawer";

import {
  Box,
  Stack,
  FormLabel,
  Input,
  Button,
  Select,
  Textarea,
  Spinner,
  Image,
} from "@chakra-ui/react";
import { format } from "path";

const PostForm = () => {
  return (
    <Stack spacing="24px">
      <Box>
        <FormLabel htmlFor="title">Title</FormLabel>
        <Field
          as={Input}
          id="title"
          name="title"
          placeholder="Please enter a post title"
        />
      </Box>
      <Image src="https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" />
      <ImageDrawer />
      <Box>
        <FormLabel htmlFor="type">Select Type</FormLabel>
        <Field as={Select} id="type" name="type">
          <option value="standard">Standard</option>
          <option value="offer">Offer</option>
        </Field>
      </Box>

      <Box>
        <FormLabel htmlFor="body">Post Body</FormLabel>
        <Field as={Textarea} id="body" name="body" />
      </Box>
    </Stack>
  );
};

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    return res.json();
  });

export default PostForm;
