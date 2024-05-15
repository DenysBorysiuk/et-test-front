const RadioButtons = ({ register, errors }) => {
  return (
    <div className="relative">
      <p className="mb-4">Where did you hear about this event?</p>

      <ul className="flex gap-4">
        <li className="flex gap-1 items-center">
          <input type="radio" value="social" id="social" {...register('about')} />
          <label className="text-sm" htmlFor="social">
            Social Media
          </label>
        </li>

        <li className="flex gap-1 items-center">
          <input type="radio" value="friends" id="friends" {...register('about')} />
          <label className="text-sm" htmlFor="friends">
            Friends
          </label>
        </li>

        <li className="flex gap-1 items-center">
          <input type="radio" value="myself" id="myself" {...register('about')} />
          <label className="text-sm" htmlFor="myself">
            Found myself
          </label>
        </li>
      </ul>

      <p className="field-error">{errors.about?.message}</p>
    </div>
  );
};

export default RadioButtons;
