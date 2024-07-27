import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { logoutAccount } from "@/lib/actions/user.actions";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();
  const handleLogOut = async () => {
    const loggedout = await logoutAccount();
    if (loggedout) router.push("/sign-in");
  };
  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">{user.name[0]}</p>
      </div>
      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 truncate font-semibold text-gray-700">
          {user.name}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user.email}
        </p>
      </div>
      <div className="footer-image" onClick={handleLogOut}>
        <Image
          src="/icons/logo.svg"
          width={30}
          height={30}
          alt="Horizon Bank"
        />
      </div>
    </footer>
  );
};

export default Footer;
