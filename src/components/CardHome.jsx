export default function CardHome({ src, alt, text }) {
  return (
    <div className="flex flex-col items-center  rounded-[7px] m-2 bg-white">
      <img
        className="w-[80vw] h-[25vh] object-cover p-[0.5em]
                   md:w-[50vw] md:h-[20vh] md:object-cover
                   lg:w-[30vw] lg:h-[35vh] lg:object-cover"
        src={src}
        alt={alt}
      />
      <p
        className="w-[67vw] flex pb-[0.5em] justify-center font-semibold mb-[0.5em]
                   md:w-[37vw] 
                   lg:w-[23vw]"
      >
        {text}
      </p>
    </div>
  );
}
