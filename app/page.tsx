export default function GridLayout() {
  return (
    <div className="bg-yellow-100 p-4">
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4">
        
        {/* AG1 - Left Side */}
        <div className="col-span-1 rounded-md md:col-span-2 lg:col-span-2 bg-teal-400 flex items-center justify-center text-white font-bold h-[900px]">
          AG1 <br /> 2 of 10
        </div>

        {/* Middle Content - 6 of 10 width */}
        <div className="col-span-1 md:col-span-2 lg:col-span-6 grid grid-rows-6 gap-0">
          {/* AG2 */}
          <div className="bg-yellow-300 flex items-center justify-center text-black font-bold min-h-[150px] rounded-md">
            AG2 <br /> 6 of 10
          </div>

          {/* AG4 and AG5 - 50% Width each */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="bg-pink-300 flex items-center justify-center text-black font-bold min-h-[150px]">
              AG4 <br /> 3 of 6
            </div>
            <div className="bg-red-300 flex items-center justify-center text-white font-bold min-h-[150px]">
              AG5 <br /> 3 of 6 (omega) 
            </div>
          </div>

          {/* AG6 and AG7 in the same row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-blue-700">
              
            {/* AG6 */}
            <div className="bg-orange-300 flex items-center justify-center text-black font-bold min-h-[300px]">
              AG6 <br /> 2 of 6
            </div>

            {/* AG7 */}
            <div className="bg-yellow-400 flex flex-col gap-4 text-black font-bold min-h-[300px] ">
              {/* AG8 and AG9 */}
              <div className="flex gap-4">
                <div className="flex-1 bg-pink-200 flex items-center justify-center min-h-[100px] ">
                  AG8 <br /> 2 of 8
                </div>
                <div className="flex-1 bg-pink-200 flex items-center justify-center min-h-[100px] ">
                  AG9 <br /> 2 of 4
                </div>
              </div>

              {/* AG10 */}
              <div className="bg-purple-200 flex items-center justify-center min-h-[100px]  rounded-md">
                AG10 <br /> auto
              </div>
            </div>
          </div>
        </div>

        {/* AG3 - Right Side */}
        <div className="rounded-md col-span-1 md:col-span-2 lg:col-span-2 bg-teal-400 flex items-center justify-center text-white font-bold h-[900px]">
          AG3 <br /> 2 of 10 (omega)
        </div>
      </div>
    </div>
  );
}
