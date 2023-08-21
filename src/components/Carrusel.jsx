import { Carousel } from "@material-tailwind/react";

export function CarouselCustomNavigation() {
  return (
    <div className="w-[250px] h-[250px]">
      <Carousel
        className="rounded-xl h-full"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="relative h-full">
          <img
            src="/imagen/fitness.jpg"
            alt="fitness"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 mt-36 ">
            <div className="bg-app-primary-accent bg-opacity-70 flex items-center justify-center flex-col ">
              <span className="text-black text-xl font-bol">Fitness</span>
              <span className="text-black text-sm ">Tonifica tus músculos</span>
            </div>
          </div>
        </div>
        <div className="relative h-full">
          <img
            src="/imagen/hiit.jpg"
            alt="hiit"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 mt-36 ">
            <div className="bg-app-primary-accent bg-opacity-70 flex items-center justify-center flex-col ">
              <span className="text-black text-xl font-bol">Hitt</span>
              <span className="text-black text-sm ">Ponte en forma</span>
            </div>
          </div>
        </div>
        <div className="relative h-full">
          <img
            src="/imagen/yoga.jpg"
            alt="yoga"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 mt-36 ">
            <div className="bg-app-primary-accent bg-opacity-70 flex items-center justify-center flex-col ">
              <span className="text-black text-xl font-bol">Yoga</span>
              <span className="text-black text-sm ">Cuida tu mente</span>
            </div>
          </div>
        </div>
        <div className="relative h-full">
          <img
            src="/imagen/hipopresivos.jpg"
            alt="hipopresivos"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 mt-36 ">
            <div className="bg-app-primary-accent bg-opacity-70 flex items-center justify-center flex-col ">
              <span className="text-black text-xl font-bol">Hipopresivos</span>
              <span className="text-black text-sm ">
                Fortalece tu suelo pélvico
              </span>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
