
export default function MoneyIcon({ active = true}) {
  return (
    <div className={`icon-class w-[23px] ml-[5px] ${active ? '' : 'grayscale opacity-50 '}`}>
      <img src="/img/money-icon.png" alt="cash icon" />
    </div>
    
  )
}
