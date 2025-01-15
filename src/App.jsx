import { useEffect, useState } from 'react'
import countriesData from './data'
import LocationIcon from './icons/Location-Icon'
import SearchIcon from './icons/search-icon'
import { use } from 'react'



function App() {
  const [allCities, setAllCities] = useState([])
  const [searchValue, setSearchValue] = useState("")

  const getCities = async () => {
    const response = await fetch("https://countriesnow.space/api/v0.1/countries")
    const result = await response.json()
    setAllCities(result)
  }
  console.log(allCities)
  const handleSearchChange=(e)=>{
    setSearchValue(e.target.value)
  }
  console.log(searchValue)


  useEffect(()=>{
    getCities()
  },[])

  return (
    <>
      <div className='w-screen h-screen flex items-center justify-center relative '>

        {/* left side*/}
        <div className='bg-[#F3F4F6] w-screen h-screen flex items-center justify-center  '>
          {/* search */}
          <div className='absolute z-30 mt-[-1000px] p-[16px] bg-[#FFF] rounded-[40px] mr-[126px] flex'>

            <SearchIcon className=' ' />
            <input className='w-[500px] min-w-max ' type="text" value={searchValue} onChange={handleSearchChange}/>
          </div>
          {/* left container */}
          <div className='w-[414px] h-[896px] bg-[#F9FAFB] z-20   rounded-3xl flex flex-col gap-5'>
            <div className='flex  pt-[56px] pl-[40px] gap-[120px] items-center'>
              <div>
                <p className='text-[18px]'>September 10, 2021</p>
                <h1 className='text-[48px] w-[174px]'>Ulaanbaatar</h1>
              </div>
              <div className=''>
                <LocationIcon />
              </div>
            </div>

            <div className='flex justify-center items-center'>
              <img className='w-[350px] h-[350px]  ' src="./sun.png" alt="" />
            </div>



            <div className='flex items-start flex-col pl-[48px]'>
              <h1 className='text-[144px] p-[0px]'>
                26°
              </h1>

              <p className='text-[24px] text-yellow-600 '>Bright</p>

            </div>
            <div className=' flex  space-x-16 justify-center pt-[20px] '>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.92428 12.541L13.9243 4.8743C15.0847 3.76225 16.9153 3.76225 18.0757 4.8743L26.0757 12.541C26.6662 13.1068 27 13.8892 27 14.7069V25C27 26.6569 25.6569 28 24 28H22H19H16H13H10H8C6.34315 28 5 26.6569 5 25V14.7069C5 13.8892 5.33385 13.1068 5.92428 12.541Z" stroke="url(#paint0_linear_20_195)" stroke-width="2" />
                <defs>
                  <linearGradient id="paint0_linear_20_195" x1="16" y1="1.5" x2="16" y2="29" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#111827" />
                    <stop offset="1" stop-color="#6B7280" />
                  </linearGradient>
                </defs>
              </svg>
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.8101 25.5772L23.4929 17.2151C26.556 11.7453 22.6024 5 16.3333 5C10.0643 5 6.1107 11.7453 9.17378 17.2151L13.8566 25.5772C14.9405 27.5128 17.7262 27.5128 18.8101 25.5772Z" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="16.3333" cy="13" r="2" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.916 7.36858C16.1058 7.58431 16.3793 7.70794 16.6666 7.70795C16.954 7.70796 17.2275 7.58435 17.4173 7.36864C19.8166 4.64263 23.9519 4.1919 26.8935 6.42021C29.9751 8.75461 30.5809 13.1452 28.2465 16.2268L22.1863 24.2268C20.8559 25.9831 18.7762 27.0105 16.5729 26.9999C14.3696 26.9893 12.2998 25.942 10.9863 24.173L5.04639 16.173C2.74173 13.069 3.38969 8.68448 6.49363 6.37982C9.43817 4.19353 13.5363 4.66439 15.916 7.36858Z" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 24.9809C3 20.6434 7.15158 17.5119 11.3222 18.7035L14.787 19.6934C15.5798 19.92 16.4202 19.92 17.213 19.6934L20.6778 18.7035C24.8484 17.5119 29 20.6434 29 24.9809C29 27.2006 27.2006 29 24.9809 29H7.01908C4.7994 29 3 27.2006 3 24.9809Z" stroke="#D1D5DB" stroke-width="2" />
                <circle cx="16" cy="9" r="6" stroke="#D1D5DB" stroke-width="2" />
                <path d="M15 9C15 9.55228 15.4477 10 16 10C16.5523 10 17 9.55228 17 9C17 8.44772 17.4477 8 18 8C18.5523 8 19 8.44772 19 9C19 10.6569 17.6569 12 16 12C14.3431 12 13 10.6569 13 9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9Z" fill="#D1D5DB" />
              </svg>

            </div>
          </div>

        </div>
        {/* right side */}
        <div className='bg-[#0F141E] w-screen h-screen flex items-center justify-center '>
          {/* right container */}
          <div className='w-[414px] h-[896px] bg-slate-900 z-20   rounded-3xl flex flex-col gap-5'>
            <div className='flex  pt-[56px] pl-[40px] gap-[120px] items-center'>
              <div>
                <p className='text-[18px] text-stone-50 '>September 10, 2021</p>
                <h1 className='text-[48px] w-[174px] text-stone-50'>Ulaanbaatar</h1>
              </div>
              <div className=''>
                <svg className=' ' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.4768 25.5772L23.1596 17.2151C26.2226 11.7453 22.2691 5 16 5C9.73095 5 5.77737 11.7453 8.84045 17.2151L13.5232 25.5772C14.6072 27.5128 17.3928 27.5128 18.4768 25.5772Z" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <circle cx="16" cy="13" r="2" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>

            <div className='flex justify-center items-center'>
              <img className='w-[350px] h-[350px]  ' src="./moon.png" alt="" />
            </div>



            <div className='flex items-start flex-col pl-[48px]'>
              <h1 className='text-[144px] p-[0px] text-stone-50'>
                26°
              </h1>

              <p className='text-[24px] text-indigo-500 '>Clear</p>

            </div>
            <div className=' flex  space-x-16 justify-center pt-[20px] '>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.92428 12.541L13.9243 4.8743C15.0847 3.76225 16.9153 3.76225 18.0757 4.8743L26.0757 12.541C26.6662 13.1068 27 13.8892 27 14.7069V25C27 26.6569 25.6569 28 24 28H22H19H16H13H10H8C6.34315 28 5 26.6569 5 25V14.7069C5 13.8892 5.33385 13.1068 5.92428 12.541Z" stroke="url(#paint0_linear_20_195)" stroke-width="2" />
                <defs>
                  <linearGradient id="paint0_linear_20_195" x1="16" y1="1.5" x2="16" y2="29" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#111827" />
                    <stop offset="1" stop-color="#6B7280" />
                  </linearGradient>
                </defs>
              </svg>
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.8101 25.5772L23.4929 17.2151C26.556 11.7453 22.6024 5 16.3333 5C10.0643 5 6.1107 11.7453 9.17378 17.2151L13.8566 25.5772C14.9405 27.5128 17.7262 27.5128 18.8101 25.5772Z" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="16.3333" cy="13" r="2" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.916 7.36858C16.1058 7.58431 16.3793 7.70794 16.6666 7.70795C16.954 7.70796 17.2275 7.58435 17.4173 7.36864C19.8166 4.64263 23.9519 4.1919 26.8935 6.42021C29.9751 8.75461 30.5809 13.1452 28.2465 16.2268L22.1863 24.2268C20.8559 25.9831 18.7762 27.0105 16.5729 26.9999C14.3696 26.9893 12.2998 25.942 10.9863 24.173L5.04639 16.173C2.74173 13.069 3.38969 8.68448 6.49363 6.37982C9.43817 4.19353 13.5363 4.66439 15.916 7.36858Z" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 24.9809C3 20.6434 7.15158 17.5119 11.3222 18.7035L14.787 19.6934C15.5798 19.92 16.4202 19.92 17.213 19.6934L20.6778 18.7035C24.8484 17.5119 29 20.6434 29 24.9809C29 27.2006 27.2006 29 24.9809 29H7.01908C4.7994 29 3 27.2006 3 24.9809Z" stroke="#D1D5DB" stroke-width="2" />
                <circle cx="16" cy="9" r="6" stroke="#D1D5DB" stroke-width="2" />
                <path d="M15 9C15 9.55228 15.4477 10 16 10C16.5523 10 17 9.55228 17 9C17 8.44772 17.4477 8 18 8C18.5523 8 19 8.44772 19 9C19 10.6569 17.6569 12 16 12C14.3431 12 13 10.6569 13 9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9Z" fill="#D1D5DB" />
              </svg>

            </div>
          </div>

        </div>
        {/* circle */}
        <div className='absolute flex items-center justify-center '>


          <div className='w-[140px] h-[140px] absolute  bg-[#F3F4F6] rounded-full border-gray-300 border  flex items-center justify-center gap-[20px] '>

            <svg width="43" height="86" viewBox="0 0 43 86" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1296 7.58989L2.54477 32.8821C0.849461 36.0473 0 39.5213 0 43C0 46.4791 0.849461 49.9523 2.54477 53.1179L16.1296 78.4105C18.6335 83.0823 23.5304 86 28.8593 86H43.2889V78.835H43.2842C40.622 78.835 38.1737 77.3781 36.9216 75.0428L23.3418 49.7455C22.2069 47.6366 21.6413 45.3208 21.6413 43C21.6413 40.6788 22.2069 38.363 23.3418 36.2549L36.9216 10.9577C38.1737 8.62162 40.622 7.16533 43.2842 7.16533H43.2889V0H28.8593C23.5304 0 18.6335 2.91825 16.1296 7.58989Z" fill="#111111" />
            </svg>
            <svg width="44" height="86" viewBox="0 0 44 86" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40.7442 32.882L27.1599 7.58993C24.6554 2.91778 19.7591 0 14.43 0H0V7.16486H0.00510914C2.66726 7.16486 5.11563 8.62166 6.36732 10.9572L19.9469 36.2543C21.0827 38.3633 21.647 40.679 21.647 42.9999C21.647 45.3211 21.0827 47.6368 19.9469 49.7454L6.36732 75.0423C5.11563 77.3783 2.66726 78.8345 0.00510914 78.8345H0V85.9999H14.43C19.7591 85.9999 24.6554 83.0821 27.1599 78.41L40.7442 53.1177C42.4388 49.9526 43.2889 46.4785 43.2889 42.9999C43.2889 39.5211 42.4388 36.0475 40.7442 32.882Z" fill="#111111" />
            </svg>


          </div>
          <div className='w-[340px] h-[340px] absolute rounded-full border-gray-300 border'></div>
          <div className='w-[640px] h-[640px] absolute rounded-full border-gray-300 border'></div>
          <div className='w-[1140px] h-[1140px] absolute rounded-full border-gray-300 border'></div>
          <div className='w-[1740px] h-[1740px] absolute rounded-full border-gray-300 border'></div>

        </div>
      </div>
    </>
  )
}

export default App




