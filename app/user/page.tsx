import React from "react";
import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "User",
  description: "User Page",
};

const UserPage = async () => {
  const userData: Promise<User[]> = getAllUsers();
  const users = await userData;

  console.log("Hello from the User Page");

  const content = (
    <section>
      <h2>
        <Link href="/">back home</Link>
        <br />
        {users.map((user) => {
          return (
            <>
              <p key={user.id}>
                <Link href={`/user/${user.id}`}>{user.name}</Link>
              </p>
              <br />
            </>
          );
        })}
      </h2>
    </section>
  );

  return content;
};

export default UserPage;
