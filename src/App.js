import CustomerHeader from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

import HomePage from "./pages/Homepage";

function App() {
  return (
    <div>
      <CustomerHeader />
      <main className="py-3">
        <Container>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
