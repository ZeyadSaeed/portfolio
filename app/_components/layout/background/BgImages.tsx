import Image from "next/image";

const BgImages = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Image
        src="/astro.svg"
        className={
          "absolute select-none left-[6vw] top-[9vh] md:left-[32vw] md:top-[22vh]"
        }
        width={137}
        height={36}
        alt="Astro"
      />
      <Image
        src="/css.svg"
        className={
          "absolute select-none left-[82vw] top-[12vh] md:left-[60vw] md:top-[80vh]"
        }
        width={91}
        height={91}
        alt="CSS"
      />
      <Image
        src="/next.svg"
        className={
          "absolute select-none left-[12vw] top-[83vh] md:left-[8vw] md:top-[10vh]"
        }
        width={107}
        height={65}
        alt="Next.js"
      />
      <Image
        src="/js.svg"
        className={
          "absolute select-none left-[-6vw] top-[54vh] md:left-[66vw] md:top-[43vh]"
        }
        width={75}
        height={75}
        alt="Javascript"
      />
      <Image
        src="/typescript.svg"
        className={
          "absolute select-none left-[87vw] top-[78vh] md:left-[7vw] md:top-[72vh]"
        }
        width={75}
        height={75}
        alt="Typescript"
      />
      <Image
        src="/html.svg"
        className={
          "hidden md:block absolute select-none md:left-[45vw] md:top-[51vh]"
        }
        width={75}
        height={75}
        alt="HTML"
      />
      <Image
        src="/react.svg"
        className={
          "absolute select-none left-[75vw] top-[38vh] md:left-[85vw] md:top-[24vh]"
        }
        width={75}
        height={75}
        alt="React"
      />
      <Image
        src="/tailwind.svg"
        className={
          "absolute select-none left-[42vw] top-[62vh] md:left-[83vw] md:top-[67vh]"
        }
        width={75}
        height={75}
        alt="React"
      />
      <Image
        src="/git.svg"
        className={
          "hidden md:block absolute select-none md:left-[32vw] md:top-[82vh]"
        }
        width={75}
        height={75}
        alt="Git"
      />
      <Image
        src="/nodejs.svg"
        className={
          "absolute select-none left-[24vw] top-[27vh] md:left-[16vw] md:top-[42svh]"
        }
        width={90}
        height={90}
        alt="Nodejs"
      />
      <Image
        src="/mongodb.svg"
        className={
          "hidden md:block absolute select-none md:left-[59vw] md:top-[10vh]"
        }
        width={160}
        height={160}
        priority
        alt="MongoDB"
      />
    </div>
  );
};

export default BgImages;
