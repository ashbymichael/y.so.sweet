class Contact extends React.Component {
  render() {
    return (
      <section id="contact-view">
        <h1>contact</h1>
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <input id="contact_name" type="text" class="validate" />
                <label for="contact_name">Your Name</label>
              </div>
              <div class="input-field col s6">
                <input id="contact_email" type="email" class="validate" />
                <label for="contact_email">Your Email</label>
              </div>
            </div>
            <div class="input-field col s6">
              <input id="contact_phone" type="tel" class="validate" />
              <label for="contact_phone">Your Phone Number</label>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <textarea id="contact_msg" class="materialize-textarea"></textarea>
                <label for="contact_msg">Your Message</label>
              </div>
            </div>
          </form>
        </div>
      </section>
    )
  }
}
