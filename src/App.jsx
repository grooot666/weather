import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-neutral-600 p-100%'>
        <div className=''>
          <div className='border flex justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="86" viewBox="0 0 43 86" fill="none">
            <path d="M16.1296 7.58989L2.54477 32.8821C0.849461 36.0473 0 39.5213 0 43C0 46.4791 0.849461 49.9523 2.54477 53.1179L16.1296 78.4105C18.6335 83.0823 23.5304 86 28.8593 86H43.2889V78.835H43.2842C40.622 78.835 38.1737 77.3781 36.9216 75.0428L23.3418 49.7455C22.2069 47.6366 21.6413 45.3208 21.6413 43C21.6413 40.6788 22.2069 38.363 23.3418 36.2549L36.9216 10.9577C38.1737 8.62162 40.622 7.16533 43.2842 7.16533H43.2889V0H28.8593C23.5304 0 18.6335 2.91825 16.1296 7.58989Z" fill="#111111" />
          </svg>
         <svg xmlns="http://www.w3.org/2000/svg" width="44" height="86" viewBox="0 0 44 86" fill="none">
            <path d="M40.7442 32.882L27.1599 7.58993C24.6554 2.91778 19.7591 0 14.43 0H0V7.16486H0.00510914C2.66726 7.16486 5.11563 8.62166 6.36732 10.9572L19.9469 36.2543C21.0827 38.3633 21.647 40.679 21.647 42.9999C21.647 45.3211 21.0827 47.6368 19.9469 49.7454L6.36732 75.0423C5.11563 77.3783 2.66726 78.8345 0.00510914 78.8345H0V85.9999H14.43C19.7591 85.9999 24.6554 83.0821 27.1599 78.41L40.7442 53.1177C42.4388 49.9526 43.2889 46.4785 43.2889 42.9999C43.2889 39.5211 42.4388 36.0475 40.7442 32.882Z" fill="#111111" />
          </svg>
          </div>
        </div>
      </div>
      {/* <div className='bg-gray-600'>
        <div className='flex'>
          <div className='bg-gray-100'>
            <div className='bg-white-100'>
            <div>
              <p className='text-lg font-manrope'>September 10, 2021</p>
              <h1>Kraków</h1>
            </div>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M18.4768 25.5772L23.1596 17.2151C26.2226 11.7453 22.2691 5 16 5C9.73095 5 5.77737 11.7453 8.84045 17.2151L13.5232 25.5772C14.6072 27.5128 17.3928 27.5128 18.4768 25.5772Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <circle cx="16" cy="13" r="2" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg></div>
            <div>
              <img src="./sun.png" alt="" />
            </div>
            <div>
              <h1>26°</h1>
              <div>Bright</div>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
                <path d="M1.92428 9.54098L9.92428 1.8743C11.0847 0.76225 12.9153 0.76225 14.0757 1.8743L22.0757 9.54098C22.6662 10.1068 23 10.8892 23 11.7069V22C23 23.6569 21.6569 25 20 25H18H15H12H9H6H4C2.34315 25 1 23.6569 1 22V11.7069C1 10.8892 1.33385 10.1068 1.92428 9.54098Z" stroke="url(#paint0_linear_143_29)" stroke-width="2" />
                <defs>
                  <linearGradient id="paint0_linear_143_29" x1="12" y1="-1.5" x2="12" y2="26" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#111827" />
                    <stop offset="1" stop-color="#6B7280" />
                  </linearGradient>
                </defs>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M18.4768 25.5772L23.1596 17.2151C26.2226 11.7453 22.2691 5 16 5C9.73095 5 5.77737 11.7453 8.84045 17.2151L13.5232 25.5772C14.6072 27.5128 17.3928 27.5128 18.4768 25.5772Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="16" cy="13" r="2" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                <path d="M15.916 7.36858C16.1058 7.58431 16.3793 7.70794 16.6666 7.70795C16.954 7.70796 17.2275 7.58435 17.4173 7.36864C19.8166 4.64263 23.9519 4.1919 26.8935 6.42021C29.9751 8.75461 30.5809 13.1452 28.2465 16.2268L22.1863 24.2268C20.8559 25.9831 18.7762 27.0105 16.5729 26.9999C14.3696 26.9893 12.2998 25.942 10.9863 24.173L5.04639 16.173C2.74173 13.069 3.38969 8.68448 6.49363 6.37982C9.43817 4.19353 13.5363 4.66439 15.916 7.36858Z" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M3 24.9809C3 20.6434 7.15158 17.5119 11.3222 18.7035L14.787 19.6934C15.5798 19.92 16.4202 19.92 17.213 19.6934L20.6778 18.7035C24.8484 17.5119 29 20.6434 29 24.9809C29 27.2006 27.2006 29 24.9809 29H7.01908C4.7994 29 3 27.2006 3 24.9809Z" stroke="#D1D5DB" stroke-width="2" />
                <circle cx="16" cy="9" r="6" stroke="#D1D5DB" stroke-width="2" />
                <path d="M15 9C15 9.55228 15.4477 10 16 10C16.5523 10 17 9.55228 17 9C17 8.44772 17.4477 8 18 8C18.5523 8 19 8.44772 19 9C19 10.6569 17.6569 12 16 12C14.3431 12 13 10.6569 13 9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9Z" fill="#D1D5DB" />
              </svg>
            </div>
            </div>
          </div>
          <div className='bg-black'>
            black
          </div>
        </div>
      </div> */}
    </>
  )
}

export default App
