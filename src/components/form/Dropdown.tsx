import SmallText from "../text/SmallText"
import { GoChevronDown } from "react-icons/go";
const Dropdown = () => {
  return (
    <details
      className="overflow-hidden rounded border border-gray-300"
    >
      <summary
        className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
      >
        <SmallText text="Category" />
        <span className="transition group-open:-rotate-180">
          <GoChevronDown />
        </span>
      </summary>

      <div className="border-t border-gray-200 bg-white">
        <ul className="space-y-1 border-t border-gray-200 p-4">
          <li>
            <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                id="FilterInStock"
                className="size-5 rounded border-gray-300"
              />

              <span className="text-sm font-medium text-gray-700"> In Stock (5+) </span>
            </label>
          </li>

          <li>
            <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                id="FilterPreOrder"
                className="size-5 rounded border-gray-300"
              />

              <span className="text-sm font-medium text-gray-700"> Pre Order (3+) </span>
            </label>
          </li>

          <li>
            <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                id="FilterOutOfStock"
                className="size-5 rounded border-gray-300"
              />

              <span className="text-sm font-medium text-gray-700"> Out of Stock (10+) </span>
            </label>
          </li>
        </ul>
      </div>
    </details>
  )
}

export default Dropdown