import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';

const BackBtn = () => {
  return (
    <Link className="flex items-center my-4 gap-1" href="/">
      <FaArrowLeft />
      Back
    </Link>
  );
};

export default BackBtn;
