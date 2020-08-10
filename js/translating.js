// Setting function to load the script while the page is loading
window.addEventListener('DOMContentLoaded', function (translating) {
  
  // Archiving the text content for each languege
  var language = {
    en: {
      aboutTitle: "About me",
      aboutDescription: "I'm a 27 years old brazilian based in Rio de Janeiro, Brazil. An Information System student in the process to become an front-end developer and currently learning all about Javascript and looking for freelance jobs and a remote internship. ",
      contactTitle: "Contact",
      toolsTitle: "Tools and Features",
      toolsP: "Some tools and features I use for my projects.",
      projectTitle: "Highlight Projects",
      projectP: "Alguns dos principais projetos que trabalhei",
      projectLink: "Visit",
      projectCode: "Code"
    },
    pt: {
      aboutTitle: "Sobre mim",
      aboutDescription: "Paraense de alma carioca. Estou caminhando para me tornar uma desenvolvedora front-end. Sou graduanda de Sistemas da Informação pela Universidade Estácio de Sá. Atualmente estou estudando por conta própria o máximo sobre Javascript e além de realizar outros cursos. Estou a procura de trabalhos como freelancer e também uma oportunidade de estágio.",
      contactTitle: "Contato",
      toolsTitle: "Ferramentas & Recursos",
      toolsP: "Algumas ferramentas eenecursos que utilizo durante meus projetos.",
      projectTitle: "Projetos em destaque",
      projectP: "Alguns dos principais projetos que trabalhei",
      projectLink: "Visite",
      projectCode: "Código"
    }
  }

  // Condition to read the browser language, 
  // if it's portuguese it shows the content in portuguese
  // else... for any other language it shows the page in english

  if (/^en\b/.test(navigator.language)) {
    // How to show it
    // id.textContent = language.pt.aboutTitle
  
    aboutTitle.textContent = language.pt.aboutTitle
    aboutDescription.textContent = language.pt.aboutDescription
    contactTitle.textContent = language.pt.contactTitle
    toolsTitle.textContent = language.pt.toolsTitle
    toolsP.textContent = language.pt.toolsP
    projectTitle.textContent = language.pt.projectTitle
    projectP.textContent = language.pt.projectP
    projectLink.textContent = language.pt.projectLink
    projectCode.textContent = language.pt.projectCode
  } else {
    aboutTitle.textContent = language.en.aboutTitle
    aboutDescription.textContent = language.en.aboutDescription
    contactTitle.textContent = language.en.contactTitle
    toolsTitle.textContent = language.en.toolsTitle
    toolsP.textContent = language.en.toolsP
    projectTitle.textContent = language.en.projectTitle
    projectP.textContent = language.en.projectP
    projectLink.textContent = language.en.projectLink
    projectCode.textContent = language.en.projectCode
  }
});