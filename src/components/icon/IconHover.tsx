import { IconHoverProps } from "../../types"


const IconHover = ({ href, icon }: IconHoverProps) => {
  return (
    <div className="py-4">
      <a
        href={href}
        className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
      >
        <div className="text-2xl">
          {icon}
        </div>


        <span
          className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
        >
          {href}
        </span>
      </a>
    </div>
  )
}

export default IconHover