import { IconSquareRoundedXFilled } from "@tabler/icons-react";
import {
  EMAIL_VALIDATIONS,
  INPUT_VALIDATIONS,
  URL_IMAGE_VALIDATIONS,
  DATE_VALIDATIONS,
} from "../constants/formValidation";

const Modal = ({
  isShowModal,
  handleClosedModal,
  handleSubmit,
  register,
  submit,
  idUserToEdit,
  errors,
}) => {
  return (
    <section
      className={`fixed w-[100%] h-[100%] flex justify-center items-center px-3 transition-all 
      ${isShowModal ? "visible opacity-100" : "invisible opacity-0"}  bg-black/10`}
    >
      <form
        onSubmit={handleSubmit((data) => submit(data))}
        className=" bg-gradient-to-bl border border-emerald-600 from-red-50 via-emerald-50 to-yellow-50 
        p-3 rounded-md grid gap-2 text-lg font-semibold w-[min(100%,_320px)] absolute"
      >
        <h2 className="text-center">
          {idUserToEdit ? "Editar" : "Crear Usuario"}
        </h2>
        <button
          onClick={handleClosedModal}
          type="button"
          className="text-red-500 hover:text-red-600 absolute top-2 right-2 transition-colors "
        >
          <IconSquareRoundedXFilled />
        </button>

        <div className="grid gap-1">
          <label className="text-sm font-light" htmlFor="first_name">
            Nombre
          </label>
          <input
            className="rounded outline-none border border-blue-950/60 px-2 py-1"
            id="first_name"
            type="text"
            {...register("first_name", INPUT_VALIDATIONS)}
          />
          {errors.first_name && (
            <span className="text-xs text-red-500">{errors.first_name.message}</span>
          )}
        </div>
        <div className="grid gap-1">
          <label className="text-sm font-light" htmlFor="last_name">
            Apellido
          </label>
          <input
            className="rounded outline-none border border-blue-950/60 px-2 py-1"
            id="last_name"
            type="text"
            {...register("last_name", INPUT_VALIDATIONS)}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-sm font-light" htmlFor="color">
            Fecha Nacimiento
          </label>
          <input
            className="rounded outline-none border border-blue-950/60 px-2 py-1"
            id="birthday"
            type="date"
            {...register("birthday", DATE_VALIDATIONS)}
          />
           {errors.birthday && (
            <span className="text-xs text-red-500">{errors.birthday.message}</span>
          )}
        </div>

        <div className="grid gap-1">
          <label className="text-sm font-light" htmlFor="email">
            Email{" "}
          </label>
          <input
            className="rounded outline-none border border-blue-950/60 px-2 py-1"
            id="email"
            type="text"
            {...register("email", EMAIL_VALIDATIONS)}
            autoComplete="username"
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="grid gap-1">
          <label className="text-sm font-light" htmlFor="image_url">
            URL imagen{" "}
          </label>
          <input
            className="rounded outline-none border border-blue-950/60 px-2 py-1"
            id="image_url"
            type="text"
            {...register("image_url")}
          />
          {errors.image_url && (
            <span className="text-xs text-red-500">
              {errors.image_url.message}
            </span>
          )}
        </div>

        <div className="grid gap-1">
          <label className="text-sm font-light" htmlFor="password">
            Contraseña
          </label>
          <input
            className="rounded outline-none border border-blue-950/60 px-2 py-1"
            id="password"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-xs text-red-500">{errors.password.message}</span>
          )}
        </div>

        <button
          className="bg-blue-950 font-semibold text-emerald-200 px-2 py-1 rounded-md hover:bg-orange-600 transition-colors"
        >
          {idUserToEdit ? "Guardar cambios" : "Crear Usuario"}
        </button>
      </form>
    </section>
  );
};

export default Modal;
