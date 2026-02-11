import React from 'react'

type props={
  title:string;
  description:string;
}

const Header = ({title,description}:props) => {
  return (
    <div className="bg-main text-white text-center py-12 ">
      <div className="container space-y-6">
        <h1 className=" font-bold "> {title}</h1>
        <p className="lg:text-4xl md:text-3xl text-2xl font-bold">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Header