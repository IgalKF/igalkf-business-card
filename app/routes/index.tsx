import { Link } from "@remix-run/react";
import { redirect } from "@remix-run/server-runtime";
import { motion } from "framer-motion";
import AnimatedText from "react-animated-text-content";

import { useOptionalUser } from "~/utils";



export default function Index() {
  const user = useOptionalUser();
  return (
    <main className='relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center rtl:mr-3'>
    </main>
  );
}
