import React, { useState } from "react";

/**
 * Designed for mobile devices with small screens. Hamburger menu icon, opens a menu covering the entire screen when clicked.
 * The menu contains a list of clickable links, placed on the bottom right corner, to be reached easy on mobile devices.
 */
const MobileHeader = (props /*currentPath: string*/) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShow(true)}
                width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>

            {show ? <div className="absolute left-0 top-0 h-screen w-screen z-30 bg-white/80 backdrop-blur-md flex items-end flex-col justify-between px-16 pt-16 pb-[50%]">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" onClick={() => setShow(false)}
                    width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>

                <ul>
                    <li className="mb-2">
                        <a href="/" className={props.currentPath === "" ? "font-semibold" : ""} title="About">About</a>
                    </li>
                    <li>
                        <a href="/living-in-munich" className={props.currentPath === "living-in-munich" ? "font-semibold" : ""} title="Photos">Photos</a>
                    </li>
                </ul>
            </div> : null}
        </>
    );
}

export default MobileHeader;
