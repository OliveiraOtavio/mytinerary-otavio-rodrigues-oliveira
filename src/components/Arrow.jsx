export default function Arrow({ direction}) {
    let d_right = "M8.25 4.5l7.5 7.5-7.5 7.5"
    let d_left = "M15.75 19.5L8.25 12l7.5-7.5"
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer text-white w-[40px] h-[40px] bg-[#4F46E5] rounded-full">
        <path strokeLinecap="round" strokeLinejoin="round" d={direction} />
    </svg>
  )
}
