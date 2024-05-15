import RegisterForm from '@/components/RegisterForm';
import BackBtn from '@/components/BackBtn/BackBtn';

const Register = async ({ params: { id } }) => {
  return (
    <div>
      <BackBtn />

      <div className="border w-fit flex flex-col mx-auto items-center p-8">
        <h1 className="mb-6 text-xl">Event registration</h1>

        <RegisterForm eventId={id} />
      </div>
    </div>
  );
};

export default Register;
