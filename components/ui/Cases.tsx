import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
export interface Card {
  /** @title Image Desktop */
  image: ImageWidget;
  /**@title  Image Mobile */
  imageMobile: ImageWidget;

  alt: string;

  title: string;

  description: string;

  link: string;
}

export interface Props {
  cards: Card[];
}
export default function Cases({ cards }: Props) {
  return (
    <>
      <ul class="grid grid-cols-1 lg:grid-cols-3 w-full gap-6">
        {cards.map((card, index) => (
          <li>
            <a
              href={`${card.link}`}
              alt={`${card.alt}`}
              key={index}
              class="rounded-2xl relative group/card flex"
            >
              <div class="w-full h-[386px] opacity-100 group-hover/card:opacity-0 transition duration-200 ease-linear">
                <Image
                  src={card.image}
                  width={389}
                  height={389}
                  loading="lazy"
                  fetchPriority="auto"
                  class="w-full h-[389px] object-cover rounded-2xl"
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
