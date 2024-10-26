// if hover is available
if (matchMedia("not all and (hover: none)").matches) {
  for (icon of document.getElementsByTagName("box-icon")) {
    icon.setAttribute("animation", "tada-hover");
  }
}

navbar.hide();
returnHome();
generateModuleSelection();