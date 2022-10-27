import React, { useState } from "react";

const Header = () => {
    const [show, setShow] = useState(false);

    return (
        !show ? 
        <div className="py-3 border-b-2 border-dotted text-slate-800 text-[0.95rem]">
            <div className="max-w-screen-md m-auto flex justify-between px-4">
                <span>Hey there 👋, welcome to my personal website</span>
                
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShow(true)}
                    width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="4" y1="6" x2="20" y2="6"></line>
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
            </div>
        </div> : 
        <div className="absolute top-0 h-screen w-screen z-30 bg-white/95 flex items-end flex-col justify-between px-16 pt-16 pb-[50%]">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" onClick={() => setShow(false)}
                width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>

            <div className="flex flex-col gap-2">
                <a href="/" className={"underline decoration-2 font-semibold"} title="Home">Home</a>
                <a href="/living-in-munich" className={"underline"} title="Photos">Photos</a>
            </div>
        </div>
    )
}

export default Header;
