# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



#dark mode

##tailwind.config.js
+ darkMode:"class",

```Javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [],
}


```

## inside a component

```Javascript
    let [mode, setMode] = useState(false)

    useEffect(()=> {
        if(mode){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
        console.log(mode)
    },[mode])

 <button onClick={()=> setMode(!mode)} className="text-silver font-medium text-2xl border-2 rounded-md border-silver hover:text-black hover:border-black">{mode ? <MdSunny /> : <MdModeNight/>}</button>
```
