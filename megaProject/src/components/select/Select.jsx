import React, { useId } from "react";
import { forwardRef } from "react";

let Select = forwardRef(({ options, label, className = "", ...props }, ref) => {
 
  return (
    <>
      <div>
        <select className = {`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} {...props} ref={ref}>
           { 
           options.map((value)=>(
              <option key={value} value={value}  >
                {value}
              </option>
            ) )
            }
        </select>
      </div>
    </>
  );
});
Select.displayName = "Select";

export default Select;
