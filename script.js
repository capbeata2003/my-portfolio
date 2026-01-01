// Set current year
document.getElementById("year").textContent = new Date().getFullYear();

// Simple projects array
const projects = [
    {
        title: "Kubernetes Platform Automation",
        description: "Infrastructure-as-Code for multi-cluster Kubernetes on AWS using Terraform and GitOps."
    },
    {
        title: "Monitoring @ Scale",
        description: "End-to-end observability stack with Prometheus, Grafana, and Dynatrace integration."
    },
    {
        title: "SAP BTP Playground",
        description: "Experiments integrating SAP workloads with cloud-native services."
    }
];

const projectList = document.getElementById("projectList");
projects.forEach(p => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `<h3>${p.title}</h3><p>${p.description}</p>`;
    projectList.appendChild(card);
});

// Scroll to contact on button click
document.getElementById("contactBtn").addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});
