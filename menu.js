document.addEventListener("DOMContentLoaded", function () {
  const menTab = document.querySelector(".men");
  const menDropdown = document.querySelector(".men-section-items");

  // Show dropdown on hover
  menTab.addEventListener("mouseenter", () => {
    menDropdown.classList.remove("visibility");
  });

  // Hide dropdown when mouse leaves both nav item & dropdown
  menTab.addEventListener("mouseleave", () => {
    // Timeout to allow user to move to dropdown
    setTimeout(() => {
      if (!menDropdown.matches(":hover")) {
        menDropdown.classList.add("visibility");
      }
    }, 200);
  });

  menDropdown.addEventListener("mouseleave", () => {
    menDropdown.classList.add("visibility");
  });

  menDropdown.addEventListener("mouseenter", () => {
    menDropdown.classList.remove("visibility");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menTab = document.querySelector(".men");
  const menDropdown = document.querySelector(".men-section-items");

  const womenTab = document.querySelector(".women");
  const womenDropdown = document.querySelector(".women-section-items");

  // MEN dropdown behavior
  menTab.addEventListener("mouseenter", () => {
    menDropdown.classList.remove("visibility");
    womenDropdown.classList.add("visibility");
  });
  menTab.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!menDropdown.matches(":hover")) {
        menDropdown.classList.add("visibility");
      }
    }, 200);
  });
  menDropdown.addEventListener("mouseenter", () => {
    menDropdown.classList.remove("visibility");
  });
  menDropdown.addEventListener("mouseleave", () => {
    menDropdown.classList.add("visibility");
  });

  // WOMEN dropdown behavior
  womenTab.addEventListener("mouseenter", () => {
    womenDropdown.classList.remove("visibility");
    menDropdown.classList.add("visibility");
  });
  womenTab.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!womenDropdown.matches(":hover")) {
        womenDropdown.classList.add("visibility");
      }
    }, 200);
  });
  womenDropdown.addEventListener("mouseenter", () => {
    womenDropdown.classList.remove("visibility");
  });
  womenDropdown.addEventListener("mouseleave", () => {
    womenDropdown.classList.add("visibility");
  });
});

  const kidsTab = document.querySelector(".kids");
  const kidsDropdown = document.querySelector(".kids-section-items");

  // KIDS dropdown behavior
  kidsTab.addEventListener("mouseenter", () => {
    kidsDropdown.classList.remove("visibility");
    menDropdown.classList.add("visibility");
    womenDropdown.classList.add("visibility");
  });
  kidsTab.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!kidsDropdown.matches(":hover")) {
        kidsDropdown.classList.add("visibility");
      }
    }, 200);
  });
  kidsDropdown.addEventListener("mouseenter", () => {
    kidsDropdown.classList.remove("visibility");
  });
  kidsDropdown.addEventListener("mouseleave", () => {
    kidsDropdown.classList.add("visibility");
  });
const homeTab = document.querySelector(".homeliving");
const homeDropdown = document.querySelector(".homeliving-section-items");

homeTab.addEventListener("mouseenter", () => {
  homeDropdown.classList.remove("visibility");
  menDropdown.classList.add("visibility");
  womenDropdown.classList.add("visibility");
  kidsDropdown.classList.add("visibility");
  beautyDropdown.classList.add("visibility");
  studioDropdown.classList.add("visibility");
});

homeTab.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!homeDropdown.matches(":hover")) {
      homeDropdown.classList.add("visibility");
    }
  }, 200);
});

homeDropdown.addEventListener("mouseenter", () => {
  homeDropdown.classList.remove("visibility");
});

homeDropdown.addEventListener("mouseleave", () => {
  homeDropdown.classList.add("visibility");
});

const beautyTab = document.querySelector(".beauty");
const beautyDropdown = document.querySelector(".beauty-section-items");

beautyTab.addEventListener("mouseenter", () => {
  beautyDropdown.classList.remove("visibility");
  menDropdown.classList.add("visibility");
  womenDropdown.classList.add("visibility");
  kidsDropdown.classList.add("visibility");
  homeDropdown.classList.add("visibility");
  studioDropdown.classList.add("visibility");
});

beautyTab.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!beautyDropdown.matches(":hover")) {
      beautyDropdown.classList.add("visibility");
    }
  }, 200);
});

beautyDropdown.addEventListener("mouseenter", () => {
  beautyDropdown.classList.remove("visibility");
});

beautyDropdown.addEventListener("mouseleave", () => {
  beautyDropdown.classList.add("visibility");
});

const studioTab = document.querySelector(".studio");
const studioDropdown = document.querySelector(".studio-section-items");

studioTab.addEventListener("mouseenter", () => {
  studioDropdown.classList.remove("visibility");
  menDropdown.classList.add("visibility");
  womenDropdown.classList.add("visibility");
  kidsDropdown.classList.add("visibility");
  homeDropdown.classList.add("visibility");
  beautyDropdown.classList.add("visibility");
});

studioTab.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!studioDropdown.matches(":hover")) {
      studioDropdown.classList.add("visibility");
    }
  }, 200);
});

studioDropdown.addEventListener("mouseenter", () => {
  studioDropdown.classList.remove("visibility");
});

studioDropdown.addEventListener("mouseleave", () => {
  studioDropdown.classList.add("visibility");
});
