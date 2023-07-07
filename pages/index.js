function HomePage() {
  fetch(
    'https://posgolivemichel--nexodata.myvtex.com/_v/my-cart/changePrice'
  ).then((response) => console.log(response))
  return (
    <div>
      <h1>The Home Page</h1>
    </div>
  )
}

export default HomePage
