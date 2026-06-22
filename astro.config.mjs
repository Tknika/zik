import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://starlight.astro.build/reference/configuration
export default defineConfig({
  site: 'https://tknika.github.io/zik/',
  base: '/zik/',
  integrations: [
    starlight({
      title: 'Zik — Zibersegurtasuna Ikastetxeetan',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Euskara',
          lang: 'eu',
        },
        es: {
          label: 'Español',
          lang: 'es',
        },
      },
      sidebar: [
        {
          label: 'Hasiera',
          link: '/',
        },
        {
          label: 'Zibersegurtasuna',
          collapsed: false,
          items: [
            { label: '1. Gobernantza', link: '/gobernantza/' },
            { label: '2. Identifikatu', link: '/identifikatu/' },
            { label: '3. Babestu', link: '/babestu/' },
            { label: '4. Detektatu', link: '/detektatu/' },
            { label: '5. Erantzun', link: '/erantzun/' },
            { label: '6. Berreskuratu', link: '/berreskuratu/' },
          ],
        },
        {
          label: 'Araudia',
          link: '/legal/araudia/',
        },
        {
          label: 'Txantiloiak',
          link: '/templates/',
        },
        {
          label: 'Glosarioa',
          link: '/glossary/',
        },
        {
          label: 'Gida — nola erabili',
          link: '/gida/',
        },
      ],
      customCss: ['./src/styles/zik.css'],
      components: {
        Footer: './src/components/Footer.astro',
      },
    }),
  ],
});
