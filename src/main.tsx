import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';

import './global-styles/reset.scss';
import './global-styles/colors.scss';
import './global-styles/global.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
