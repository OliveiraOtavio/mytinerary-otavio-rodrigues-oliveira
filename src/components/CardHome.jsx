export default function CardHome({ src,alt,text}) {
  return (
            <div className="flex flex-col items-center  rounded-[7px] m-2 bg-white"> 
              <img className="w-[20em]  p-[0.5em]" src={src} alt={alt} />
              <p className="flex pb-[0.5em] justify-center w-11/12 bg-blue-900 text-white font-semibold mb-[0.5em]">{text}</p>
            </div>
  )
}
