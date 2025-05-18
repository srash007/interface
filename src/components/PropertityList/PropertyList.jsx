import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://media.tacdn.com/media/attractions-content--1x-1/0b/e2/03/9d.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Calgary</h1>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://www.todocanada.ca/wp-content/uploads/City-of-Moncton.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Moncton</h1>
          
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://fr.visittheusa.ca/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-05/9dbea438bcd305129064e4a048cc6b52.jpeg?h=84167f15&itok=Pbyrka1l"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1> New York</h1>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://workingholidayincanada.com/wp-content/uploads/2021/03/Ottawa-min.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1> Ottawa</h1>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://i.natgeofe.com/n/20d65599-d2e3-49e7-9641-a10b25aa8df2/toronto-travel_2x3.jpg?w=1534&h=2302"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Toronto</h1>
          
        </div>
      </div>
    </div>
  );
};

export default PropertyList;