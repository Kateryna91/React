import classnames from "classnames";
import PropTypes from "prop-types";

const InputTextField = ({field, // імя інпута
    label, // текст в лейболі
    value, // поле зі стейта
    error, // поле помилки до нашого поля
    type, // тип інпута
    placeholder, // плейс холдер фоновий текст інпута
    onChange // функція обробник події змін
    
}) => {
    console.log("error", error);
    return (
        <div className="mb-3">
            <label htmlFor={field}>{label}</label>
            <input type={type}
                className={classnames("form-control", 
                    { "is-invalid": error },
                    { "is-valid": error==undefined }
                    )}
                id={field}
                name={field}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                 />
            {!!error && <span className="text-danger">{error}</span>}
        </div>
    );
};

InputTextField.propTypes = {
    field: PropTypes.string.isRequired,// встановили типи даних і зробили поля обовязковими
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  InputTextField.defaultProps = { //  значення по замовчувані
    type: "text"
  };

export default InputTextField;