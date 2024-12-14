"use client";

import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Success() {
  return (
    <div className="flex gap-48 flex-col  bg-gray-900">
      <header className="flex justify-center pt-5">
        <Image src="/BH.svg" width={40} height={40} alt="Site main logo" />
      </header>
      <div className="flex justify-center text-amber-100">
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="flex flex-col items-center text-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <Image
              src="/ok-svgrepo-com.svg"
              width={150}
              height={150}
              alt="Success icon"
              className="pb-4"
            />
            <h2 className="text-3xl font-semibold pb-28">
              Cadastro realizado com sucesso!
            </h2>
          </motion.div>
          <Button
            type="button"
            className="rounded-xl self-center text-gray-900 font-semibold"
            bg="yellow.100"
            width="1/2"
            variant="outline"
            _hover={{ bg: "yellow.200" }}
            size="md"
          >
            <Link href="/signin">Ir para Login</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
