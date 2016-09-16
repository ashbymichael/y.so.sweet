class Index extends React.Component {
  render() {
    return (
      <div>
        <Home/>
        <About/>
        <Product/>
        <Contact/>
      </div>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
      <section id="home-view">
        <h1>home</h1>
      </section>
    )
  }
}

class About extends React.Component {
  render() {
    return (
      <section id="about-view">
        <h1>about</h1>
      </section>
    )
  }
}


class Product extends React.Component {
  render() {
    return (
      <section id="product-view">
        <h1>product</h1>
      </section>
    )
  }
}

class Contact extends React.Component {
  render() {
    return (
      <section id="contact-view">
        <h1>contact</h1>
      </section>
    )
  }
}

$(function() {
  ReactDOM.render(
    <Index />,
    document.getElementById('content')
  );
})
