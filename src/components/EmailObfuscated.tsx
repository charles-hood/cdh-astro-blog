import { useEffect, useState } from "react";

interface EmailObfuscatedProps {
  user: string;
  domain: string;
}

export default function EmailObfuscated({ user, domain }: EmailObfuscatedProps) {
  const [email, setEmail] = useState<string>("");
  
  useEffect(() => {
    // Only construct email on client side to avoid bots scraping SSR content
    const fullEmail = `${user}@${domain}`;
    setEmail(fullEmail);
  }, [user, domain]);

  if (!email) {
    // Show obfuscated version for SSR/bots
    return <span>{user.replace(/\./g, " [dot] ")} [at] {domain.replace(/\./g, " [dot] ")}</span>;
  }

  return (
    <a 
      href={`mailto:${email}`}
      className="text-accent hover:underline"
    >
      {email}
    </a>
  );
}