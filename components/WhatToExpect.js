// components/WhatToExpect.js
import React from 'react';
import 'remixicon/fonts/remixicon.css'

const WhatToExpect = ({ whatToExpect }) => {
  return (
    <div className="bg-white text-black">
      <h2 className="font-bold text-[35px] py-5">What to Expect</h2>
      <ol>
        {whatToExpect.items.map((item, index) => (
          <li key={index} className="text-[18px] list-none"><i class="ri-check-line pr-[20px]"></i>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default WhatToExpect;
