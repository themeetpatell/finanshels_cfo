import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Paid-channel landing paths. Same page as "/", but the path is what
            tells the WhatsApp button which prefill message to use, and it keeps
            Google and Bing traffic separable in analytics. The static canonical
            in index.html points every one of these back to "/". */}
        <Route path="/google" element={<Home />} />
        <Route path="/bing" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
        {/* Anything else renders the landing page rather than a blank shell. */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
