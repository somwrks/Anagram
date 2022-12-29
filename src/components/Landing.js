import React from "react";

export default function Landing() {
  return (
    <div className="colorful-blur transition-fade">

  <div className="container pt-5 mx-auto my-auto flex-wrap flex-col flex text-white center">
      <div className="container heading p-5 flex flex-wrap flex-col  text-center ">
        <span className="heading-upper animate-character">Anagram.</span>
        <span className="transition-slideup text-5xl text-center ">
          Business & Educational
        </span>
        <span className="transition-slideup text-5xl text-center ">
          Consulting
        </span>
        <span className="transition-slideup text-gray-400 mt-4 text-4xl">
          <q>Pefection comes with detailing</q>{" "}
        </span>
      </div>

      <div className="container pt-5 flex flex-wrap flex-row">
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mb-10">
          <div class="rounded h-auto land-card overflow-hidden shadow-lg">
            <div class="p-5">
              <div class="font-bold transition-slideright text-9xl mb-2 text-transparent bg-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">
              <nobr>

                <q>Improvement</q>
              </nobr>
              </div>
              <div class="text-gray-400 card-p text-xl">
                <nobr>
                We understand that every firm whether it’s big or 
                </nobr>
              </div>
              <div class="text-gray-400 card-p text-xl">
                <nobr>
                start-up needs regular qualitative and operational enhancement
                </nobr>
              </div>
              <div class="text-gray-400 card-p text-xl">
                <nobr>
                improvement to match the market trends and regime.
                </nobr>
              </div>
            </div>
          </div>

          <div class="rounded land-card transition-slideright overflow-hidden shadow-lg">
            <div class="p-5">
              <div class="font-bold text-center text-9xl mb-2 text-transparent bg-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">
              <nobr>

                <q>Efforts</q>
              </nobr>
              </div>
              <div class="text-gray-400 card-p text-xl">
                <nobr>
                We bargain the logical and precise vivacity 
                </nobr>
              </div>
              <div class="text-gray-400 card-p text-xl">
                <nobr>
                ongoing tasks to enhance efficiency by rearranging 
                </nobr>
              </div>
              <div class="text-gray-400 card-p text-xl">
                <nobr>
                efforts with our esteemed experienced Anagrammers
                </nobr>
              </div>
            </div>
          </div>

          <div class="rounded  land-card transition-slideright overflow-hidden shadow-lg">
            <div class="p-5">
              <div class="font-bold text-9xl mb-2 text-transparent bg-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">
              <nobr>

                <q>Experience</q>
              </nobr>
              </div>
              <div class="text-gray-400 card-p text-xl">
                <nobr>
                Our Anagrammers comes with wide industrial experience 
                </nobr>
              </div>
              <div class="text-gray-400 card-p text-xl">
                <nobr>
                leading global brands as well as start-ups like
                </nobr>
              </div>
              <div class="text-gray-400 card-p text-xl">
                <nobr>
                diversified knowledge and exposure of different business interfaces
                </nobr>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
}
