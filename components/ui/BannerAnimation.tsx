import { ImageWidget } from "apps/admin/widgets.ts";
import ImageAnimation from "../../islands/ImageAnimation.tsx";
import { AppContext } from "../../apps/site.ts";
import type { SectionProps } from "deco/types.ts";

/** Image object with desktop and mobile variants */
export interface Picture {
  /** Desktop image */
  image: ImageWidget;
  /** Mobile image */
  imageMobile: ImageWidget;
}

/** Social media item */
 export interface SocialItem {
  /** Label */
  label: 'Drible' | 'Instagram' | 'GitHub';
  /** Link */
  link: string;
}

/** Props for BannerMain component */
export interface Props {
  /** Array of images */
  images: Picture[];
  /** Array of social media items */
  socialItems: SocialItem[];
}

/**
 * BannerMain component
 * @param props - Props object
 */
export default function BannerMain(
  { images, device, socialItems }: SectionProps<typeof loader>,
) {

  return (
    <div class="container max-auto flex items-center justify-center md:mt-28 relative h-[450px] -mt-12 md:h-auto">
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
