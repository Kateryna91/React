import { useField } from 'formik';
import classNames from 'classnames';

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    //console.log("fields", field);
    return (
      <div className="mb-3">
        <label htmlFor={props.id || props.name} className="form-label">{label}</label>
        <input className={classNames("form-control",
        {"is-invalid": meta.error && meta.touched},
        {"is-valid": !meta.error && meta.touched}
        )}
         {...field} {...props} />
        {meta.error && meta.touched && 
          <span className="text-danger">{meta.error}</span>}
      </div>
    );
  };

  export default MyTextInput;