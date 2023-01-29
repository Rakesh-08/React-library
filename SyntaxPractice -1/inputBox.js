export default function InputBox({ label, placeholder }) {
  return (
    <div>
      <label for="name">{label}:</label>
      <input
        id="name"
        type="name"
        class="form-control"
        placeholder={placeholder}
      />
    </div>
  );
}
