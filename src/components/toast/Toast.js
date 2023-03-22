import Swal from "sweetalert2";
function showToast(hasError, msg) {
  //   const hasError = true;
  //   const msg = "An error occurred";
  Swal.mixin({
    toast: true,
    position: "top-end",
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
