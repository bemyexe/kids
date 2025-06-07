import {createRoot} from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router';

import {QuestionsPage} from './app/pages/questions-page';
import {StartPage} from './app/pages/start-page';
import {UploadPage} from './app/pages/upload-page';
import {ROUTES} from './shared/model/routes';

import './global-styles/reset.scss';
import './global-styles/colors.scss';
import './global-styles/global.scss';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.START} element={<StartPage />} />
      <Route path={ROUTES.UPLOAD} element={<UploadPage />} />
      <Route path={ROUTES.QUESTIONS} element={<QuestionsPage />} />
    </Routes>
  </BrowserRouter>
);
