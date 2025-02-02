import "./styles.css";

export const CampoInput = ({ placeholder, type }) => {
  return (
    <>
      <div class="input-group flex-nowrap">
        
        <input
          type={type}
          class="form-control"
          placeholder={placeholder}
          aria-label="Username"
          aria-describedby="addon-wrapping"
          required
        />
      </div>
    </>
  );
};
