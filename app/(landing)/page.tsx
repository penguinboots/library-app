import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="h-full">
      <Link href="/sign-in">
        <Button>Log in</Button>
      </Link>
      <Link href="/sign-up">
        <Button>Sign up</Button>
      </Link>
    </div>
  );
}
