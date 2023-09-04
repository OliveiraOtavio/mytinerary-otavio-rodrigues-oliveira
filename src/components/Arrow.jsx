export default function Arrow({ direction, onClick }) {
  let d_right = "M8.25 4.5l7.5 7.5-7.5 7.5";
  let d_left = "M15.75 19.5L8.25 12l7.5-7.5";
  let d_down = "M19.5 8.25l-7.5 7.5-7.5-7.5";
  let d_up = "M4.5 15.75l7.5-7.5 7.5 7.5";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      //strokeWidth={4}
      stroke="currentColor"
      className="cursor-pointer"
      onClick={onClick}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={direction} />
    </svg>
  );
}



