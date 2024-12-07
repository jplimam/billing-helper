import Stepper from "@/components/Stepper/page";
import { Field } from "@/components/ui/field";
import { Button, Input, Link } from "@chakra-ui/react";
import Image from "next/image";

export default function SignUp() {
  return (
    <div className="flex gap-48 w-screen h-screen flex-col  bg-gray-900">
      <header className="flex justify-center pt-5">
        <Image src="/BH.svg" width={40} height={40} alt="Site main logo" />
      </header>
      <div className="flex text-center justify-center text-amber-100 ">
        <div>
          <h1 className="text-3xl font-semibold pb-10">Crie sua conta</h1>
          <form action="" className="max-w-96 mx-auto flex flex-col gap-y-6">
            <Field
              label="Nome"
              required
              errorText="Todos os campos devem ser preenchidos"
              className="flex flex-col gap-y-2"
            >
              <Input
                type="text"
                placeholder="Digite seu nome"
                name="name"
                className="rounded-lg w-96 h-12 px-5 text-gray-900 border-solid bg-white border-gray-300 border-2"
              />
            </Field>
            <Field
              label="E-mail"
              required
              errorText="Todos os campos devem ser preenchidos"
              className="flex flex-col gap-y-2"
            >
              <Input
                type="text"
                placeholder="Digite seu e-mail"
                name="email"
                className="rounded-lg w-96 h-12 px-5 text-gray-900 border-solid bg-white border-gray-300 border-2"
              />
            </Field>
            <Button
              type="submit"
              className="rounded-xl self-center text-gray-900 font-semibold"
              bg="yellow.100"
              width="1/2"
              variant="outline"
              _hover={{ bg: "yellow.200" }}
              size="md"
            >
              Continuar
            </Button>
          </form>
          <p className="pt-5 text-base">
            Já possui uma conta? Faça seu{" "}
            <Link
              className="font-bold hover:underline focus:outline-none"
              href="/signin"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Stepper />
      </div>
    </div>
  );
}
