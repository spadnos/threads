export interface UserType {
  id: string;
  username: string;
  email: string;
  image: string | null;
}

export interface ThreadType {
  id: string;
}

export interface CommentType {
  id: string;
  text: string;
  user: UserType;
  userId: string;
  threadId: string;
}
