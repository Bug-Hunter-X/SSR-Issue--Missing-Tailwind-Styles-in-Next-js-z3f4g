# Tailwind CSS SSR Bug in Next.js

This repository demonstrates a common issue encountered when using Tailwind CSS with Next.js (or similar frameworks) that involve server-side rendering (SSR).  The problem lies in the discrepancy between styles applied server-side versus client-side, often resulting in a flash of unstyled content (FOUC) before the client-side hydration process resolves the issue.

## Bug Description

Tailwind classes are not correctly applied to components rendered on the server. The rendered HTML initially lacks these styles until the client-side JavaScript takes over and hydrates the page.

## Reproduction Steps

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Observe the initial rendering; the styles might be missing until hydration completes. 

## Solution

The solution involves ensuring that Tailwind CSS styles are properly injected during SSR. Refer to the `bugSolution.js` file for a possible fix.