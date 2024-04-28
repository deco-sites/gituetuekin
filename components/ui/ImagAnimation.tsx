import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { SocialItem } from "./BannerAnimation.tsx";
import Icon from "./Icon.tsx";

export interface Picture {
  image: ImageWidget;

  imageMobile: ImageWidget;
}
export interface Props {
  images: Picture[];
  device: string;
  socialItems: SocialItem[];
}

export default function ImageAnimation({ images, device, socialItems }: Props) {
  const currentImageIndex = useSignal<number>(0);

  useEffect(() => {
    const time = currentImageIndex.value === 0 ? 3000 : 1500;

    const interval = setInterval(() => {
      currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
    }, time);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <>
      {device === "desktop"
        ? (
          <div className="relative">
            <Image
              src={images[currentImageIndex.value]?.image}
              className="rounded-2xl h-[701px] w-full"
              width={1200}
              height={701}
              loading="eager"
              alt="imagens"
              fetchPriority="high"
            />

            <div class="bg-white w-[496px] h-[308px] rounded-[30px] absolute -top-6 -left-6">
              <div class="bg-black w-[426px] h-[226px] rounded-2xl flex items-center justify-center">
                <div class=" w-[379px] flex flex-col max-auto gap-4">
                  <p class="text-2xl text-white font-medium leaning-[34px] font-clash-display">
                    "Creativity is seeing what others see and thinking what no
                    one else ever thought."
                  </p>
                  <span class="text-base font-medium leading-10 text-white">
                    - Albert Einstein
                  </span>
                </div>
              </div>
            </div>
            <div class="absolute bottom-0 -left-10">
              <div class="flex flex-col gap-4">
                <ul
                  class={`flex gap-4 lg:flex-col lg:items-start
            }`}
                >
                  {socialItems.map((item) => {
                    return (
                      <li>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${item.label} Logo`}
                          class="flex gap-2 items-center"
                        >
                          <span class="block p-1 ">
                            <Icon size={24} id={item.label} />
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        )
        : (
          <div class="w-full">
            <Image
              src={images[currentImageIndex.value]?.imageMobile}
              className="rounded-2xl w-full"
              width={446}
              height={607}
              loading="eager"
              alt="imagens"
              fetchPriority="high"
            />
          </div>
        )}
    </>
  );
}
