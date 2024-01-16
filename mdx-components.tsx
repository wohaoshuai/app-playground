// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.
import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import React from 'react';
import { ExternalLink } from '#/ui/external-link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="prose prose-sm prose-invert max-w-none">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="prose prose-sm prose-invert max-w-none text-white">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="prose prose-sm prose-invert max-w-none">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="prose prose-sm prose-invert max-w-none">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="prose prose-sm prose-invert max-w-none">{children}</ul>
    ),
    li: ({ children }) => (
      <li className="prose prose-sm prose-invert max-w-none">{children}</li>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '200px', height: '200px' }}
        width={200}
        height={200}
        {...(props as ImageProps)}
      />
    ),
    a: ({ href, children }) => (
      <ExternalLink href={href}>{children}</ExternalLink>
    ),
    section: ({ children }) => <section>{children}</section>,
    ...components,
  };
}
