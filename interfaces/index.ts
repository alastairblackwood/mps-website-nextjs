// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

import { ImageLoader } from 'next/image';

// type StringImageProps = {
//   src: string;
// } & (
//   | { width?: never; height?: never; layout: 'fill' }
//   | {
//       width: number | string;
//       height: number | string;
//       layout?: Exclude<LayoutValue, 'fill'>;
//     }
// ) &
//   (
//     | {
//         placeholder?: Exclude<PlaceholderValue, 'blur'>;
//         blurDataURL?: never;
//       }
//     | { placeholder: 'blur'; blurDataURL: string }
//   );

// type ObjectImageProps = {
//   src: StaticImport;
//   width?: number | string;
//   height?: number | string;
//   layout?: LayoutValue;
//   placeholder?: PlaceholderValue;
//   blurDataURL?: never;
// };

// export type ImageProps = Omit<
//   JSX.IntrinsicElements['img'],
//   'src' | 'srcSet' | 'ref' | 'width' | 'height' | 'loading' | 'style'
// > & {
//   loader?: ImageLoader;
//   quality?: number | string;
//   priority?: boolean;
//   loading?: LoadingValue;
//   unoptimized?: boolean;
//   objectFit?: ImgElementStyle['objectFit'];
//   objectPosition?: ImgElementStyle['objectPosition'];
// } & (StringImageProps | ObjectImageProps);
