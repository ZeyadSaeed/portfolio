"use client";
import Button from "@components/common/Button";
import { SEND_MESSAGE_FAILED } from "@lib/constMessages";
import {
  MotionButton,
  MotionForm,
  MotionInput,
  MotionTextArea,
} from "@lib/motion";
import { Variants } from "framer-motion";
import { useState, type FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await res.json();

      if (!data.success && data.message) {
        return toast.error(data.message);
      }

      if (!res.ok) {
        return toast.error(SEND_MESSAGE_FAILED);
      }

      setName("");
      setEmail("");
      setMessage("");
      return toast.success(data.message);
    } catch (err) {
      toast.error(SEND_MESSAGE_FAILED);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <MotionForm
      className="mb-10 flex w-full max-w-[1100px] flex-col items-center justify-center gap-6 md:gap-8"
      onSubmit={handleFormSubmit}
    >
      <div className="flex w-full flex-col gap-6 md:flex-row md:gap-8">
        <MotionInput
          name="Name"
          type="text"
          aria-label="Enter your name"
          placeholder="Enter your name..."
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
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
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        custom={1.4}
        className="h-[37vh] w-full rounded-lg border-2 border-cyan bg-transparent p-4 placeholder:text-base placeholder:text-white/40 focus:shadow-hovered-glow focus:outline-none md:text-lg md:placeholder:text-lg"
      />

      <Button
        type="submit"
        disabled={isLoading}
        title="Send"
        variants={buttonVariants}
        isLoading={isLoading}
        className="w-full px-5 py-3 md:px-7 md:py-4"
      />

      <Toaster position="top-right" />
    </MotionForm>
  );
};
export default Form;
