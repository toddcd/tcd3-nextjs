const getUserDetails = async (userId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!res.ok) {
    throw new Error("failed to fetch user data");
  }
  return res.json();
};

export default getUserDetails;
