import './App.css';
import Layout from './components/Layout';
import { useSearchParams } from 'react-router-dom';
import VariationA from './pages/variations/VariationA';
import VariationB from './pages/variations/VariationB';
import VariationC from './pages/variations/VariationC';
import VariationD from './pages/variations/VariationD';
import VariationE from './pages/variations/VariationE';

function App() {
  const [searchParams] = useSearchParams();
  const variant = searchParams.get('variant') || 'a';

  const renderVariant = () => {
    switch (variant.toLowerCase()) {
      case 'b':
        return <VariationB />;
      case 'c':
        return <VariationC />;
      case 'd':
        return <VariationD />;
      case 'e':
        return <VariationE />;
      default:
        return <VariationA />;
    }
  };

  return (
    <Layout>
      {renderVariant()}
    </Layout>
  );
}

export default App;
