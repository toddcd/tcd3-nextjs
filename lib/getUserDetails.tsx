const getUserDetails = async (userId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!res.ok) {
    throw new Error("failed to fetch user data");
  }

  const user = (await res.json()) as User;

  return user;
};

export default getUserDetails;
