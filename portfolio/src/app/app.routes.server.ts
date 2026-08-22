import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
  {
    path: '',
    renderMode: RenderMode.Client,
  },
  {
    path: 'projects',
    renderMode: RenderMode.Client,
  },
  {
    path: 'p/:uuid',
    renderMode: RenderMode.Client,
  },
  {
    path: 'contact',
    renderMode: RenderMode.Client,
  },
];
