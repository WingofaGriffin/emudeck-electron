import Footer from 'components/organisms/Footer/Footer';

function HelpPage() {
  return (
    <>
      <iframe
        title="Wiki"
        src="https://emudeck.github.io/?search=true"
        style={{ width: '100%', height: '100%' }}
      />
      <Footer css="footer--alone" nextText="Exit" next="emulators" />
    </>
  );
}

export default HelpPage;
