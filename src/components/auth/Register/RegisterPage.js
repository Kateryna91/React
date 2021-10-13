import React, { useRef } from 'react'
import classnames from "classnames";
import InputTextField from '../../common/InputTextField';
import validationFields from './validation';
import {Formik, Form} from 'formik';
import MyTextInput from '../../common/MyTextInput';
import MyPhotoInput from '../../common/MyPhotoInput';
import http from "../../../http_common";

const RegisterPage = () => {

    const initState ={
        email: '',
        password:'',
        photo: null,
        confirmPassword:'',
        fio: '',
    };

    const formikRef =useRef();
 //функція яка викликається під час події он сабміт (умовно відправляє дані на сервер)
    const onSubmitHandler = (values) =>
    {
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => formData.append(key, value));

        http.post("api/account/register", formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        // console.log("Server submit data", values);

        // console.log("Server submit data", JSON.stringify(
        //     {
        //         fileName: values.photo.name,
        //         type: values.photo.type,
        //         size: `${values.photo.size} bytes`
        //     },
        //     null,2

        // ));
    }

//ретурнимо нашу сторінку 
return (
    <div className="row">
        <h1 className="text-center">Реєстрація</h1>
        <div className="offset-md-3 col-md-6">
            <Formik
                innerRef={formikRef}
                initialValues={initState}
                onSubmit={onSubmitHandler}
                validationSchema={validationFields()}>
                <Form>
                    <MyTextInput
                        label="ПІБ"
                        name="fio"
                        id="fio"
                        type="text"
                    />

                    <MyTextInput
                        label="Електронна пошта"
                        name="email"
                        id="email"
                        type="text"
                    />
                   <MyPhotoInput
                            myField="photo"
                            name="photo"
                            id="photo"
                            formikRef={formikRef}
                        />

                    <MyTextInput
                        label="Пароль"
                        name="password"
                        id="password"
                        type="password"
                    />
                    <MyTextInput
                        label="Повтор пароль"
                        name="confirmPassword"
                        id="confirmPassword"
                        type="password"
                    />


                    <button type="submit" className="btn btn-success">Реєстрація</button>
                </Form>
            </Formik>
        </div>
    </div>
);
}

export default RegisterPage;













 //створюємо обєкт стейт де описуємо наші поля
// export class RegisterPage extends Component {
//     state = {
//         email: '',
//         password: '',
//         confirmPassword: '',
//         fio: '',
//         phone: '',
//         photo:'',
//         BasePhoto: '',
//         isValidation: false,

// добавляємо обєкт помилки
//         errors: {
//             email: '',
//             password: '',
//             phone: '',
//             photo: '',
//             confirmPassword: '',
//             fio: '',
//         }
//     }


// //функція яка викликається під час відправки форми
//     onSubmitHandler = (e) => {
//         e.preventDefault();
        

    //     var errors = validatonFields(this.state); //викликаємо валідатор і передаємо стейт from './Validation'
    //     const isValid = Object.keys(errors).length === 0;   // створюємо змінну isValid і приводимо її до буля перевіркою чи є в нашому масиві помилки
    //     // якщо значення буде не 0 тоді в нас є декілька помилок 
    //     if (isValid) // перевіряємо чи значення валідне якщо так тоді відправляємо дані на сервер
    //     {
    //         alert(this.state); // типу сервер
    //     }
    //     else // якщо значення не валідні
    //     {
    //         this.setState({ errors: errors, isValidation: true }); // рендеримо нашу сторінку знову. І надсилаємо туди наші помилки 
    //     }

    // }

    // // функція яку викликає кожен інпут викликається при зміні значень в інпуті
    // onChangeHandler = (e) => {
    //     const { name, value } = e.target; // витягуємо імя і значення з інпута 
    //     const { isValidation } = this.state; // втановюємо значення isValidation (тру якщо форма вже надсилалася)]
    //     if (isValidation) // якщо значення тру
    //     {
    //         const data = { ...this.state, [name]: value }; // розширяємо наш стейт і присвоюємо значення
    //         console.log(data);
    //         const errors = validatіonFields(data) // надсилаєм дані щоб перевірити валідність тут дані перевіряються динамічно
    //         this.setState({ [name]: value, errors: errors }); // повторно рендерим з первіреними даними
    //     }
    //     else {
    //         this.setState({ [name]: value }) // повторно рендерим наш інпут з новим значенням
    //     }
    // }

