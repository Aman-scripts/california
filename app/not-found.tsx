import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist or has moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <Container className="flex max-w-3xl flex-col items-center py-24 text-center sm:py-32">
      <p className="font-heading text-base font-semibold text-primary">404</p>
      <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        Sorry, we could not find the page you are looking for. It may have
        been moved or no longer exists.
      </p>
      <Button asChild className="mt-8 rounded-full">
        <Link href="/">Back to Home</Link>
      </Button>
    </Container>
  );
}
