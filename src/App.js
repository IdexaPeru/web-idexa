import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
// ! sdf firebase
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import BtnWhatsapp from './Components/Utilidades/BtnWhatsapp';
import './Functions/enlaces';

const firebaseConfig = {
  apiKey: "AIzaSyBrzq2hJ-w205SpB1j9cyKkuIWwbFEufSY",
  authDomain: "idexa-peru.firebaseapp.com",
  projectId: "idexa-peru",
  storageBucket: "idexa-peru.appspot.com",
  messagingSenderId: "597924543696",
  appId: "1:597924543696:web:c3fca7261f010a9cf832d5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');

function App() {
  return (
    <div className={`w-full `} id="section-01">
      <div className='w-full'>
        <Header />
        <Main />
      </div>
      <Footer />
      <BtnWhatsapp />
    </div>
  );
}

export default App;
