import Link from "next/link";
import React from "react";

const AuthLinks = () => {
  const status = "authenticated";
  return (
    <>
      {status != "authenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className="cursor-pointer">Logout</span>
        </>
      )}
    </>
  );
};
export default AuthLinks;