//     onChangePhoto = (e) => {
//         const files = e.target.files;
//         var photo;
//         if (files && files[0]) { // перевіряємо чи файл обрано
//             const file = files[0]; // присваюємо
//             if (file.type.match(/^image\//)) { // перевіряємо чи тип файлу фото
//                 const reader = new FileReader(); // створюємо змінну
//                 reader.onload = function () { // після загрузки файлу виконуємо наступний код....
                    
//                     photo = reader.result;
//                     console.log(photo);
//                 }
//                 reader.readAsDataURL(file); //використовується для читання File. Коли операція закінчиться
//             }
//         }
//         const { isValidation } = this.state; // втановюємо значення isValidation (тру якщо форма вже надсилалася)
//         if (isValidation) // якщо значення тру
//         {
//             const data = { ...this.state, 'photo': photo } // розширяємо наш стейт і присвоюємо значення
//             const errors = validationFields(data) // надсилаєм дані щоб перевірити валідність тут дані перевіряються динамічно
//             this.setState({ 'photo': photo, errors: errors }); // повторно рендерим з первіреними даними
//         }
//         else {
//             this.setState({ 'photo': photo }) // повторно рендерим наш інпут з новим значенням
//             this.setState({ 'PhotoBase': photo })
//         }
//     }


//     render() {
//         const {errors} = this.state;
//         return (
//             <div className="row">
//                 <h1 className="text-center">Registation</h1>
//                 <div className="offset-md-3 col-md-6">
//                     <form onSubmit={this.onSubmitHandler}>
                        
//                         <InputTextField
//                             field="fio"
//                             label="FIO"
//                             value={this.state.fio}
//                             error={errors.fio}
//                             onChange={this.onChangeHandler}
//                          />

//                         <InputTextField
//                             field="email"
//                             label="Email"
//                             value={this.state.email}
//                             error={errors.email}
//                             onChange={this.onChangeHandler}
//                          />

//                         <InputTextField
//                             field="phone"
//                             label="Phone"
//                             value={this.state.phone}
//                             error={errors.phone}
//                             onChange={this.onChangeHandler}
//                             type="number"
//                             placeholder="+38(XXX)-XXX-XX-XX"
//                          />
                        
//                         <InputTextField
//                             field="password"
//                             label="Password"
//                             value={this.state.password}
//                             error={errors.password}
//                             onChange={this.onChangeHandler}
//                             type="password"
//                          />

//                          <InputTextField
//                             field="confirmPassword"
//                             label="Confirm password"
//                             value={this.state.confirmPassword}
//                             error={errors.confirmPassword}
//                             onChange={this.onChangeHandler}
//                             type="password"
//                          />

//                             <div className="mb-3">
//                             <img src={this.state.BasePhoto} id="PhotoBase" name="PhotoBase" alt="Foto"></img>
                            
//                             <input type="file"
//                                 className={classnames("form-control",
//                                     { "is-invalid": errors.photo },
//                                     { "is-valid": errors.photo == undefined }
//                                 )}
//                                 id="photo"
//                                 name="photo"
//                                 value={this.state.photo}
//                                 onChange={this.onChangeHandler}
//                                 placeholder="Decide foto"
//                             />
//                             {!!errors.photo && <div className="invalid-feedback">{errors.photo}</div>}
//                         </div>

//                         <button type="submit" className="btn btn-success">Реєстрація</button>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

