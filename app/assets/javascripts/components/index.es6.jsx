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

$(function() {
  ReactDOM.render(
    <Index />,
    document.getElementById('content')
  );
})
