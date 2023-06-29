import 'firebase/firestore';
import styled from 'styled-components';
import Header from '../components/Frame/Header';
import Footer from '../components/Frame/Footer';
import Auth from './Auth';
import InputArea from './InputArea';
import FileUpload from './FileUpload';

function Posting() {
  return (
    <>
      <Header />
      <Body>
        {/* <Auth /> */}
        <InputArea />
        {/* <FileUpload /> */}
      </Body>
      <Footer />
    </>
  );
}
export default Posting;

const Body = styled.div`
  width: 1200px;
  margin: 0 auto;
  // height: 619px;
`;
