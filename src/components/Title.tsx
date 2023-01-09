import { IconLeft } from "../icons/IconLeft"
import { IconRight } from "../icons/IconRight"

interface Props {
    page: number,
    setPage: (p: number)=>void
}
export const Title = ({page, setPage}: Props) => {
    return (
        <div className="title py-8 text-center">
          {page === 1 ?  <div className="flex flex-row items-center"><h1 className="text-6xl font-black">Basic Drag & Drop</h1> <IconRight onClick={setPage} />
          </div> : <div className="flex flex-row items-center"><IconLeft onClick={setPage}  /> <h1 className="text-6xl font-black">File Drag & Drop</h1></div>  }
           
        </div>
    )
}