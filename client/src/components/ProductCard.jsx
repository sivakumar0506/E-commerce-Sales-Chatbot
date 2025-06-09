const ProductCard = ({ data }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={data.image_url || 'https://via.placeholder.com/300x180?text=No+Image'}
        className="card-img-top"
        alt={data.name}
        style={{ height: '180px', objectFit: 'cover' }}
        loading="lazy"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text flex-grow-1">{data.description}</p>
        <p className="card-text fw-bold text-success">₹{data.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
