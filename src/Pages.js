import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./style.css";

const Pages = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <section id="page-1" className="page">
        <h1>Praktik-appen</h1>
        <h3 className="sub-heading">En framtidssatsning & en del av ett examensarbete</h3>
        <p>
          Praktik-appen är ett digitaliserings och intergrationsprojekt som <a href="https://www.hiveandfive.se/">HiveAndFive</a> har i uppdrag att utveckla. Eftersom jag gjort alla mina LIA-praktiker 
          hos <a href="https://www.hiveandfive.se/">HiveAndFive</a> under min utbildning föll det sig naturligt att utföra mitt examensarbete hos denna härliga förnyelsebyrå! 
          Klicka dig vidare för att få veta mer om vad uppdraget Praktik-appen egentligen är. 
          <br/>
          <br/>
          Och du, håll utkik här om du vill följa mitt examensarbete från 
          start till slut!
        </p>
        <div>
          <Link
            activeClass="active"
            to="page-2"
            smooth={true}
            duration={500}
            className="btn"
            id="btn-start"
          >
            Nästa <i className="fas fa-arrow-circle-down"></i>
          </Link>
        </div>
      </section>

      <section id="page-2" className="page">
        <h1>Vad är Praktik-appens syfte & funktion?</h1>
        <p>
          Tanken med Praktik-appen är att den skall avändas av personer som fått uppehållstillstånd i Sverige & som har genomförr SFI (Svenska för invandrare).
          Praktik-appens syfte är att vara ett redskap och hjälpmedel som underlättar när efter SFI ska ut på sin första praktik. För att 
          ge ett extra stöd, inte bara genom handledare på praktiken, kom idén om Praktik-appen. Den här versionen av Praktik-appen kommer fungera som en prototyp vars
          syfte framförallt är att testas med riktiga användare. Praktik-appen syfte i framtiden är att kunna användas inom fler yrkesområde men just den här versionen av 
          Praktik-appen kommer att testas och utvecklas för en ICA-butik. 
          Eleven kommer genom att använda Praktik-appen lära sig mer om de olika avdelnignarna i ICA-butiken. För varje avdelning i butiken finns det ett antal quiz
          som eleven behöver genomföra för att nå sitt slutmål. 
          <br/>
          <br/>
          Praktik-appens quiz spelar upp en ljudfil med frågan och visar olika bilder som svarsalternativ. Eleven ska sedan klicka på rätt svar. Genom att använda ljud 
          och bild får eleven träna på språk och uttal, en förlängning från skolan ut i arbetslivet!
        </p>
        <div>
        <Link
            activeClass="active"
            to="page-1"
            smooth={true}
            duration={500}
            className="btn"
          >
            Tillbaka <i className="fas fa-arrow-circle-up"></i>
          </Link>
          <Link
            activeClass="active"
            to="page-3"
            smooth={true}
            duration={500}
            className="btn"
          >
            Nästa <i className="fas fa-arrow-circle-down"></i>
          </Link>
        </div>
      </section>

      <section id="page-3" className="page">
        <h1>Hur har vi tänkt utveckla Praktik-appen?</h1>
        <p className="description">
          Framtiden för Praktik-appen ser ljus ut, myndigheter satsar mycket pengar på digitalisering & integration, därför anser vi att det redan från början 
          är viktigt med en stabil & genomtänkt grundstruktur i appen som gör det enkelt att skala från liten till stor. Praktik-appens menyträd ska vara dynamiskt 
          och utan begränsning på "djup". Redan i första versionen av Praktik-appen har vi tänk på att skapa våra databas modeller så att de ska kunna appliceras på vilket
          yrkesområde som helst, alltså inte bara på en ICA-butik. 
          Vi lägger stor vikt vid att utföra ett grundligt och genomtänkt arbete med vår backend från början, 
          detta för att Praktik-appens framtid ska bli så smidig och enkel som möjligt.
          <br/>
          <br/>
          <text>Men rent konkret & kort så ser Praktik-appens livspussel ut så här:</text>
          <br/>
          <br/>
          <text>Backend - utvecklas med node.js, express & mongoDB</text>
          <br/>
          <text>Frontend - utvecklas med React, TypeScript & design systemet Grommet</text>
        </p>
        <div>
        <Link
            activeClass="active"
            to="page-2"
            smooth={true}
            duration={500}
            className="btn"
          >
            Tillbaka <i className="fas fa-arrow-circle-up"></i>
          </Link>
          <Link
            activeClass="active"
            to="page-4"
            smooth={true}
            duration={500}
            className="btn"
          >
            Nästa <i className="fas fa-arrow-circle-down"></i>
          </Link>
        </div>
      </section>

      <section id="page-4" className="page">
        <h1>Vad händer nu?</h1>
        <p>
          Praktik-appens livspussel är i full gång! Det finputsas på Backend och vi tar sikte mot Frontend.
          Den här sidan är min variant av en liten dagbok för Praktik-appens utveckling & för mitt examensarbete. Tanken är 
          att jag kommer uppdatera här ungefär 1-2 gånger i veckan fram tills den 10 juni 2020 för sen tar nämligen min del av Praktik-appens
          utveckling slut.
          <br/>
          <br/>
          <text className="ending-text">Praktik-appens utveckling tar dock inte slut - <br/>den har precis börjat!</text>
        </p>
        <div>
        <Link
            activeClass="active"
            to="page-3"
            smooth={true}
            duration={500}
            className="btn"
          >
            Tillbaka <i className="fas fa-arrow-circle-up"></i>
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            duration={500}
            className="btn"
            onClick={scrollToTop}
          >
            Till Start <i className="fas fa-arrow-circle-up"></i>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pages;
