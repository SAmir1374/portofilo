function sendEmailFunc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
      // this part is for debugging?
    }
  };
}

export default sendEmailFunc;
