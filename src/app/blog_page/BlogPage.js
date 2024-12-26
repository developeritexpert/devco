'use client';

import Blogtopsection from "@/app/components/blog/Blogtopsection";
// import blogs from '@/app/data/blog'; // Ensure this path points to the correct file

export default function Home(blogs) {


    return (
        <>
            <div
                className="inner_page bloginnerpage bg-black relative text-customwhite pt-20"
                style={{
                    backgroundImage: "url('/images/banner_bg.png')",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Blogtopsection blogs={blogs} />
            </div>
        </>
    );
}
