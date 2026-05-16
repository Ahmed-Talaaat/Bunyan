import CardStatus from "../../ui/CardStatus/CardStatus";
function Status() {
  return (
    <section className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <CardStatus counter="120" title="Projects" icon="fa-solid fa-building"  />
          </div>

          <div className="col-12 col-md-3">
            <CardStatus counter="150" title="Users" icon="fa-solid fa-users"  />
          </div>
          <div className="col-12 col-md-3">
            <CardStatus counter="200" title="Developers" icon="fa-solid fa-code"  />
          </div>
          <div className="col-12 col-md-3">
            <CardStatus counter="50" title="Blogs" icon="fa-solid fa-blog"  />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Status;
