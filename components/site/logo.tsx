import Image from "next/image";
import Link from "next/link";

import LogoLight from "@/public/logo.svg";
import LogoDark from "@/public/logo-dark.svg";

export const Logo = ({
  href = "/",
  width = 72,
  height,
  className,
}: {
  href?: string;
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <Link href={href} className={className}>
      <Image
        width={width}
        height={height}
        src={LogoLight}
        alt="Italy Vita Logo"
        className="block dark:hidden invert"
      />
      <Image
        width={width}
        height={height}
        src={LogoDark}
        alt="Italy Vita Logo"
        className="hidden dark:block"
      />
    </Link>
  );
};
