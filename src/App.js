import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Bg_1 from './assets/bg2.jpeg';
import Bg_2 from './assets/bg3.jpeg';
import './App.css';

function App() {
    return (
        <>
            <Header title='This is title' descr='This is Description!' />
            <Layout urlBg={Bg_1}/>
            <Layout colorBg='#e2e2e2' />
            <Layout urlBg={Bg_2}/>
            <Footer />
        </>
    );
}

export default App;
