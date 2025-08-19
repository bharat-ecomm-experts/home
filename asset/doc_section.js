document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tab-link");
  const subTabLinks = document.querySelectorAll(".sub-tab-link");
  const subTabsubmenuLinks = document.querySelectorAll(".sub-tab-submenu-link");
  const subTabContainers = document.querySelectorAll(".sub-tab-container");
  const tabPanels = document.querySelectorAll(".tab-panel");
  const subTabPanels = document.querySelectorAll(".sub-tab-panel");


tabLinks.forEach((tab) => {
  tab.addEventListener("click", function () {
    const target = this.getAttribute("data-tab");
    const relatedTabPanel = document.getElementById(target);
    const relatedSubTabContainer = document.getElementById(target + "-sub-tabs");


    // If already active, do nothing
    if (this.classList.contains("active")) {
      return;
    }


    // Reset all
    tabLinks.forEach((t) => t.classList.remove("active"));
    tabPanels.forEach((panel) => panel.classList.remove("active"));
    subTabContainers.forEach((container) => {
      container.classList.remove("active");
      container.style.display = "none";
    });


    // Activate current tab
    this.classList.add("active");
    relatedTabPanel?.classList.add("active");
    if (relatedSubTabContainer) {
      relatedSubTabContainer.classList.add("active");
      relatedSubTabContainer.style.display = "block";


      // ✅ Activate first sub-tab
      const firstSubTab = relatedSubTabContainer.querySelector(".sub-tab-menu .sub-tab-link");
      if (firstSubTab) {
        subTabLinks.forEach((s) => s.classList.remove("active"));
        subTabPanels.forEach((sp) => sp.classList.remove("active"));


        firstSubTab.classList.add("active");


        const subTarget = firstSubTab.getAttribute("data-sub-tab");
        const targetPanel = document.getElementById(subTarget);
        if (targetPanel) {
          targetPanel.classList.add("active");


          const parentTabPanel = targetPanel.closest(".tab-panel");
          if (parentTabPanel) {
            parentTabPanel.classList.add("active");
          }
        }
      }
    }
  });
});






  subTabLinks.forEach((subTab) => {
    subTab.addEventListener("click", function () {
      const subTarget = this.getAttribute("data-sub-tab");
      subTabLinks.forEach((s) => s.classList.remove("active"));
      subTabPanels.forEach((sp) => sp.classList.remove("active"));
      tabPanels.forEach((tp) => tp.classList.remove("active"));
      this.classList.add("active");
      const targetPanel = document.getElementById(subTarget);
      if (targetPanel) {
        targetPanel.classList.add("active");
        const parentTabPanel = targetPanel.closest(".tab-panel");
        if (parentTabPanel) {
          parentTabPanel.classList.add("active");
        }
      }
    });
  });


  subTabsubmenuLinks.forEach((subTab) => {
    subTab.addEventListener("click", function () {
      const subTarget = this.getAttribute("data-sub-tab-submenu");
      subTabsubmenuLinks.forEach((s) => s.classList.remove("active"));
      subTabPanels.forEach((sp) => sp.classList.remove("active"));
       this.classList.add("active");
      const targetPanel = document.getElementById(subTarget);
      if (targetPanel) {
        targetPanel.classList.add("active");
        const parentTabPanel = targetPanel.closest(".tab-panel");
        if (parentTabPanel) {
          parentTabPanel.classList.add("active");
        }
      }
    });
  });
 
  // arrow icon
  let arrow = document.querySelector(".position_arrow");
  let tabMenu = document.querySelector(".tab-menu");
  let tabContent = document.querySelector(".tab-content");


    arrow.addEventListener("click", function () {
      tabMenu.classList.toggle("show"); // Smooth show/hide effect
      tabContent.classList.toggle("show"); // Smooth show/hide effect
      arrow.classList.toggle("active_arrow"); // Rotate arrow
  });


  //mobile menu icon  
  let menuButton = document.querySelector(".main_head");
  let menuTab = document.querySelector(".main-tabs");
  let menuButtonSvg = document.querySelector(".main_head_svg");
 
  menuButtonSvg.addEventListener("click", function () {
      menuTab.classList.toggle("show");
      menuButton.classList.toggle("show");
  });
 
});
