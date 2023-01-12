import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => {};
  }, []);

  return (
    <div className="not-found">
      <h1>Oooooppsss...</h1>
      <p>NOT FOUND</p>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </div>
  );
};

export default NotFound;
