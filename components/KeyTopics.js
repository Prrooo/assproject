// components/KeyTopics.js
import React from 'react';

const KeyTopics = ({ keyTopics }) => {
  return (
    <div>
      <h2 className="font-bold text-[35px] py-6">Key Topics</h2>
      <div dangerouslySetInnerHTML={{ __html: keyTopics.html_content }}
      className="text-[18px]" />
      <div dangerouslySetInnerHTML={{__html: keyTopics.list}}
      
      className="text-[18px] pt-[30px]" />
    </div>
  );
};

export default KeyTopics;
