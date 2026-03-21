import { projectCategories, projects } from "./project-data.js";

const projectSectionsContainer = document.getElementById("project-sections");

const projectModalElement = document.getElementById("project-modal");
const projectModal = new bootstrap.Modal(projectModalElement);

function getIconHtml(iconName) {
  const iconMap = {
    external: "bi-box-arrow-up-right",
    github: "bi-github",
    steam: "bi-steam",
    video: "bi-play-btn-fill"
  };

  const iconClass = iconMap[iconName];

  if (!iconClass) {
    return "";
  }

  return `<i class="bi ${iconClass}" aria-hidden="true"></i>`;
}

function createLinkHtml(link) {
  const buttonStyle = link.style || "btn-outline-light";
  const iconHtml = getIconHtml(link.icon);

  return `
    <a href="${link.url}" class="btn ${buttonStyle} project-link-btn" target="_blank" rel="noopener noreferrer">
      ${iconHtml}
      <span>${link.label}</span>
    </a>
  `;
}

function createProjectCardHtml(project) {
  const tagsHtml = project.tags
    .map(tag => `<span class="badge tech-badge">${tag}</span>`)
    .join("");

  const linksHtml = project.links
    .map(createLinkHtml)
    .join("");

  return `
    <div class="col-12 col-md-6 col-lg-4">
      <article class="card project-card h-100">
        <div class="project-thumb">
          <img src="${project.image}" alt="${project.imageAlt}" class="project-image">
        </div>

        <div class="card-body d-flex flex-column">
          <h3 class="h4 card-title project-title">${project.title}</h3>
          <p class="card-text">${project.summary}</p>

          <div class="project-card-footer mt-auto">
            <div class="project-tags mb-3">
              ${tagsHtml}
            </div>

            <div class="d-flex gap-2 flex-wrap">
              <button type="button" class="btn btn-primary project-details-btn" data-project-id="${project.id}">
                ${project.detailsButtonLabel || "More details"}
              </button>
              ${linksHtml}
            </div>
          </div>
        </div>
      </article>
    </div>
  `;
}

function createCategorySectionHtml(category) {
  const categoryProjects = projects.filter(
    project => project.category === category.id
  );

  const cardsHtml = categoryProjects
    .map(createProjectCardHtml)
    .join("");

  return `
    <section class="mb-5">
      <div class="d-flex justify-content-between align-items-center flex-wrap mb-3">
        <h3 class="mb-1">${category.title}</h3>
        <p class="text-light-subtle mb-0"><!-- ${category.subtitle} --></p>
      </div>

      <div class="row g-4">
        ${cardsHtml}
      </div>
    </section>
  `;
}

function renderProjects() {
  const allSectionsHtml = projectCategories
    .map(createCategorySectionHtml)
    .join("");

  projectSectionsContainer.innerHTML = allSectionsHtml;
}

function renderProjectModal(project) {
  const modalTitle = projectModalElement.querySelector(".modal-title");
  const modalSubtitle = projectModalElement.querySelector(".project-modal-summary");
  const modalTagContainer = projectModalElement.querySelector(".project-modal-tags");
  const modalContributionList = projectModalElement.querySelector(".project-modal-highlights");
  const modalFooterLinks = projectModalElement.querySelector(".project-modal-links");

  modalTitle.textContent = project.title;
  modalSubtitle.textContent = project.longDescription || "";

  modalTagContainer.innerHTML = project.tags
    .map(tag => `<span class="badge tech-badge">${tag}</span>`)
    .join("");

  modalContributionList.innerHTML = project.highlights
    .map(item => `<li>${item}</li>`)
    .join("");

  modalFooterLinks.innerHTML = project.links
    .map(createLinkHtml)
    .join("");
}

function setupProjectModalInteractions() {
  projectSectionsContainer.addEventListener("click", event => {
    const detailsButton = event.target.closest(".project-details-btn");

    if (!detailsButton) {
      return;
    }

    const projectId = detailsButton.dataset.projectId;
    const project = projects.find(currentProject => currentProject.id === projectId);

    if (!project) {
      console.error(`No project found for id: ${projectId}`);
      return;
    }

    renderProjectModal(project);
    projectModal.show();
  });
}

renderProjects();
setupProjectModalInteractions();