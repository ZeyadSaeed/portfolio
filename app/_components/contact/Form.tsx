"use client";
import {
  MotionButton,
  MotionDiv,
  MotionForm,
  MotionInput,
  MotionTextArea,
} from "@lib/motion";
import { Variants } from "framer-motion";
import type { FormEvent } from "react";

const inputVariants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: (delay = 1) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay,
    },
  }),
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 1.8,
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const Form = () => {
  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const res = await fetch("/api/sendMessage", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    console.log(data);
  }

  return (
    <MotionForm
      className="mb-10 flex w-full max-w-[1280px] flex-col items-center justify-center gap-6 md:gap-8"
      onSubmit={handleFormSubmit}
    >
      <div className="flex w-full flex-col gap-6 md:flex-row md:gap-8">
        <MotionInput
          name="Name"
          type="text"
          aria-label="Enter your name"
          placeholder="Enter your name..."
          required
          variants={inputVariants}
          custom={1}
          className="w-full rounded-lg border-2 border-cyan bg-transparent p-4 placeholder:text-base placeholder:text-white/40 focus:shadow-hovered-glow focus:outline-none md:p-6 md:text-lg md:placeholder:text-lg"
        />
        <MotionInput
          name="Email"
          type="email"
          aria-label="Enter your email"
          placeholder="Enter your email..."
          required
          variants={inputVariants}
          custom={1.2}
          className="w-full rounded-lg border-2 border-cyan bg-transparent p-4 placeholder:text-base placeholder:text-white/40 focus:shadow-hovered-glow focus:outline-none md:p-6 md:text-lg md:placeholder:text-lg"
        />
      </div>

      <MotionTextArea
        name="Message"
        variants={inputVariants}
        aria-label="Enter your message"
        placeholder="Enter your message..."
        required
        custom={1.4}
        className="h-[37vh] w-full rounded-lg border-2 border-cyan bg-transparent p-4 placeholder:text-base placeholder:text-white/40 focus:shadow-hovered-glow focus:outline-none md:text-lg md:placeholder:text-lg"
      />
      <MotionButton
        type="submit"
        variants={buttonVariants}
        className="relative block w-full min-w-max overflow-hidden rounded-lg border-2 border-cyan px-5 py-3 text-center text-base text-white outline-none duration-100 placeholder:text-lg placeholder:text-white/40 hover:bg-cyan hover:shadow-hovered-glow hover:after:right-0 focus:bg-cyan focus:shadow-hovered-glow focus:outline-none md:px-7 md:py-4 md:text-lg"
      >
        Send
      </MotionButton>
    </MotionForm>
  );
};
export default Form;
