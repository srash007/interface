import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="http://cdn.shopify.com/s/files/1/2792/8560/articles/des-paysages-canadiens-a-couper-le-souffle-banner-facebook.jpg?v=1593119188"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Canada</h1>
          
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://a.cdn-hotels.com/gdcs/production164/d1892/abe4516c-de63-4e90-a696-955e0bf194c6.jpg?impolicy=fcrop&w=800&h=533&q=medium"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Etats-Unis</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.partir.com/4L9iKPgx7CRiuMr-tQwLHvqWaCM=/750x/filters:sharpen(0.3,0.3,true)/incontournables/mexique-tulum.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mexique</h1>

        </div>
      </div>
    </div>
  )
}

export default Featured