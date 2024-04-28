import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Picture {
  image: ImageWidget;
}

export interface Props {
  images: Picture[];
}

export default function ImageAnimation({ images }: Props) {
  const currentImageIndex = useSignal<number>(0);

  useEffect(() => {
    console.log("entrei aqui");
    const interval = setInterval(() => {
      currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
    }, 1500);

    return () => clearInterval(interval);
  }, [images.length, currentImageIndex, images]);

  return (
    <>
      <div className="relative">
        <Image
          src={images[currentImageIndex.value]?.image}
          className="rounded-2xl"
          width={1200}
          height={520}
          loading="eager"
          alt="imagens"
        />

        <div class="bg-white w-[496px] h-[308px] rounded-[30px] absolute -top-6 -left-6">
          <div class="bg-black w-[426px] h-[226px] rounded-2xl flex items-center justify-center">
            <div class=" w-[379px] flex flex-col max-auto gap-4">
              <p class="text-2xl text-white font-medium leaning-[34px] font-clash-display">
                "Creativity is seeing what others see and thinking what no one
                else ever thought."
              </p>
              <span class="text-base font-medium leading-10 text-white">
                - Albert Einstein
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
