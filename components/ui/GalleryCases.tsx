import { ImageWidget } from "apps/admin/widgets.ts";
import { AppContext } from "../../apps/site.ts";
import Cases from "../../islands/Cases.tsx";
import Button from "./Button.tsx";
import Icon from "./Icon.tsx";

export interface Button {
  name: string;
  link: string;
}

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
  /** @format Html */
  title: string;

  button: Button;

  cards: Card[];
}

export default function GalleryCases(
  { title = " PROJETOS  RECENTES", button, cards, device }: Props & {
    device: string;
  },
) {
  return (
    <>
      <div class=" w-full max-w-screen-2xl m-auto flex flex-col items-center justify-center gap-8 lg:px-4 2xl:px-32 mt-36">
        <div class="w-full text-center lg:text-left">
          <h2 class="uppercase text-black text-5xl md:text-6xl font-bold">
            {title}
          </h2>
        </div>

        <div class="w-full flex justify-center lg:justify-end">
          <a href={button.link} alt="link para cases">
            <Button class="rounded-[91px] flex items-center gap-2 text-center border-2 border-solid border-black py-4 px-6 w-44  h-[62px] bg-white hover:bg-black hover:text-white">
               {button.name}
               <Icon id="Arrow" class="w-6 h-6 " size={24}   />
            </Button>
          </a>
        </div>
        <div class="w-full">
           <Cases cards={cards} />
        </div>
      </div>
    </>
  );
}

export const loader = (props: Props, _req: Request, ctx: AppContext) => {
  return { ...props, device: ctx.device };
};
