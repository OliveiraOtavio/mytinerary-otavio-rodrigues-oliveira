export default function CardHome({ src,alt,text}) {
  return (
            <div className="flex flex-col items-center border-2 border-red-500 rounded-[7px] m-2 bg-white"> 
              <img className="w-[250px] h-[200px]  p-[8px]" src={src} alt={alt} />
              <p className="mb-[10px]">{text}</p>
            </div>
  )
}
