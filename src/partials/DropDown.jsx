import React from 'react';

function DropDown({ title, options, func, value }) {
  return (
    <div className="dropdown h-full w-52 p-1 rounded-md bg-zinc-700">
      <select
        onChange={func}
        className="w-full outline-none bg-transparent"
        value={value}         // controlled select
        name="format"
        id="format"
      >
        <option className="font-semibold bg-zinc-700" value="" disabled>
          {title}
        </option>
        {options.map((o) => (
          <option key={o} className="font-semibold bg-zinc-700" value={o}>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
