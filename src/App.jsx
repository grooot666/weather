import { useEffect, useState } from 'react'
import countriesData from './data'
import LocationIcon from './icons/Location-Icon'
import SearchIcon from './icons/Search-Icon'
import ZvrhIcon from './icons/Zvrh-Icon'
import ManIcon from './icons/Man-Icon'
import BaishinIcon from './icons/Baishin-Icon'
import PineIcon from './icons/Pine-icon'
import ConeIcon from './icons/Cone-Icon'

const getAllCities = (countries) => {
  const citiesAndCountry = countries.flatMap((country) =>
    country.cities.map((city) => `${city}, ${country.country}`)
  );
  return citiesAndCountry;
};

function App() {
  const [allCities, setAllCities] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCity, setSelectedCity] = useState("UlaanBaatar,Mongolia");
  const [filteredData, setFiltereData] = useState([]);
  const [weatherData, setWeatherData] = useState({});

  const getCountries = async () => {
   
    const response = await fetch("https://countriesnow.space/api/v0.1/countries")
    const result = await response.json();
    setAllCities(getAllCities(result.data))
  };


  const onChange = (e) => {
    setSearchValue(e.target.value);
    const filtered = allCities.filter((el) => el.includes(searchValue.toLowerCase())).slice(0,4)
    setFiltereData(filtered)
  }
  useEffect(() => {
    getCountries()
  }, []);

  const checker = filteredData.length > 0 && searchValue.length > 0

  // unstable_renderSubtreeIntoContainer

  return (
    <>
      <div className='w-screen h-screen flex items-center justify-center relative '>
        {/* search */}
        <div className='absolute z-30  gap-[20px] flex-col flex mt-[-1100px]'>
          <div className='flex bg-[#FFF] rounded-[40px]  p-[16px] '>
          <SearchIcon className=' ' />
          <input placeholder='search...' className='w-[500px] min-w-max  ' type="text" value={searchValue} onChange={onChange} />
          </div>
          
            
          {checker && (<div className='bg-[#FFF] rounded-2xl p-10 ' > {filteredData.map((el)=>{
           return <p key={el} className='text-[black]'>{el}</p>
          
          })}</div>)}

          
        </div>
       
        {/* left side*/}
        <div className='bg-[#F3F4F6] w-screen h-screen flex items-center justify-center  '>

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
              <BaishinIcon />
              <LocationIcon />
              <ZvrhIcon />
              <ManIcon />
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
              <LocationIcon />
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
              <BaishinIcon />
              <LocationIcon />
              <ZvrhIcon />
              <ManIcon />

            </div>
          </div>

        </div>
        {/* circle */}
        <div className='absolute flex items-center justify-center '>


          <div className='w-[140px] h-[140px] absolute  bg-[#F3F4F6] rounded-full border-gray-300 border  flex items-center justify-center gap-[20px] '>

            <PineIcon />
            <ConeIcon />


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




