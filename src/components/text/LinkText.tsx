import RegularText from "./RegularText"
import { Link } from "react-router-dom"
import { LinkTextProps } from "../../types"

const LinkText = ({ text, url }: LinkTextProps) => {
  return (
    <div
      className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
      <Link to={url}>
        <RegularText text={text} />
      </Link>
    </div>
  )
}

export default LinkText