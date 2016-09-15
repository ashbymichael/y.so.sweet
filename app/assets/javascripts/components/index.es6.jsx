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
      <div><h1>home</h1></div>
    )
  }
}

class About extends React.Component {
  render() {
    return (
      <div><h1>about</h1></div>
    )
  }
}


class Product extends React.Component {
  render() {
    return (
      <div><h1>product</h1></div>
    )
  }
}

class Contact extends React.Component {
  render() {
    return (
      <div><h1>contact</h1></div>
    )
  }
}

$(function() {
  ReactDOM.render(
    <Index />,
    document.getElementById('content')
  );
})
