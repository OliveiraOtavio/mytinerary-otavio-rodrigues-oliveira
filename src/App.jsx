import MainLayout from "./layouts/MainLayout";
import Arrow from "./components/Arrow";
import CardHome from "./components/CardHome";

function App() {

  let data = [
    { "id": "am1", "city": "Cancun", "photo": "/img/america/cancun.jpg" },
    { "id": "am2", "city": "New York", "photo": "/img/america/newyork.jpg" },
    { "id": "am3", "city": "Rio de Janeiro", "photo": "/img/america/rioDeJaneiro.jpg"},
    { "id": "am4", "city": "Ushuaia", "photo": "/img/america/ushuaia.jpg" },
    { "id": "as1", "city": "Bangkok", "photo": "/img/asia/bangkok.jpg" },
    { "id": "as2", "city": "Pekin", "photo": "/img/asia/pekin.jpg" },
    { "id": "as3", "city": "Singapur", "photo": "/img/asia/singapur.jpg" },
    { "id": "as4", "city": "Tokyo", "photo": "/img/asia/tokio.jpg" },
    { "id": "eu1", "city": "Ibiza", "photo": "/img/europe/ibiza.jpg" },
    { "id": "eu2", "city": "London", "photo": "/img/europe/london.jpg" },
    { "id": "eu3", "city": "Paris", "photo": "/img/europe/paris.jpg" },
    { "id": "eu4", "city": "Roma", "photo": "/img/europe/roma.jpg" },
    { "id": "oc1", "city": "Majuro", "photo": "/img/oceania/majuro.jpg" },
    { "id": "oc2", "city": "Sidney", "photo": "/img/oceania/sidney.jpg" },
    { "id": "oc3", "city": "Suva", "photo": "/img/oceania/suva.jpg" },
    { "id": "oc4", "city": "Wellington", "photo": "/img/oceania/wellington.jpg" }
]

  return (
    <MainLayout>
      <main className="flex items-top flex-col sm:flex-row w-[1291px] mt-20 border-2 border-blue-500">
        <div className="flex-1 border-2 border-green-500 mt-[150px] mb-[100px]"> 
          <h2 className="font-[700] text-[48px]">Find the perfect destination</h2>
          <p className="w-[610px] h-[96px] mt-3 mr-[30px] text-[#1C1C1C]">Our app will help you find the perfect path for your next trip. With an easy-to-use 
            interface and a host of itinerary options, planning your next trip has never been easier.</p>
          <button className="bg-[#4F46E5] w-[346px] h-[64px] rounded-[8px] text-white ">View More</button>
        </div>

        {/* CARROUSEL */}
        <div className="flex justify-center items-center bg-blue-900 rounded-[10px] p-[5px] m-[5px]">
          <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" />
          <div className="grid grid-cols-2  my-[30px]">
            {data.slice(0,4).map(each=> <CardHome key={each.id} src={each.photo} alt={each.id} text={each.city} /> )}                       
          </div>
          <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </div>


      </main>
    </MainLayout>
  )
}

export default App;