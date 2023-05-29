import getUserDetails from "@/lib/getUserDetails";
import getUserPosts from "@/lib/getUserPosts";
import UserDetails from "./UserDetails";
import UserPosts from "./UserPosts";

type Params = {
  params: {
    userId: string;
  };
};

const UserDetailsPage = async ({ params: { userId } }: Params) => {
  const userDetailData: Promise<User> = getUserDetails(userId);
  const userPostData: Promise<Post[]> = getUserPosts(userId);

  const [user, userPosts] = await Promise.all([userDetailData, userPostData]);

  return (
    <>
      <UserDetails user={user} />
      <UserPosts posts={userPosts} />
    </>
  );
};

export default UserDetailsPage;
