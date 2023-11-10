import * as yup from 'yup';

export const teamMemberValidationSchema = yup.object().shape({
  role: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
