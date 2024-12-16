"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Glamour: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page
    router.replace("/");
  }, [router]);

  return null; // Optional: Can show a loading spinner here
};

export default Glamour;
