import { ImageWidget } from "apps/admin/widgets.ts";
import ImageAnimation from "../../islands/ImageAnimation.tsx";
import { AppContext } from "../../apps/site.ts";
import type { SectionProps } from "deco/types.ts";

export interface Picture {
  image: ImageWidget;
}

export interface Props {
  images: Picture[];
  socialItems: SocialItem[];
}

export interface SocialItem {
  label:
    | "Drible"
    | "Instagram"
    | "GitHub";
  link: string;
}

export default function BannerMain(
  { images, device, socialItems }: SectionProps<typeof loader>,
) {
  console.log(device);
  return (
    <div class="container max-auto flex items-center justify-center mt-28">
      <ImageAnimation
        images={images}
        device={device}
        socialItems={socialItems}
      />
    </div>
  );
}

export const loader = (props: Props, _req: Request, ctx: AppContext) => {
  return { ...props, device: ctx.device };
};
