import "./styles.scss";

function Footer() {
  return (
    <div className="home_page_footer">
      <div className="home_page_footer-items">
        <h2>
          <em>Sweet Eats Bakery</em>
        </h2>
        <p>
          We are your number one call when it comes to Sweet jelly-o apple pie
          powder jelly beans. Pastry sweet roll cake jujubes halvah soufflé
          brownie.
        </p>
        <div className="home_page_footer-info">
          <div className="home_page_footer-info-item">
            <h3>Open Hours</h3>
            <p>
              <em>Mon:</em> 12:00 pm – 9:00pm
            </p>
            <p>
              <em>Tue – Sun: </em> 11:30 am – 10:00 pm
            </p>
          </div>
          <div className="home_page_footer-info-item">
            <h3>Location</h3>
            <p>1 Bakery Street, Sweettown, SE 10100</p>
          </div>
          <div className="home_page_footer-info-item">
            <h3>Reservation</h3>
            <p>(555) 555 1234</p>
            <p>info@sweeteatsbakery.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Footer };
