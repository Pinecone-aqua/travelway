export default function Profile():JSX.Element{
  return(
  
  
  <div className=" flex  bg-pink-200 h-screen">

    <div className="  w-3/6 flex flex-col me-0 ">
      <div className="bg-green-200 h-24 w-24 rounded-full "></div>
      <p>name</p>
      <input type="text" defaultValue={"Name"} className="w-32 h-10 rounded-xl" />
      <p>e Mail</p>
      <input type="eMail" className="w-32 h-10 rounded-xl" defaultValue={"Sharav@gmail.com"} />
      <p>bio</p>
      <input type="text" className="w-32 h-32 rounded-xl" defaultValue={""} />
    </div>


    <div className="w-3/6">
      <p>review history</p>
      <div className="h-32 w-96 bg-green-100 rounded-2xl my-2"></div>
      <div className="h-32 w-96 bg-green-100 rounded-2xl my-2"></div>
      <div className="h-32 w-96 bg-green-100 rounded-2xl my-2"></div>
      <div className="h-32 w-96 bg-green-100 rounded-2xl my-2"></div>
      <div className="h-32 w-96 bg-green-100 rounded-2xl my-2"></div>
    </div>

  </div>)
}
