export const userTransformer = (user: any) => {
  return {
    id: user.id,
    username: user.username,
    name: user.name,
    email: user.email,
    profileImage: user.profileImage,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};
