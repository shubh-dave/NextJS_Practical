import { useRouter } from "next/router";

const Comment = () => {
  const router = useRouter();
  console.log(router.query);

  return <h1>Hello</h1>;
};

export default Comment;
