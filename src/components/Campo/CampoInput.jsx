import "./styles.css";

export const CampoInput = ({ placeholder, type, label, id , value, onChange}) => {
  return (
    <>
      <div class="w-100  align-items-center gap-3 ">

        <label htmlFor={id}>{label}</label>
        
        <input
          id={id}
          type={type}
          class="form-control rounded-1 "
          placeholder={placeholder}
          aria-label="Username"
          aria-describedby="addon-wrapping"
          value={value}
          onChange={onChange}
          required
        />
      </div>
    </>
  );
};
