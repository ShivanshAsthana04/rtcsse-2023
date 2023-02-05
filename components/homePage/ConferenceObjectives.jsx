import React from "react";

export default function ConferenceObjectives() {
    const objectives = [
        {
            heading: "",
            body: "Providing a unique opportunity to meet educators, scholars, eminent scientists, industrialists and experts from various chemical organizations to exchange knowledge and ideas on the recent trends in chemical sciences"
        },
        {
            heading: "",
            body:"To serve as a cradle for the genesis of new ideas leading to novel possibilities for sustainable development."
        },
        {
            heading: "",
            body: "Promoting collaborative endeavors and interdisciplinary linkages to meet the global challenges."
        },
        {
            heading: "",
            body: "Providing a platform to explore newer fields at the interface of research including sustainable energy, nanotechnology and material chemistry."
        },
        {
            heading: "",
            body: "To identify innovative solutions towards a path of renewable and sustainable energy."
        },
        {
            heading: "",
            body: "Inspiring young minds towards sustainable ventures that positively impact society and future research."
        },
    ]

    return (
        <section id="objectives" className="bg-primary10 py-6">
            <div className="flex flex-col space-y-6 container mx-auto my-8 px-6 space-y-12 md:grid-cols-2">
                <h4 className=" max-w-md text-4xl font-bold text-center md:text-4xl md:text-left">Conference
                    Objectives</h4>
                <div className="grid grid-cols-1 gap-12 pt-6 md:grid-cols-2 ">
                    {objectives.map(function ({heading, body}, i) {
                        return (
                            <ConferenceObjectiveGridItem
                                index={`0${i+1}`}
                                body={body}
                                heading={heading}/>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

function ConferenceObjectiveGridItem({heading, body, index}) {
    return (
        <div className="flex flex-col md:flex-row md:space-y-0 space-y-3 md:space-x-6">
            <div className="rounded-l-full bg-primary50 md:bg-transparent">
                <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-primary50">{index}</div>

                    <h3 className="text-base font-bold md:mb-4 md:hidden">{heading}</h3>
                </div>
            </div>
            <div>
                <h3 className="hidden mb-4 text-lg font md:block">
                    {heading}
                </h3>
                <p className="text-black">{body}</p>
            </div>
        </div>
    )
}