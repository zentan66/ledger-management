const files = import.meta.globEager('./*.vue')

Object.keys(files).forEach(() => {
  // const name = filename.replace(/\.\/|\.vue/g, '')
  // console.log(name);
  // files[filename].default
})
