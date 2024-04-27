
import { ImageWidget } from "apps/admin/widgets.ts";
import  ImageAnimation from '../../islands/ImageAnimation.tsx'
export interface Picture {
    image: ImageWidget;
  }
  
  export interface Props {
    images: Picture[];
  }

export default function BannerMain({images}:Props){
    return(
        <div class="container max-auto flex items-center justify-center mt-28"> 
         <ImageAnimation  images = {images}/>
        </div>
    )
}


