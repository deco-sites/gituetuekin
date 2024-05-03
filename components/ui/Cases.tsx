import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
/** Card interface */
export interface Card {
  /** Image for desktop */
  image: ImageWidget;
  /** Image for mobile */
  imageMobile: ImageWidget;
  alt: string;
  title: string;
  description: string;
  link: string;
}

/** Props interface */
export interface Props {
  cards: Card[];
}

/** Cases component */
export default function Cases({ cards }: Props) {
  return (
    <>
      <ul class="grid grid-cols-1 lg:grid-cols-3 w-full gap-6">
        {cards.map((card, index) => (
          <li key={index}>
            <a
              href={`${card.link}`}
              alt={`${card.alt}`}
              class="rounded-2xl relative group/card flex"
              aria-label={card.alt}
            >
              <div class="w-full h-auto md:h-[386px] opacity-100 group-hover/card:opacity-0 transition duration-200 ease-linear">
                <Image
                  src={card.image}
                  width={389}
                  height={389}
                  loading="lazy"
                  fetchPriority="auto"

                  alt={`${card.alt} image`}
                  class="w-full h-auto md:h-[389px] object-cover rounded-2xl"
                />
              </div>

              <div class=" h-[386px] opacity-0 w-full flex items-center justify-center group-hover/card:opacity-100 absolute top-0 right-0 transition duration-200 ease-linear">
                <div class=" w-full max-w-56">
                  <h3 class="font-medium text-5xl text-center text-black">
                    {card.title}
                  </h3>
                  <p class=" text-xl font-medium text-black text-center">
                    {card.description}
                  </p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
