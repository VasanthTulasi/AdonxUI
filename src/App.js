import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import MainFeature from "./Components/MainFeature";
import MainFeaturesHeading from "./Components/MainFeaturesHeading";
import Currencies from "./Components/Currencies";
import About from "./Components/About";
import "./App.css";

function App() {
  let featureHeadings = [
    "Highly Scalable Matching Engine",
    "Multi-Layered Security",
    "Account Alias",
    "Vanity Address",
    "Atom Swap",
    "Developer API",
  ];

  let featureDescriptions = [
    "A Highly Scalable order matching engine, which can withstand and process millons of orders per minute.",
    "Every request always flows through number of security layers in order to mitigate security risks & vulnerabilities in different stages.",
    "A Highly Scalable order matching engine, which can withstand and process millons of orders per minute.",
    "A Highly Scalable order matching engine, which can withstand and process millons of orders per minute.",
    "An easy to use automated process which owners can use to swap all old wallets with old coins/tokens with new wallets with new coins without additional complexity or calculations.",
    "Every request always flows through number of security layers in order to mitigate security risks & vulnerabilities in different stages.",
  ];

  let featureIcons = [
    "highly_scalable_engine",
    "multi_layer_security",
    "account_alias",
    "vanity_address",
    "atom_swap",
    "developer_api",
  ];

  let featureBackgrounds = [
    "feature_background", 
    "feature_background2",
    "feature_background3",
    "feature_background4",
    "feature_background5",
    "feature_background6"
  ];

  return (
    <div>
      <NavBar />
      <HeroSection />
      <Currencies />
      <MainFeaturesHeading />
      <MainFeature
        featureHeading={featureHeadings[0]}
        featureDescription={featureDescriptions[0]}
        featureIcon={featureIcons[0]}
        featureBackground={featureBackgrounds[0]}
      />
      <MainFeature
        flexDirection="flexreverse"
        textColor="changeTextColor"
        buttonColor ="changeButtonColor"
        borderColor = "changeBorderColor"
        featureHeading={featureHeadings[1]}
        featureDescription={featureDescriptions[1]}
        featureIcon={featureIcons[1]}
        featureBackground={featureBackgrounds[1]}
      />
      <MainFeature
        featureHeading={featureHeadings[2]}
        featureDescription={featureDescriptions[2]}
        featureIcon={featureIcons[2]}
        featureBackground={featureBackgrounds[0]}
      />
      <MainFeature
        flexDirection="flexreverse"
        textColor="changeTextColor"
        buttonColor ="changeButtonColor"
        borderColor = "changeBorderColor"
        featureHeading={featureHeadings[3]}
        featureDescription={featureDescriptions[3]}
        featureIcon={featureIcons[3]}
        featureBackground={featureBackgrounds[1]}
      />
      <MainFeature
        featureHeading={featureHeadings[4]}
        featureDescription={featureDescriptions[4]}
        featureIcon={featureIcons[4]}
        featureBackground={featureBackgrounds[0]}
      />
      <MainFeature
        flexDirection="flexreverse"
        textColor="changeTextColor"
        buttonColor ="changeButtonColor"
        borderColor = "changeBorderColor"
        featureHeading={featureHeadings[5]}
        featureDescription={featureDescriptions[5]}
        featureIcon={featureIcons[5]}
        featureBackground={featureBackgrounds[1]}
      />
      <About/>
    </div>
  );
}

export default App;
