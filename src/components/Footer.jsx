//CODIGO FUNCIONAL SIN SCROLL TO TOP
// export default function Footer() {
//   return (

//   <footer className="text-white w-[1291px] h-[49px] bg-[#4F46E5] flex justify-start items-center my-[10px] px-[10px]">
//     {/* SOCIAL MEDIA */}
//     <div className="w-2/5 h-[49px]  flex items-center justify-start m-[5px] gap-5">
//               <p className="text-white font-semibold text-lg">Social Media</p>
//              {/*Instagram Icon*/} <svg className="bg-white rounded-full p-[2px] h-8 w-8 text-pink-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg>
//              {/*Facebook Icon*/} <svg className="bg-white rounded-full p-[2px] h-8 w-8 text-indigo-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
//              {/*Twitter Icon*/} <svg className="bg-white rounded-full p-[2px] h-8 w-8 text-indigo-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" /></svg>
//     </div>
//     {/* END SOCIAL MEDIA */}
//     <div className="w-[1291px] flex justify-around items-center font-semibold">
//       <p className="underline underline-offset-[10px]">MindHub 2023 - Full Stack MERN - Comision 05 TM - Otavio R. Oliveira</p>

//       <div className="text-white w-2/5 h-[49px] bg-[#4F46E5] flex  justify-end items-center font-semibold gap-7">
//               <a href="">Home</a>
//               <a href="">Cities</a>
//             <div>
//               <button className=" w-max h-[49px] text-white flex items-center justify-center gap-2">
//               Back to top!
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3" />
//               </svg>
//               </button>
//             </div>
//       </div>
//     </div>
//   </footer>
//     )
// }

export default function Footer() {
  let handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="text-white w-[95vw] h-[3.5em] bg-[#4F46E5] flex justify-start items-center my-[1em] px-[1em]">
      {/* SOCIAL MEDIA */}
      <div className="w-2/5 h-[3.5em]  flex items-center justify-start m-[5px] gap-5">
        <p className="text-white font-semibold text-lg">Social Media</p>

        {/*Instagram Icon*/}{" "}
        <svg
          className="bg-white rounded-full p-[2px] h-8 w-8 text-pink-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <rect x="4" y="4" width="16" height="16" rx="4" />{" "}
          <circle cx="12" cy="12" r="3" />{" "}
          <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
        </svg>
        
        {/*Facebook Icon*/}{" "}
        <svg
          className="bg-white rounded-full p-[2px] h-8 w-8 text-indigo-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
        </svg>

        {/*Twitter Icon*/}{" "}
        <svg
          className="bg-white rounded-full p-[2px] h-8 w-8 text-indigo-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
        </svg>
      </div>

      <div className="w-[95vw] flex justify-around items-center font-semibold">
        <p className="underline underline-offset-[10px]">
          MindHub 2023 - Full Stack MERN - Comision 05 TM - Otavio R. Oliveira
        </p>

        <div className="text-white w-2/5 h-[3.5em] bg-[#4F46E5] flex justify-end items-center font-semibold gap-7">
          <a href="">Home</a>
          <a href="">Cities</a>
          <div>
            <button
              className="w-max h-[3.5em] text-white flex items-center justify-center gap-2"
              onClick={handleScrollToTop}
            >
              Back to top!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
