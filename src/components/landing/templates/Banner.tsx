import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Acelere la transformación informática en cualquier lugar"
      subtitle=""
      button={
        <Link href="#">
          <Button>Get Started</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
