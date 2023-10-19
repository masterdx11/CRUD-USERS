const EMAIL_VALIDATIONS =
 {
        required:{
            value: true,
            message: "Este campo es requerido"
        },
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message:"Ingrese un correo válido"
        }
    }

    const INPUT_VALIDATIONS = {
        required: {
            value:true,
            message: "Este campo es requerido",
        },
        maxLength: {
            value: 40,
            message: "Este campo acepta 40 caracteres máximo",
        },
        minLength: {
            value: 2,
            message: "Este campo acepta 2 caracteres mínimo",
        }
    }

    const URL_IMAGE_VALIDATIONS = {
        required: {
          value: true,
          message: "Este campo es requerido",
        },
        pattern: {
          value: /(https?:\/\/)?(www\.)?([a-z0-9]([a-z0-9]|(-[a-z0-9]))*\.)+[a-z]+(\/[-a-z_]+)*\/[a-z]+\.(jpg|png|jpeg|JPG|PNG|JPEG)$/i          ,
          message: "Ingrese una dirección (URL) válida",
        },
      };
      
    const DATE_VALIDATIONS = {
        required: {
          value: true,
          message: "Este campo es requerido",
        },
      };

   
   

    export{
        EMAIL_VALIDATIONS,
        INPUT_VALIDATIONS,
        URL_IMAGE_VALIDATIONS,
        DATE_VALIDATIONS,
    }