import { ImageWidget } from "apps/admin/widgets.ts";
import { AppContext } from "../../apps/site.ts";
import Cases from "../../islands/Cases.tsx";

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
      <div class=" w-full max-w-screen-2xl m-auto flex flex-col items-center justify-center gap-8 px-32 mt-36">
        <div class="w-full text-left">
          <h2 class="uppercase text-6xl font-bold">
            {title}
          </h2>
        </div>

        <div class="w-full text-right">
          <a href={button.link} alt="link para cases">
            <button class="rounded-[91px] text-center border-2 border-solid border-black py-4 px-6">
              {button.name}
            </button>
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
