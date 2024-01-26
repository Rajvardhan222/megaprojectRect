import React, { useId } from "react";
import { forwardRef } from "react";

let Select = forwardRef(({ options, label, className = "", ...props }, ref) => {
  const id = useId();
  return (
    <>
      <div>
        <select className = {`w-full ${className}`} {...props} ref={ref}>
           { 
           options.map((value)=>{
              <option key={options} value={options} className="" ref={ref}>
                {value}
              </option>
            })
            }
        </select>
      </div>
    </>
  );
});
Select.displayName = "Select";

export default Select;
