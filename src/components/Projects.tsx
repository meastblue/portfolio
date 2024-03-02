import { ArrowUpRight, Star } from "lucide-solid";
import Pill from "~/shared/components/Pill";


const Projects = ({ }) => {
  return (
    <section class="flex flex-col p-6">
      <h2 class="text-2xl font-bold text-dark mb-6">projects</h2>
      <div class="flex flex-col">
        <img src="~/assets/img/test.png" class="w-full mb-4" alt="" />
        <div class="flex gap-1 items-center justify-start mb-4">
          <span class="text-dark font-bold capitalize">quicktower</span>
          <ArrowUpRight class="text-dark font-bold h-4 w-4" />
        </div>
        <p class="text-dark opacity-40   mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsam
          voluptas minus ad asperiores! Aliquam odit, maxime repudiandae impedit
          vero corporis dolorum illo nemo, accusantium hic, excepturi quasi!
          Itaque, minus!
        </p>
        <div class="flex gap-2 items-center justify-start mb-4">
          <Star class="h-5 w-5" />
          <span class="text-dark font-semibold">10.3k</span>
        </div>
        <div class="flex gap-2">
          <Pill text="React" color="#61DAFB" />
          <Pill text="Tailwind" color="#06B6D4" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
