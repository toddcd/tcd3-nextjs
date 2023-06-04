import getUserDetails from "@/lib/getUserDetails";
import getUserPosts from "@/lib/getUserPosts";
import UserDetails from "./UserDetails";
import UserPosts from "./UserPosts";
import UserInitializer from "./UserInitializer";
import { useStore } from "../../../lib/store/store";

type Params = {
  params: {
    userId: string;
  };
};

const UserDetailsPage = async ({ params: { userId } }: Params) => {
  const userDetailData: Promise<User> = getUserDetails(userId);
  const userPostData: Promise<Post[]> = getUserPosts(userId);

  const [user, userPosts] = await Promise.all([userDetailData, userPostData]);

  // This sets the store to data can be used between the server components
  useStore.setState({ user: user, posts: userPosts });

  return (
    <>
      {/* This initializer sets the store for the client side compoenets */}
      <UserInitializer user={user} posts={userPosts} />
      <UserDetails />
      <UserPosts />
    </>
  );
};

export default UserDetailsPage;
