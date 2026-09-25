export interface Job {
  role: string;
  org: string;
  dates: string;
  blurb?: string;
  bullets: string[];
  stack?: string[];
}

export const experience: Job[] = [
  {
    role: 'Senior MLOps Engineer',
    org: 'Mango',
    dates: '06/2026 – Present · Barcelona, Spain',
    blurb:
      'Mango is a global fashion retailer operating in 120 markets, built around its e-commerce platform at <a href="https://shop.mango.com" target="_blank" rel="noopener">shop.mango.com</a>.',
    bullets: [
      'Built and maintaining 3 golden path project templates: Airflow DAG batch pipelines, FastAPI, and Streamlit apps on EKS, deployed with Terragrunt via Jenkins CI/CD.',
      'Collaborating with Pricing, Personalisation, and GenAI teams to standardize training and deployment across Databricks and EKS.',
      'Integrating GenAI applications with Requesty for LLM routing and AWS Bedrock Knowledge Bases for RAG, powering an internal and client-facing chatbot (Lisa) and a content generator for marketing campaign teams.',
    ],
    stack: ['AWS EKS', 'Terraform/Terragrunt', 'Jenkins CI/CD', 'Databricks', 'GenAI/RAG'],
  },
  {
    role: 'AI Engineer',
    org: 'Alexion (AstraZeneca Rare Disease)',
    dates: '01/2026 – 06/2026 · Barcelona, Spain',
    blurb:
      "Alexion is AstraZeneca's Rare Disease Unit, a global leader in developing therapies for rare and ultra-rare diseases.",
    bullets: [
      'Extended GenIO, Alexion\'s internal agentic AI framework, with a Snowflake integration via the official <a href="https://github.com/Snowflake-Labs/mcp/tree/v.1.4.1" target="_blank" rel="noopener">open-source MCP server</a>, enabling agents to query enterprise data using natural language.',
      'Implemented semantic retrieval and Text-to-SQL within agent workflows using Snowflake Cortex Search and Cortex Analyst.',
    ],
    stack: ['Agentic AI', 'Snowflake', 'MCP', 'Text-to-SQL'],
  },
  {
    role: 'Research Assistant - AI for Clinical Imaging',
    org: 'BCN-MedTech',
    dates: '09/2025 – 12/2025 · Barcelona, Spain',
    blurb:
      "BCN-MedTech is UPF's interdisciplinary research unit using medical imaging, machine learning, and related methods to drive personalised medicine.",
    bullets: [
      'Extended the <a href="https://pubmed.ncbi.nlm.nih.gov/39125531/" target="_blank" rel="noopener">LiverColor</a> platform, aimed at assessing liver graft suitability for transplantation.',
      "Processed a dataset of bariatric laparoscopic images from Vall d'Hebron and Reus hospitals, designing a pipeline of image pre-processing, an autoencoder for unsupervised feature extraction, and a classifier to detect hepatic steatosis.",
    ],
    stack: ['Computer Vision', 'Autoencoders', 'Medical Imaging', 'Python'],
  },
  {
    role: 'Site Reliability Engineer',
    org: 'Sky',
    dates: '09/2023 – 09/2025 · London, UK',
    blurb:
      "Sky is Europe's largest media company by revenue, serving over 23 million subscribers across TV, broadband, and streaming. Managed the reliability, observability, and scale of the NowTV, Peacock, and SkyShowtime streaming platforms.",
    bullets: [
      'Provisioned and maintained a GCP platform to collect user streaming data for auditing, analytics, and content recommendation systems.',
      'Developed Terraform modules with Terragrunt for repeatable, modular IaC, reducing Kubernetes environment setup time from 2 days to 4 hours.',
      'Hands-on with GCP Config Connector on GKE and AWS Controllers for Kubernetes (ACK) on EKS.',
      'Operated a paid 24/7 on-call rota, diagnosing and resolving production incidents, including during major live events outside regular hours.',
    ],
    stack: ['GCP', 'GKE', 'Terraform', 'Kubernetes', 'On-call/SRE'],
  },
  {
    role: 'Associate Site Reliability Engineer',
    org: 'Sky',
    dates: '10/2021 – 09/2023 · London, UK',
    bullets: [
      'Scaled and stress-tested platform reliability for <a href="https://corporate.comcast.com/press/releases/super-bowl-reaches-167-million-viewers-most-watched-show-in-5-years" target="_blank" rel="noopener">Super Bowl LVI</a>, handling over 10 million concurrent users with zero outages.',
      'Optimised Kubernetes cluster efficiency by automating pod scheduling to the lowest-cost nodes, reducing spend by 32% and saving $156k annually per environment.',
      'Integrated Jenkins CI/CD pipelines for infrastructure delivery on GCP.',
      'Implemented monitoring and alerting with Prometheus and Grafana.',
    ],
    stack: ['Kubernetes', 'Jenkins CI/CD', 'Prometheus/Grafana', 'Cost Optimization'],
  },
  {
    role: 'Cloud Engineer',
    org: 'Kubrick Group',
    dates: '06/2021 – 10/2021 · London, UK',
    blurb: 'A London-based, award-winning consultancy specialising in data, AI, and cloud solutions.',
    bullets: [
      'Delivered cloud engineering consultancy projects on Azure for enterprise clients, communicating technical progress to stakeholders.',
    ],
    stack: ['Azure', 'Consulting'],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'ML / AI', items: ['PyTorch', 'scikit-learn', 'Computer Vision', 'Deep Learning'] },
  { group: 'GenAI', items: ['Requesty (LLM routing)', 'RAG', 'MCP', 'Agno'] },
  { group: 'Data & Cloud', items: ['GCP', 'AWS', 'Kubernetes', 'Python', 'Bash', 'Databricks'] },
];

export interface Degree {
  degree: string;
  org: string;
  dates: string;
  details: string[];
}

export const education: Degree[] = [
  {
    degree:
      '<a href="https://www.upf.edu/web/emai/about-this-master" target="_blank" rel="noopener">MSc Erasmus Mundus in Artificial Intelligence</a>',
    org: 'Universitat Pompeu Fabra / Radboud University',
    dates: '2024 – 2026',
    details: [
      'One of 25 Erasmus Mundus scholarship recipients out of over 2,000 applicants.',
      'Research placement at <a href="https://www.radboudumc.nl/en/about-radboudumc" target="_blank" rel="noopener">Radboudumc</a>: explored how spatial and intensity data augmentations affect nnU-Net v2 performance on Universal Lesion Segmentation (<a href="https://github.com/daniel-duhnev/ULS-model-container" target="_blank" rel="noopener">GitHub</a>).',
      'Thesis: "Radiomics-Based Analysis of Grayscale Ultrasound for Pancreas Transplant Rejection Detection".',
    ],
  },
  {
    degree: 'BSc Physics',
    org: 'University College London',
    dates: '2018 – 2021',
    details: [
      'Awarded First Class Honours, ranking in the top 10% of the class.',
      'Applied Mathematics, Statistics & Data Analysis; Computational Physics; Practical Machine Learning for Physics.',
      'Python for Scientific Computing: NumPy, SciPy, pandas, matplotlib.',
    ],
  },
];
