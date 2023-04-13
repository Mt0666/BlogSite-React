
function About() {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src="../images/murat.jpg" alt="Profil Resmi" />
      </div>
      <div className="about-text">
        <p>
          Benim adım <strong>Murat Turoğlu</strong> ve ben
          <strong>Frontend</strong> alanında bir uzmanım.
          <strong>Yıllardır bu alanda çalışıyorum ve</strong> kendimi
          geliştirmek için her zaman öğrenmeye açık oluyorum.
        </p>
        <p className="hakkımda-p">
          <strong>Birkaç başarı örneğim şunlardır:</strong>
        </p>
        <ul>
          <li className="hakkımda-li">Başarı 1</li>
          <li className="hakkımda-li">Başarı 2</li>
          <li className="hakkımda-li">Başarı 3</li>
        </ul>
        <p className="hakkımda-p">
          <strong>Bana ulaşmak için:</strong>
        </p>
        <ul className="contact-list">
          <li>
            <i className="fa fa-envelope"></i> Email: muratturoglu66@gmail.com
          </li>
          <li>
            <i className="fa fa-phone"></i> Telefon: (+90)545 385 38 39
          </li>
          <li>
            <i className="fa fa-globe"></i> Web: www.muratturoglu.com
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
