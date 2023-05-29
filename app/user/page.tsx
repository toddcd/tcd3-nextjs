import React from "react";
import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
  description: "Users Page",
};

const UserPage = async () => {
  const userData: Promise<User[]> = getAllUsers();
  const users = await userData;

  const content = (
    <>
      <h1 style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold" }}>
        Users Page
      </h1>
      <section>
        <ul>
          {users.map((user) => {
            return (
              <>
                <li key={user.id}>
                  <h1>
                    <Link href={`/user/${user.id}`}>{user.name}</Link>
                  </h1>
                  <p>{user.email}</p>
                  <br />
                </li>
              </>
            );
          })}
        </ul>
      </section>
    </>
  );

  return content;
};

export default UserPage;
