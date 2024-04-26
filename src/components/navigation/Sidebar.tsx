import LinkText from "../text/LinkText"

// icon
import { CiSettings } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="flex h-screen flex-col justify-between border-e bg-white">
      <div className="px-4 py-6">
        <div className=" border-b border-gray-200 w-full">
          VAPE - STORE
        </div>

        <ul className="mt-6 space-y-1">
          <LinkText text={"Home"} url={"/dashboard"} />
          <LinkText text={"Order"} url={"order"} />
          <LinkText text={"Product"} url={"product"} />
          <LinkText text={"Category"} url={"category"} />
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <LinkText text={"Logout"} url={"/logout"} />
      </div>
    </div>
  )
}

export default Sidebar