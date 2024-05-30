import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'

const sidebars = (): DefaultTheme.SidebarItem[] => [
  {
    text: 'コンセプト',
    collapsed: true,
    items: [
      { text: 'モチベーション', link: '/concepts/motivation' },
      { text: 'ルーター', link: '/concepts/routers' },
      { text: 'ベンチマーク', link: '/concepts/benchmarks' },
      { text: 'Web 標準', link: '/concepts/web-standard' },
      { text: 'ミドルウェア', link: '/concepts/middleware' },
      { text: '開発体験', link: '/concepts/developer-experience.md' },
      { text: 'Hono Stacks', link: '/concepts/stacks' },
    ],
  },
  {
    text: 'Getting Started',
    collapsed: true,
    items: [
      { text: 'Basic', link: '/getting-started/basic' },
      { text: 'Cloudflare Workers', link: '/getting-started/cloudflare-workers' },
      { text: 'Cloudflare Pages', link: '/getting-started/cloudflare-pages' },
      { text: 'Deno', link: '/getting-started/deno' },
      { text: 'Bun', link: '/getting-started/bun' },
      { text: 'Fastly Compute', link: '/getting-started/fastly' },
      { text: 'Vercel', link: '/getting-started/vercel' },
      { text: 'Netlify', link: '/getting-started/netlify' },
      { text: 'AWS Lambda', link: '/getting-started/aws-lambda' },
      { text: 'Lambda@Edge', link: '/getting-started/lambda-edge' },
      { text: 'Azure Functions', link: '/getting-started/azure-functions' },
      { text: 'Supabase Functions', link: '/getting-started/supabase-functions' },
      { text: 'Node.js', link: '/getting-started/nodejs' },
    ],
  },
  {
    text: 'API',
    collapsed: true,
    items: [
      { text: 'App', link: '/api/hono' },
      { text: 'ルーティング', link: '/api/routing' },
      { text: 'Context', link: '/api/context' },
      { text: 'HonoRequest', link: '/api/request' },
      { text: '例外', link: '/api/exception' },
      { text: 'プリセット', link: '/api/presets' },
    ],
  },
  {
    text: 'ガイド',
    collapsed: true,
    items: [
      { text: 'ミドルウェア', link: '/guides/middleware' },
      { text: 'Helpers', link: '/guides/helpers' },
      {
        text: 'JSX',
        link: '/guides/jsx',
      },
      {
        text: 'クライアントコンポーネント',
        link: '/guides/jsx-dom',
      },
      { text: 'Testing', link: '/guides/testing' },
      {
        text: 'バリデーション',
        link: '/guides/validation',
      },
      {
        text: 'RPC',
        link: '/guides/rpc',
      },
      {
        text: 'ベストプラクティス',
        link: '/guides/best-practices',
      },
      {
        text: '例',
        link: '/guides/examples',
      },
      {
        text: 'その他',
        link: '/guides/others',
      },
      {
        text: 'FAQs',
        link: '/guides/faq',
      },
    ],
  },
  {
    text: 'ヘルパー',
    collapsed: true,
    items: [
      { text: 'Accepts', link: '/helpers/accepts' },
      { text: 'アダプタ', link: '/helpers/adapter' },
      { text: 'ConnInfo', link: '/helpers/conninfo' },
      { text: 'Cookie', link: '/helpers/cookie' },
      { text: 'css', link: '/helpers/css' },
      { text: 'Dev', link: '/helpers/dev' },
      { text: 'Factory', link: '/helpers/factory' },
      { text: 'html', link: '/helpers/html' },
      { text: 'JWT', link: '/helpers/jwt' },
      { text: 'SSG', link: '/helpers/ssg' },
      { text: 'ストリーミング', link: '/helpers/streaming' },
      { text: 'テスト', link: '/helpers/testing' },
      { text: 'WebSocket', link: '/helpers/websocket' },
    ],
  },
  {
    text: 'ミドルウェア',
    collapsed: true,
    items: [
      { text: 'Basic 認証', link: '/middleware/builtin/basic-auth' },
      { text: 'Bearer 認証', link: '/middleware/builtin/bearer-auth' },
      { text: 'Body Limit', link: '/middleware/builtin/body-limit' },
      { text: 'キャッシュ', link: '/middleware/builtin/cache' },
      { text: '圧縮', link: '/middleware/builtin/compress' },
      { text: 'CORS', link: '/middleware/builtin/cors' },
      { text: 'CSRF 保護', link: '/middleware/builtin/csrf' },
      { text: 'ETag', link: '/middleware/builtin/etag' },
      { text: 'JSX レンダラー', link: '/middleware/builtin/jsx-renderer' },
      { text: 'JWT', link: '/middleware/builtin/jwt' },
      { text: 'ロガー', link: '/middleware/builtin/logger' },
      { text: 'Method Override', link: '/middleware/builtin/method-override' },
      { text: 'JSON の整形', link: '/middleware/builtin/pretty-json' },
      { text: 'セキュアヘッダ', link: '/middleware/builtin/secure-headers' },
      { text: 'Timeout', link: '/middleware/builtin/timeout' },
      { text: 'Timing', link: '/middleware/builtin/timing' },
      { text: 'Trailing Slash', link: '/middleware/builtin/trailing-slash' },
      { text: 'サードパーティーミドルウェア', link: '/middleware/third-party' },
    ],
  },
]

