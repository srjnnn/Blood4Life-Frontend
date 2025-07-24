//  LOCAL URL
const baseUrl = "https://blood4life-backend.onrender.com/api";
//  PROD URL

// const baseUrl = "http://localhost:4000/api";        

const v1Api = `${baseUrl}/v1`;

export const apiRoutes = {
  auth : {
    signUp : `${v1Api}/signup`,
    verify : `${v1Api}/signup/verify`,
    login : `${v1Api}/login`,
    resetPassword : `${v1Api}/login/reset`,//for sending email
    verifyResetPassword : `${v1Api}/login/reset/verify`

  },

};