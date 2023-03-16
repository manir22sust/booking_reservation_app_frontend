import "./Featured.css";

export const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1678711267886-cc97239b68e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt=""
          className="featuredImg"
        />

        <div className="featuredTitle">
          <h1> Germany</h1>
          <h1>123 properties </h1>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1678729465761-008074bef96c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
          alt=""
          className="featuredImg"
        />

        <div className="featuredTitle">
          <h1> Germany</h1>
          <h1>123 properties </h1>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1678768316189-605727fae515?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt=""
          className="featuredImg"
        />

        <div className="featuredTitle">
          <h1> Germany</h1>
          <h1>123 properties </h1>
        </div>
      </div>
    </div>
  );
};
