export default function saveModalIntroduce(setModalIntroduce) {
  const showModalIntroduce = () => {
    if (!localStorage.getItem("modalIntroduce")) {
      setModalIntroduce(true);
      localStorage.setItem("modalIntroduce", true);
    }

    window.addEventListener("DOMContentLoaded", showModalIntroduce);
  };
}
