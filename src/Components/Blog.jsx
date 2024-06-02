import React from 'react'
import bl1 from "../assets/bl1.jpg"
import bl2 from "../assets/bl2.jpg"
import bl3 from "../assets/bl3.jpg"

export default function Blog() {
  return (
    <div data-aos="fade-up" data-aos-offset="200" className="container mb-10 py-8">
        <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
          Our Latest Blogs
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            <div
                id="card"
                className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
            >
                <div className="overflow-hidden">
                    <img
                        src={bl1}
                        alt="No image"
                        className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                    />
                </div>
                <div className="flex justify-between pt-2 text-slate-600">
                    <p>April 24, 2024</p>
                    <p className="line-clamp-1"> By Nur</p>
                </div>
                <div className="space-y-3 py-3">
                    <h1 className="line-clamp-1 text-xl font-bold">
                        How to grow your business.
                    </h1>
                    <p className="line-clamp-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
                        consectetur adipisicing elit.
                    </p>
                </div>
            </div>
            <div
                id="card"
                className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
            >
                <div className="overflow-hidden">
                    <img
                        src={bl2}
                        alt="No image"
                        className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                    />
                </div>
                <div className="flex justify-between pt-2 text-slate-600">
                    <p>May 03, 2024</p>
                    <p className="line-clamp-1"> By Nur</p>
                </div>
                <div className="space-y-3 py-3">
                    <h1 className="line-clamp-1 text-xl font-bold">
                        How to grow your business.
                    </h1>
                    <p className="line-clamp-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
                        consectetur adipisicing elit.
                    </p>
                </div>
            </div>
            <div
                id="card"
                className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
            >
                <div className="overflow-hidden">
                    <img
                        src={bl3}
                        alt="No image"
                        className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                    />
                </div>
                <div className="flex justify-between pt-2 text-slate-600">
                    <p>May 16, 2024</p>
                    <p className="line-clamp-1"> By Nur</p>
                </div>
                <div className="space-y-3 py-3">
                    <h1 className="line-clamp-1 text-xl font-bold">
                        How to grow your business.
                    </h1>
                    <p className="line-clamp-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
                        consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
