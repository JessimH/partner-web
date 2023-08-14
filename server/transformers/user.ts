export const userTransformer = (user: any) => {
  return {
    id: user.id,
    role: user.role,
    username: user.username,
    name: user.name,
    email: user.email,
    profileImage: user.profileImage,
    // SPORTS
    sportTypesIDs: user.sportTypesIDs,
    sports: user.sports,

    // SESSIONS AS PARTICIPANT
    sessionsIDs: user.sessionsIDs,
    sessions: user.sessions,

    // SESSIONS AS AUTHOR
    sessionsAsAuthorIDs: user.sessionsAsAuthorIDs,
    sessionsAsAuthor: user.sessionsAsAuthor,

    // Replies
    commentsIDs: user.commentsIDs,
    comments: user.comments,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};
