const tabs = document.querySelectorAll(".tab");
const forms = document.querySelectorAll(".form");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    // tab active
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    // show form
    const target = tab.getAttribute("data-target");

    forms.forEach(form => {
      form.classList.remove("show");
      if (form.id === target) {
        form.classList.add("show");
      }
    });

  });
});
