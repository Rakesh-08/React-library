export default function Card({ title, description }) {
  return (
    <div class="card">
      <img src="https://picsum.photos/200/100" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        <button type="button" class="btn btn-danger">
          READ MORE
        </button>
      </div>
    </div>
  );
}
