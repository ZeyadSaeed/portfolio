"use client";
import type { FormEvent } from "react";

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
    <form
      className="mb-10 flex w-full max-w-[1280px] flex-col items-center justify-center gap-6 md:gap-8"
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <div className="flex w-full flex-col gap-6 md:flex-row md:gap-8">
        <input
          name="Name"
          type="text"
          aria-label="Enter your name"
          placeholder="Enter your name..."
          required
          className="w-full rounded-lg border-2 border-cyan bg-transparent p-4 placeholder:text-base placeholder:text-white/40 focus:shadow-hovered-glow focus:outline-none md:p-6 md:text-lg md:placeholder:text-lg"
        />
        <input
          name="Email"
          type="email"
          aria-label="Enter your email"
          placeholder="Enter your email..."
          required
          className="w-full rounded-lg border-2 border-cyan bg-transparent p-4 placeholder:text-base placeholder:text-white/40 focus:shadow-hovered-glow focus:outline-none md:p-6 md:text-lg md:placeholder:text-lg"
        />
      </div>

      <textarea
        name="Message"
        aria-label="Enter your message"
        placeholder="Enter your message..."
        required
        className="h-[37vh] w-full rounded-lg border-2 border-cyan bg-transparent p-4 placeholder:text-base placeholder:text-white/40 focus:shadow-hovered-glow focus:outline-none md:text-lg md:placeholder:text-lg"
      />
      <button
        type="submit"
        className="relative block w-full min-w-max overflow-hidden rounded-lg border-2 border-cyan px-5 py-3 text-center text-base text-white outline-none duration-100 placeholder:text-lg placeholder:text-white/40 hover:bg-cyan hover:shadow-hovered-glow hover:after:right-0 focus:bg-cyan focus:shadow-hovered-glow focus:outline-none md:px-7 md:py-4 md:text-lg"
      >
        Send
      </button>
    </form>
  );
};
export default Form;
