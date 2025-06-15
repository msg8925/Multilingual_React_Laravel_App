import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './i18n';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

function App() {
  const { t, i18n } = useTranslation();
  const [apiMessage, setApiMessage] = useState('');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const getMessage = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/message', {
        headers: {
          'Authorization': `Bearer YOUR_SANCTUM_TOKEN`,
          'Accept-Language': i18n.language
        }
      });
      setApiMessage(response.data.message);
    } catch (error) {
      console.error('Error fetching API message', error);
    }
  };

  return (
    <div>
      <h1>{t('greeting')}</h1>
      <button onClick={() => changeLanguage(i18n.language === 'en' ? 'th' : 'en')}>
        {t('switchLanguage')}
      </button>
      <br /><br />
      <button onClick={getMessage}>Fetch Message from Laravel API</button>
      <p>{apiMessage}</p>
    </div>
  );
}

export default App
