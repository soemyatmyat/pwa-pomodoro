import React from "react"

function Footer() {
  const year = new Date().getFullYear()

  /*
    <div className="container-fluid">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"><img src="../../img/icons/favicon-32x32.png"></img></a>
          <span>© {year} Crafted by <a href="https://github.com/soemyatmyat">soemyatmyat</a></span>
        </div>
      </footer>
    </div>
  */


  return (
    <footer className="footer">
    <div className="container">
      <span>This site is written with <a href="https://nodejs.org/en/">node.js</a>, <a href="https://getbootstrap.com/">bootstrap</a> and integrated with <a href="https://mailchimp.com/">MailChimp API</a>. Crafted by <a href="https://github.com/soemyatmyat">https://github.com/soemyatmyat</a>. ☕️</span>    
    </div>
  </footer>
  )
}

export default Footer
