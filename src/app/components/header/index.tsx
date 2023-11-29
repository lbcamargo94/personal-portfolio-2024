import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">
          <Image
            width={58}
            height={49}
            src={"/images/logo.svg"}
            alt="Logo Lucas Camargo Dev"
          />
        </Link>
      </div>
    </header>
  );
};
