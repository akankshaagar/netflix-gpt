import { useSelector } from "react-redux";
import languages from "../utils/languageConstants";

const GPTSearchBar = () => {
  const lang = useSelector((store)=>store.config.lang);
  return (
    <div className=" w-7/12 mx-auto p-[7%]">
      <form action="" className=" bg-black flex gap-4 items-center p-2 ">
        <input type="text" placeholder={languages[lang].gptPlaceholder} className="p-2 border border-1 w-full " />
        <button className="p-2 bg-green-800 text-white rounded">{languages[lang].search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar;