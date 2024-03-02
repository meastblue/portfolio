import { JSX, createSignal, } from "solid-js";

import { CornerDownRight, MapPin } from "lucide-solid";

interface Career {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Scholarship {
  institution: string;
  program: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

type CareerOrScholarship = Career | Scholarship;

const CareerOrScholarshipEntry = (props: { entry: CareerOrScholarship; isLast: boolean, key: number }): JSX.Element => {
  const { entry, isLast } = props;
  const isCareer = "company" in entry;

  return (
    <div class={`flex gap-6 items-center justify-start ${!isLast && "mb-6"}`}>
      <div class="rounded-full bg-gradient-to-t from-light to-blue p-[3px]">
        <div class="flex items-center justify-center h-full w-full rounded-full bg-light p-2">
          <CornerDownRight class="h-6 w-6 text-blue" />
        </div>
      </div>
      <div class="flex flex-col">
        <div class="flex gap-3 mb-3">
          <h3 class="text-lg font-bold text-dark capitalize">
            {isCareer ? (entry as Career).company : (entry as Scholarship).institution}
          </h3>
          <p class="text-dark opacity-30">
            {entry.startDate} - {entry.endDate}
          </p>
        </div>
        <span class="text-dark font-semibold opacity-50 capitalize mb-3">
          {isCareer ? (entry as Career).position : (entry as Scholarship).program}
        </span>
        <p class="text-dark opacity-50 mb-3">{entry.description}</p>
        <div class="flex">
          <MapPin class="h-6 w-6 text-dark opacity-30" />
          <span class="text-dark opacity-30 uppercase">{entry.location}</span>
        </div>
      </div>
    </div>
  );
};


const Journey = () => {
  const [showCareers, setShowCareers] = createSignal(true);
  const careers: Career[] = [
    {
      company: "Apple",
      position: "Head of Design",
      location: "Cupertino, California, USA",
      startDate: "Jul. 2008",
      endDate: "Apr. 2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      company: "Spotify",
      position: "Product Designer",
      location: "Stockholm, Sweden",
      startDate: "Nov. 2004",
      endDate: "May. 208",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      company: "Google",
      position: "UX Designer",
      location: "Mountain View, California, USA",
      startDate: "Jan. 2000",
      endDate: "Dec. 2004",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  const scholarships: Scholarship[] = [
    {
      institution: "University of California",
      program: "Computer Science",
      location: "Berkeley, California, USA",
      startDate: "Sep. 2019",
      endDate: "May. 2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      institution: "Harvard University",
      program: "Economics",
      location: "Cambridge, Massachusetts, USA",
      startDate: "Sep. 2015",
      endDate: "May. 2019",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      institution: "Stanford University",
      program: "Design Thinking",
      location: "Stanford, California, USA",
      startDate: "Sep. 2010",
      endDate: "May. 2014",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section class="flex flex-col p-6">
      <div class="flex gap-3 mb-6">
        <h2
          class={`text-2xl font-bold text-dark cursor-pointer ${!showCareers ? "opacity-25" : "opacity-100"
            }`}
          onClick={() => setShowCareers(true)}
        >
          Career
        </h2>
        <h2
          class={`text-2xl font-bold text-dark cursor-pointer ${!showCareers ? "opacity-100" : "opacity-25"
            }`}
          onClick={() => setShowCareers(false)}
        >
          Scholarship
        </h2>
      </div>
      <div class={`${!showCareers ? "opacity-0 hidden" : "opacity-100"}`}>
        {careers.map((career, index) => (
          <CareerOrScholarshipEntry
            key={index}
            entry={career}
            isLast={index === careers.length - 1}
          />
        ))}
      </div>
      <div class={`${!showCareers ? "opacity-100" : "opacity-100 hidden"}`}>
        {scholarships.map((scholarship, index) => (
          <CareerOrScholarshipEntry
            key={index}
            entry={scholarship}
            isLast={index === scholarships.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Journey;
