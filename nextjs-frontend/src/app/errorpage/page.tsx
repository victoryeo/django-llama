import { Navbar } from "../../libs/ui/component/navbar";

export default async function Page(
    { searchParams }: 
    {
        searchParams: 
        { [key: string]: string | string[] | undefined };
    }
  ) {
  
  console.log(searchParams)
  
  return (
    <div className="">
        <Navbar />
        <div className="grid grid-rows-2 md:grid-cols-2 gap-y-4 gap-x-4 px-40"
      style={{ backgroundColor: "#ffffff" }}>
            <div>
            <a href='/'>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt=""/>
            </a>
            </div>
            <div>
                <div className="grid grid-rows-2 md:grid-cols-1 gap-y-4 gap-x-4 px-40"
                    style={{ backgroundColor: "#ffffff" }}>  
                    <div className="bg-transparent text-black-700 font-semibold text-xl">
                        There is error : {searchParams['error']}
                    </div>
            
                </div>
            </div>
        </div>
    </div>
 )
}