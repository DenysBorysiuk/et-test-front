import * as yup from 'yup';

const schema = yup
  .object({
    fullName: yup.string().required('required field'),
    email: yup.string().email().required('required field'),
    dateOfBirth: yup
      .string()
      .required('required field')
      .matches(
        /^(0[1-9]|1[0-9]|2[0-9]|3[01])\.(0[1-9]|1[012])\.\d{4}$/,
        'Invalid date format (dd.mm.yyyy)'
      )
      .test('not-in-future', 'Date should not exceed the current date', function (value) {
        const currentDate = new Date();
        const inputDate = new Date(
          value.substring(6),
          value.substring(3, 5) - 1,
          value.substring(0, 2)
        );
        return inputDate <= currentDate;
      }),
    about: yup.string().required('required field').oneOf(['social', 'friends', 'myself']),
  })
  .required();

export default schema;
