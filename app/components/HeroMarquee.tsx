"use client";

import Image from "next/image";
import { useWordpress } from "../providers/WordpressProvider";

export default function HeroMarquee() {
  const { isWordpress } = useWordpress();

  return (
    <div className="banner shadow-box">
      <div className="marquee">
        <div>
          {isWordpress ? (
            <span aria-label="Professional focus and expertise">
              PREMIUM <b>WORDPRESS</b> <Image src="/assets/images/star1.svg" alt="Star" width={15} height={15} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 10px' }} />
              BUILT-IN <b>SEO</b> <Image src="/assets/images/star1.svg" alt="Star" width={15} height={15} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 10px' }} />
              UNMATCHED <b>SECURITY</b> <Image src="/assets/images/star1.svg" alt="Star" width={15} height={15} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 10px' }} />
              STUNNING <b>DESIGN</b> <Image src="/assets/images/star1.svg" alt="Star" width={15} height={15} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 10px' }} />
              CONVERSION <b>FOCUSED</b> <Image src="/assets/images/star1.svg" alt="Star" width={15} height={15} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 10px' }} />
              BLAZING <b>FAST</b> <Image src="/assets/images/star1.svg" alt="Star" width={15} height={15} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 10px' }} />
            </span>
          ) : (
            <span aria-label="Professional focus and expertise">
              BUILDING <b>SOLUTIONS</b> <Image src="/assets/images/star1.svg" alt="Star" width={15} height={15} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 10px' }} />
              SECURING <b>SYSTEMS</b> <Image src="/assets/images/star1.svg" alt="Star" width={15} height={15} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 10px' }} />
              SCALING <b>IDEAS</b> <Image src="/assets/images/star1.svg" alt="Star" width={15} height={15} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 10px' }} />
              CRAFTING <b>CODE</b> <Image src="/assets/images/star1.svg" alt="Star" width={15} height={15} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 10px' }} />
              DESIGNING <b>EXPERIENCES</b> <Image src="/assets/images/star1.svg" alt="Star" width={15} height={15} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 10px' }} />
              SOLVING <b>COMPLEXITY</b> <Image src="/assets/images/star1.svg" alt="Star" width={15} height={15} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 10px' }} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
