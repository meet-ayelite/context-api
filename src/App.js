import React from "react";
import "./styles.css";
import NewsletterComponent from "./components/NewsletterComponent";
import ServicesComponent from "./components/ServicesComponent";
import BlogComponent from "./components/BlogComponent";
import FAQComponent from "./components/FAQComponent";
import FooterComponent from "./components/FooterComponent";


function App() {
    return (
      <>
        <NewsletterComponent/>
        <ServicesComponent/>
        <BlogComponent/>
        <FAQComponent/>
        <FooterComponent/>
      </>
    );
}
export default App;
