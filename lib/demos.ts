export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Stable Diffusion',
    items: [
      {
        name: 'Getting Started with ComfyUI',
        slug: 'comfyui',
        description:
          'ComfyUI for Design pipelines, explore image processing, upscaling, and more.',
      },
      {
        name: 'Getting Started with WebUI',
        slug: 'webui',
        description:
          'Effortlessly unleash your creativity with Stable Diffusion WebUI intuitive interface',
      },
    ],
  },
  {
    name: 'Trending on Github',
    items: [
      {
        name: 'Github Trend Week1',
        slug: 'github-trend-001',
        description: '#1 Discover trending topics and new tools on Github',
      },
    ],
  },
  {
    name: 'Github热门推荐',
    items: [
      {
        name: 'GitHub趋势周报 第1期',
        slug: 'github-trend-001-cn',
        description: '#1 在GitHub上发现热门话题和新工具',
      },
    ],
  },
  // {
  //   name: 'AI Tools',
  //   items: [
  //     {
  //       name: 'Assembo.ai',
  //       slug: 'assemboai',
  //       description: 'AI tool for switch image background',
  //     },
  //     {
  //       name: 'ChatGPT',
  //       slug: 'chatgpt',
  //       description: 'AI text tool for generating text based on instructions',
  //     },
  //     {
  //       name: 'Midjourney',
  //       slug: 'midjourney',
  //       description: 'Unique image generation tool',
  //     },
  //   ],
  // },
  // {
  //   name: 'Layouts',
  //   items: [
  //     {
  //       name: 'Nested Layouts',
  //       slug: 'layouts',
  //       description: 'Create UI that is shared across routes',
  //     },
  //     {
  //       name: 'Grouped Layouts',
  //       slug: 'route-groups',
  //       description: 'Organize routes without affecting URL paths',
  //     },
  //     {
  //       name: 'Parallel Routes',
  //       slug: 'parallel-routes',
  //       description: 'Render multiple pages in the same layout',
  //     },
  //   ],
  // },
  // {
  //   name: 'File Conventions',
  //   items: [
  //     {
  //       name: 'Loading',
  //       slug: 'loading',
  //       description:
  //         'Create meaningful Loading UI for specific parts of an app',
  //     },
  //     {
  //       name: 'Error',
  //       slug: 'error-handling',
  //       description: 'Create Error UI for specific parts of an app',
  //     },
  //     {
  //       name: 'Not Found',
  //       slug: 'not-found',
  //       description: 'Create Not Found UI for specific parts of an app',
  //     },
  //   ],
  // },
  // {
  //   name: 'Data Fetching',
  //   items: [
  //     {
  //       name: 'Streaming with Suspense',
  //       slug: 'streaming',
  //       description:
  //         'Streaming data fetching from the server with React Suspense',
  //     },
  //     {
  //       name: 'Static Data',
  //       slug: 'ssg',
  //       description: 'Generate static pages',
  //     },
  //     {
  //       name: 'Dynamic Data',
  //       slug: 'ssr',
  //       description: 'Server-render pages',
  //     },
  //     {
  //       name: 'Incremental Static Regeneration',
  //       slug: 'isr',
  //       description: 'Get the best of both worlds between static & dynamic',
  //     },
  //   ],
  // },
  // {
  //   name: 'Components',
  //   items: [
  //     {
  //       name: 'Client Context',
  //       slug: 'context',
  //       description:
  //         'Pass context between Client Components that cross Server/Client Component boundary',
  //     },
  //   ],
  // },
  // {
  //   name: 'Misc',
  //   items: [
  //     {
  //       name: 'Client Component Hooks',
  //       slug: 'hooks',
  //       description: 'Preview the routing hooks available in Client Components',
  //     },
  //     {
  //       name: 'CSS and CSS-in-JS',
  //       slug: 'styling',
  //       description: 'Preview the supported styling solutions',
  //     },
  //     {
  //       name: 'Code Snippets',
  //       slug: 'snippets',
  //       description: 'A collection of useful App Router code snippets',
  //     },
  //   ],
  // },
];
