import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Button from "./Button.tsx";
import Icon from "./Icon.tsx";

export interface Button {
  name: string;
  link: string;
}
export interface Props {
  avatar: ImageWidget;
  /** @format html */
  description: string;

  button: Button;
}

export default function Autor({ avatar, description, button }: Props) {
  return (
    <div className="w-full max-w-screen-2xl m-auto px-4 lg:px-4 2xl:px-32 py-24">
      <div class="rounded-2xl lg:bg-[#F6F7F8] w-full m-auto ">
        <div class="flex flex-col items-center justify-center gap-24 pt-20">
          <div class="w-full lg:w-4/5  text-center md:text-left">
            <h1 class="uppercase text-black text-5xl md:text-6xl font-bold">Sobre mim</h1>
          </div>
          <div class=" w-full lg:w-4/5 flex flex-col lg:flex-row gap-8">
            <div class="flex justify-center">
              <Image
                src={avatar}
                width={206}
                height={206}
                loading="lazy"
                fetchPriority="auto"
                alt="imagem do autor"
                class="avatar-mobile lg:rounded-2xl w-52 h-52 object-cover"
              />
            </div>
            <div class="pt-9 lg:pt-0">
              <div
                class=" text-2xl text-center lg:text-5xl font-normal lg:font-medium lg:uppercase text-black leading-[37px] lg:leading-[58px] lg:text-left"
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <div class="w-full flex justify-center lg:justify-end py-10">
                <a href={button.link} alt="link para cases">
                  <Button class="rounded-[91px] flex items-center gap-2 text-center border-2 border-solid border-black py-4 px-6 w-44  h-[62px] bg-transparent hover:bg-black hover:text-white">
                    {button.name}
                    <Icon id="Arrow" class="w-6 h-6 " size={24} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
