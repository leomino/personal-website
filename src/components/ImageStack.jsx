import { createSignal } from "solid-js";

/**
 * -- Solid JS component --
 * Stacks images in three shifted layers centered together in one element.
 * Depending on window size, the shiftig gets larger: shifting on mobile < shifting on desktop.
 * Supports switching between the pictures to display on top.
 */
const ImageStack = (props /* images: string[] */) => {
    const imageAmount = props.images.length;
    const [index, setIndex] = createSignal(imageAmount - 1);

    const zIndex = ['z-[0]', 'z-[1]', 'z-[2]'];

    const prev = () => {
        const next = index() - 1;
        setIndex(next >= 0 ? next : imageAmount - 1);
    }

    const next = () => {
        setIndex((index() + 1) % imageAmount);
    }

    const classes = [
        `absolute -left-2 md:-left-4 top-4 md:top-5 w-80 h-60 object-cover rounded drop-shadow-l`,
        `relative w-80 h-60 object-cover rounded`,
        `absolute left-2 md:left-4 top-2 md:top-4 w-80 h-60 object-cover rounded`
    ]

    const computeClass = (i, isCurrent) => `${classes[i]} ${isCurrent ? 'z-10' : zIndex[i]} ${!isCurrent ? 'brightness-90' : ''}`;

    return (
        <div className="mb-5 w-full flex justify-center p-4">
            <div className="relative group">

                <div className="bg-zinc-50 text-gray-800 p-1 absolute left-0 top-1/2 z-20 rounded-full opacity-0 group-hover:opacity-90 active:scale-95 cursor-pointer duration-300 ease-out" onClick={prev}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <polyline points="15 6 9 12 15 18"></polyline> 
                    </svg>
                </div>

                <div className="bg-zinc-50 text-gray-800 p-1 absolute right-0 top-1/2 z-20 rounded-full opacity-0 group-hover:opacity-90 active:scale-95 cursor-pointer duration-300 easy-out" onClick={next}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <polyline points="9 6 15 12 9 18"></polyline>
                    </svg> 
                </div>

                {props.images.map((src, i) => <img key={i} src={src} alt="404" className={computeClass(i, index() === i)} />)}
            </div>
        </div>
    );
};

export default ImageStack;