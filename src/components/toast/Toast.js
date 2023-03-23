import Swal from "sweetalert2";
import "./Toast.css";

function showToast(hasError, msg) {
  Swal.mixin({
    toast: true,
    position: "top-start",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  }).fire({
    icon: hasError ? "error" : "success",
    title: msg,
  });
}
export default showToast;
