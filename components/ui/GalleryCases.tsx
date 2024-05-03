import { ImageWidget } from "apps/admin/widgets.ts";
import { AppContext } from "../../apps/site.ts";
import Cases from "../../islands/Cases.tsx";
import Button from "./Button.tsx";
import Icon from "./Icon.tsx";

/**
 * Represents a button
 */
export interface ButtonProps {
  /** The button text */
  name: string;
  /** The link associated with the button */
  link: string;
}

/**
 * Represents a card
 */
export interface CardProps {
  /**
   * The desktop image for the card
   * @title Image Desktop
   */
  image: ImageWidget;

  /**
   * The mobile image for the card
   * @title Image Mobile
   */
  imageMobile: ImageWidget;

  /**
   * The alt text for the images
   */
  alt: string;

  /**
   * The title of the card
   */
  title: string;

  /**
   * The description of the card
   */
  description: string;

  /**
   * The link associated with the card
   */
  link: string;
}

/**
 * Represents the props for the component
 */
export interface Props {
  /**
   * The title of the component
   * @format Html
   */
  title: string;

  /**
   * The button associated with the component
   */
  button: ButtonProps;

  /**
   * The cards associated with the component
   */
  cards: CardProps[];
}

export default function GalleryCases({
  title = " PROJETOS  RECENTES",
  button,
  cards,
  device,
}: Props & { device: string }) {
  return (
    <div className="w-full max-w-screen-2xl m-auto flex flex-col items-center justify-center gap-8 lg:px-4 2xl:px-32 mt-36">
      <div className="w-full text-center lg:text-left">
        <h2 className="uppercase text-black text-5xl md:text-6xl font-bold">
          {title}
        </h2>
      </div>

      <div className="w-full flex justify-center lg:justify-end">
        <a href={button.link} aria-label="link para cases">
          <Button class="rounded-[91px] flex items-center gap-2 text-center border-2 border-solid border-black py-4 px-6 w-44  h-[62px] bg-transparent hover:bg-black hover:text-white">
            {button.name}
            <Icon id="Arrow" class="w-6 h-6 " size={24} />
          </Button>
        </a>
      </div>

      <div className="w-full">
        <Cases cards={cards} />
      </div>
    </div>
  );
}

export const loader = (props: Props, _req: Request, ctx: AppContext) => {
  return { ...props, device: ctx.device };
};
