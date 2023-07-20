import Image from 'next/image'

export default function Home() {
  return (
   <>
  
  <header className="border-b-2 border-gray-200">
    <nav className="flex gap-48 items-center py-5 pl-12">
      <div>
        <img src="/Images/WhatsApp_Image_2023-06-29_at_19.44 1.png" alt="logo" width="200px" />
      </div>
      <div>
        <ul className="flex gap-7">
          <li className="font-semibold text-base"><a href="#">Home</a></li>
          <li className="font-semibold text-base"><a href="#">Pakages</a></li>
          <li className="font-semibold text-base"><a href="#">Experience</a></li>
          <li className="font-semibold text-base">
            <a href="#">Become a Host</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  {/* ////////////////////// header end ///////////////////////////// */}
  {/* ////////////////////// hero setion start ///////////////////////////// */}
  <section className="bg-red-200 flex relative">
    <div className=''>
      <div style={{height: '35rem', width: '50rem', backgroundImage: 'url("/Images/Rectangle\ 4.png")'}} className="bg-no-repeat absolute z-10 left-44 bg-cover bg-center">
        <div className="mt-12 ml-8">
          <h1 className="text-3xl font-bold pb-4">Vacation Rentals in India</h1>
          <p>Find and book unique accomodation on Rentals</p>
        </div>
        <div className="relative mt-24 bg-gray-100 flex rounded-full" style={{width: '80%'}}>
          <div className="px-4 py-2">
            <h1 className="font-bold border-r border-gray-400">Location</h1>
            <p style={{marginTop: 4}} className="border-r border-gray-400 text-gray-500 pr-2">
              Where are you going
            </p>
          </div>
          <div className="py-2 mr-20">
            <h1 className="font-bold px-2">Check-In-Check-Out</h1>
            <p style={{marginTop: 4}} className="text-gray-500 px-2">
              Add dates
            </p>
          </div>
          <div>
            <div className="flex justify-between gap-6 mb-3 items-center absolute right-0 bg-gray-100 p-2 rounded-full shadow-lg shadow-gray-950 ml-">
              <div className="pl-4">
                <h1 className="font-bold">Guest</h1>
                <p style={{marginTop: 4}} className="text-gray-500">
                  Add guests
                </p>
              </div>
              <div className="flex cursor-pointer gap-2 items-center justify-center button py-3 bg-gradient-t bg-black text-white rounded-full px-6">
                <div>
                  <img src="/Images/AppListIcon.targetsize-256_altform-unplated.png" alt='' width="20px
                " />
                </div>
                <div>Search</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-4 ml-1 gap-1 items-center">
          <h1>Categories:</h1>
          <p className="font-bold underline text-sm">Pet Friendly,</p>
          <p className="font-bold underline text-sm">Carporate Events,</p>
          <p className="font-bold underline text-sm">Family Vacation,</p>
          <p className="font-bold underline text-sm">Rumantic Getway,</p>
        </div>
      </div>
      <div style={{height: '35rem', width: '40rem', backgroundImage: 'url("/Images/Rectangle\ 3.png")'}} className="bg-no-repeat absolute right-0 bg-cover" />
    </div>
  </section>


   </>
  )
}
