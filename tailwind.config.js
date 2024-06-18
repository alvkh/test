/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Poppins-Bold':'Poppins-Bold',
        'Poppins-SemiBold':'Poppins-SemiBold',
        'Poppins-Medium':'Poppins-Medium',
        'Poppins-Regular':'Poppins-Regular',
        'Poppins-Light':'Poppins-Light',
        'Righteous-Regular':'Righteous-Regular',
      },
      colors:{
        'Primery':'#0c65fd',
        'Secondry':'#777e90',
        'Background':'#0f172a'
      }
    },
  },
  plugins: [],
}