const sidebarsSnippets = (): DefaultTheme.SidebarItem[] => [
  {
    text: 'アプリケーション',
    items: [
      {
        text: 'ファイルアップロード',
        link: '/snippets/file-upload',
      },
      {
        text: 'バリデーターでエラーハンドリング',
        link: '/snippets/validator-error-handling',
      },
      {
        text: 'RPC のためのルートのグループ化',
        link: '/snippets/grouping-routes-rpc',
      },
    ],
  },
  {
    text: 'サードパーティーミドルウェア',
    items: [
      {
        text: 'Zod OpenAPI',
        link: '/snippets/zod-openapi',
      },
      {
        text: 'Swagger UI',
        link: '/snippets/swagger-ui',
      },
    ],
  },
  {
    text: 'エコシステム',
    items: [
      {
        text: 'Remix + Hono',
        link: '/snippets/with-remix',
      },
    ],
  },
  {
    text: '統合',
    items: [
      {
        text: 'Cloudflare Durable Objects',
        link: '/snippets/cloudflare-durable-objects',
      },
      {
        text: 'Cloudflare Queue',
        link: '/snippets/cloudflare-queue',
      },
      {
        text: 'htmx',
        link: '/snippets/htmx',
      },
      {
        text: 'Stripe Webhook',
        link: '/snippets/stripe-webhook',
      },
    ],
  },
]

export default defineConfig({
  lang: 'ja',
  title: 'Hono',
  description:
    'Cloudflare Workers 、 Fastly Compute 、Deno 、 Bun 、 Vercel 、 Netlify 、 AWS Lambda 、 Lambda@Edge 、 Node.js などのための爆速 Web フレームワーク。 速いですが、それだけではありません。',
  lastUpdated: true,
  ignoreDeadLinks: true,
  cleanUrls: true,
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
  themeConfig: {
    logo: '/images/logo-small.png',
    siteTitle: 'Hono',
    algolia: {
      appId: 'ML5YEKHL8B',
      apiKey: 'b37d63b7bab0db0e52ca5f5cd9c6ac21',
      indexName: 'hono-ja',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/honojs' },
      { icon: 'discord', link: 'https://discord.gg/VARKtGvCZK' },
      { icon: 'x', link: 'https://twitter.com/honojs' },
    ],
    editLink: {
      pattern: 'https://github.com/akku1139/hono-ja/edit/main/:path',
      text: 'このページをGitHubで編集する',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright:
        'Copyright © 2022-present Yusuke Wada & Hono contributors. "kawaii" logo is created by SAWARATSUKI.',
    },
    nav: [
      { text: 'Docs', link: '/top' },
      { text: 'Snippets', link: '/snippets/top' },
      { text: 'Examples', link: 'https://github.com/honojs/examples' },
      { text: 'Discussions', link: 'https://github.com/orgs/honojs/discussions' },
    ],
    sidebar: {
      '/': sidebars(),
      '/snippets/': sidebarsSnippets(),
    },
  },
  head: [
    ['meta', { property: 'og:image', content: 'https://hono.dev/images/hono-title.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'twitter:domain', content: 'hono.dev' }],
    ['meta', { property: 'twitter:image', content: 'https://hono.dev/images/hono-title.png' }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
  ],
  titleTemplate: ':title - Hono',
})
