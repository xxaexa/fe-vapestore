import { TextProps } from "../../types"


const SmallText = ({ text, style }: TextProps) => {
  return (
    <p className={`text-sm font-medium text-gray-700 ${style}`}>{text}</p>
  )
}

export default SmallText