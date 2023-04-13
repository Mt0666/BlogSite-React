function Footer(props) {

    return (
        <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span> About the company</span> Ut congue augue non tellus bibendum,
          in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus
          odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer
          tellus est, vehicula eu lectus tincidunt, ultricies feugiat leo.
          Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue.
          Nam ut nibh mollis, tristique ante sed, viverra massa.
        </p>
        <div className="icons">
          <a href="https://www.facebook.com/muratturoglu66"
            ><i className="fa fa-facebook"/></a>
          <a href="https://twitter.com/murat_turoglu"
            ><i className="fa fa-twitter"/></a>
          <a href="https://www.linkedin.com/in/murat-turoğlu-076579180/"
            ><i className="fa fa-linkedin"/></a>
          <a href="https://www.instagram.com/muratturoglu/"
            ><i className="fa fa-instagram"/></a>
        </div>
      </div>
      <div className="footer-center col-md-8 col-sm-12">
        <div>
          <i className="fa fa-map-marker"/>
          <p><span> Hüseyingazi/ANKARA</span>TÜRKİYE</p>
        </div>
        <div>
          <i className="fa fa-phone"/>
          <p>(+90)545 385 38 39</p>
        </div>
        <div>
          <i className="fa fa-envelope"/>
          <p>muratturoglu66@gmail.com</p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <p className="menu">
          <a href="./main.html"> ANASAYFA</a><br />
          <a href="./projeler.html">PROJELERİM</a><br />
          <a href="hakkımda.html"> HAKKIMDA</a> <br />
          <a href="yazılarım.html"> YAZILARIM</a> <br />
          <a href="iletişim.html"> İLETİŞİM</a>
        </p>
        <p className="name">Company Name &copy; 2016</p>
      </div>
    </footer>
  
    );
}
export default Footer;
  