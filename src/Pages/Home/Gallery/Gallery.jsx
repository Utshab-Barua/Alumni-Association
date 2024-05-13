import { useState } from "react";

const Gallery = () => {
    const [filter, setFilter] = useState("all")
    return (
        <section className="my-28 px-5 lg:px-12">
            <div className="text-center">
                <h1 className="text-5xl font-bold brandFont text-primary">Our Gallery</h1>
            </div>

            <div className="my-16 flex items-center justify-center w-full lg:gap-7 gap-3 px-5">

                <div className={`px-6 lg:px-11 py-2 rounded-md brandFont cursor-pointer ${filter === "all" ? "bg-primary text-white" : "text-primary bg-gray-300"}`}
                    onClick={() => setFilter("all")}
                >
                    <p>All</p>
                </div>

                <div className={`px-6 lg:px-11 py-2 rounded-md brandFont cursor-pointer ${filter === "picnic" ? "bg-primary text-white" : "text-primary bg-gray-300"}`}
                    onClick={() => setFilter("picnic")}>
                    <p>Picnic</p>
                </div>

                <div className={`px-6 lg:px-11 py-2 rounded-md brandFont cursor-pointer ${filter === "recent" ? "bg-primary text-white" : "text-primary bg-gray-300"}`}
                    onClick={() => setFilter("recent")}>
                    <p>Recent</p>
                </div>

            </div>

            <div className="my-11 grid grid-cols-12 gap-5">

                <div className="col-span-12 grid grid-cols-12 gap-5">
                    <div className="col-span-full md:col-span-6 lg:col-span-4 relative">
                        <img src="https://i.ibb.co/68tY7vh/BTEC-Alumni-Association-starts-journey.jpg" alt="BTEC-Alumni-Association" className="w-96 h-72 shadow-lg rounded-lg" />

                        <div className="absolute w-full h-full bg-primary/80 top-0 rounded-lg opacity-0 hover:opacity-100 transition-all duration-700 p-3 text-white">
                            <h1 className="brandFont mb-3 text-2xl font-bold">Alumni Tour</h1>
                            <p>Reignite nostalgia and celebrate the journey back to your alma mater with our exclusive alumni tour! Relive cherished memories, explore campus updates, and reconnect with fellow graduates. Reserve your spot now for an unforgettable experience.</p>
                        </div>
                    </div>
                    <div className="col-span-full md:col-span-6 lg:col-span-4 relative">
                        <img src="https://www.portcity.edu.bd/img/inter%20footbaal%20champion2.JPG" alt="event-alumni-picnic" className="w-96 h-72 shadow-lg rounded-lg" />

                        <div className="absolute w-full h-full bg-primary/80 top-0 rounded-lg opacity-0 hover:opacity-100 transition-all duration-700 p-3 text-white">
                            <h1 className="brandFont mb-3 text-2xl font-bold">Football Tournament</h1>
                            <p>PCIU football team crowned new champion in the inter University football tournament against IIUC by 1-0.The phrase "crowned new champion" indicates that the PCIU football team emerged victorious in the tournament and was officially recognized as the best team among all the participating universities.This title is a prestigious achievement in sports,signifying that the PCIU team performed exceptionally well throughout tournament and ultimately secured championship.</p>
                        </div>
                    </div>
                    <div className="col-span-full md:col-span-6 lg:col-span-4 relative">
                        <img src="https://www.portcity.ac.bd/Convocation/src/img/convocationpicslider.jpg" className="w-96 h-72 shadow-lg rounded-lg" />

                        <div className="absolute w-full h-full bg-primary/80 top-0 rounded-lg opacity-0 hover:opacity-100 transition-all duration-700 p-3 text-white">
                            <h1 className="brandFont mb-3 text-2xl font-bold">THE 2ND CONVOCATION OF PCIU</h1>
                            <p>The 2nd Convocation of Port City International University will be held on November 26, 2022 at Navy Convention Centre, Ambagan Road, Tigerpass, Chattogram, Bangladesh.Graduating students of PCIU who completed their degree requirements between February 21, 2019 and October 7, 2022 intend to attend the Convocation are hereby advised to apply for Registration and deposit Convocation Registration Fee by October 15, 2022 through PCIU convocation website.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 grid grid-cols-12 gap-5">
                    <div className="col-span-full md:col-span-6 lg:col-span-4 relative">
                        <img src="https://www.portcity.edu.bd/img/cultural-forum/Cultural-forum-17.JPG" className="w-96 h-72 shadow-lg rounded-lg" />

                        <div className="absolute w-full h-full bg-primary/80 top-0 rounded-lg opacity-0 hover:opacity-100 transition-all duration-700 p-3 text-white">
                            <h1 className="brandFont mb-3 text-2xl font-bold">Alumni CULTURAL Program</h1>
                            <p>Port City Cultural Programs has been the biggest platform of PCIU students to display and upgrade their skills in different forms of arts since its initiation.The Cultural forum is highly committed towards Bengali culture and tradition. At the same time,it is respectful to all other cultural sects of the world.</p>
                        </div>
                    </div>
                    <div className="col-span-full md:col-span-6 lg:col-span-4 relative">
                        <img src="https://i.ibb.co/yVVP2qD/picnic3.jpg" alt="event-alumni-picnic" className="w-96 h-72 shadow-lg rounded-lg" />

                        <div className="absolute w-full h-full bg-primary/80 top-0 rounded-lg opacity-0 hover:opacity-100 transition-all duration-700 p-3 text-white">
                            <h1 className="brandFont mb-3 text-2xl font-bold">Alumni Tour</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nam fugit laudantium in omnis, commodi iure ducimus veniam impedit neque beatae autem delectus accusamus quas. Placeat beatae corporis autem? Sapiente, cumque iure? Laborum fugit facilis ratione a alias. Excepturi, iure.</p>
                        </div>
                    </div>
                    <div className="col-span-full md:col-span-6 lg:col-span-4 relative">
                        <img src="https://i.ibb.co/T0GfMCC/SJHS-Alumni-Picnic-2023-133-of-186.webp" alt="BTEC-Alumni-Association" className="w-96 h-72 shadow-lg rounded-lg" />

                        <div className="absolute w-full h-full bg-primary/80 top-0 rounded-lg opacity-0 hover:opacity-100 transition-all duration-700 p-3 text-white">
                            <h1 className="brandFont mb-3 text-2xl font-bold">Alumni Tour</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nam fugit laudantium in omnis, commodi iure ducimus veniam impedit neque beatae autem delectus accusamus quas. Placeat beatae corporis autem? Sapiente, cumque iure? Laborum fugit facilis ratione a alias. Excepturi, iure.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Gallery;
