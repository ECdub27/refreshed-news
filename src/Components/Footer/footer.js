import '../Footer/footer.css';


const Footer = () => {



    return  (



        <footer className='footer'>
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-8 col-md-5">
            <h5 className='title'>RefreshedNews</h5>
            <p className='description'>
              This is placeholder text. Your web app description goes here.
            </p>
          </div>
          <div className="col-2">
            <ul className="list-unstyled">
              <li>
                <a className='link' href="/">
                  Example Link
                </a>
              </li>
              <li>
                <a className='link' href="/">
                  Example Link
                </a>
              </li>
              <li>
                <a className='link' href="/">
                  Example Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    );
}

export default Footer;