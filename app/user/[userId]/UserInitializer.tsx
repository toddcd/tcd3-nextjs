"use client";

import { useRef } from "react";

import { useStore } from "../../../lib/store/store";

function UserInitializer({ user, posts }: { user: User; posts: Post[] }) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useStore.setState({ user, posts });
    initialized.current = true;
  }
  return null;
}

export default UserInitializer;
