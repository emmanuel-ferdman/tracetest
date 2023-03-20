/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

// generated docs pages
/** @type {import('@docusaurus/plugin-content-docs/lib/sidebars/types').SidebarItem[]} */
const cliGeneratedPages = require("./docs/cli/reference/cli-sidebar");

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: "doc",
      id: "index",
      label: "Introduction",
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        {
          type: "doc",
          id: "getting-started/installation",
          label: "Quick Start",
        },
        {
          type: "doc",
          id: "getting-started/detailed-installation",
          label: "Detailed Installation",
        },
      ],
    },
    {
      type: "category",
      label: "Configuration",
      items: [
        {
          type: "doc",
          id: "configuration/overview",
          label: "Overview",
        },
        // {
        //   type: "doc",
        //   id: "configuration/config-file-reference",
        //   label: "Config File Reference",
        // },
        {
          type: "category",
          label: "Connecting to Data Stores",
          items: [
            {
              type: "doc",
              id: "configuration/connecting-to-data-stores/opentelemetry-collector",
              label: "OpenTelemetry Collector",
            },
            {
              type: "doc",
              id: "configuration/connecting-to-data-stores/jaeger",
              label: "Jaeger",
            },
            {
              type: "doc",
              id: "configuration/connecting-to-data-stores/opensearch",
              label: "OpenSearch",
            },
            {
              type: "doc",
              id: "configuration/connecting-to-data-stores/elasticapm",
              label: "Elastic APM",
            },
            {
              type: "doc",
              id: "configuration/connecting-to-data-stores/signalfx",
              label: "SignalFX",
            },
            {
              type: "doc",
              id: "configuration/connecting-to-data-stores/tempo",
              label: "Tempo",
            },
            {
              type: "doc",
              id: "configuration/connecting-to-data-stores/lightstep",
              label: "Lightstep",
            },
            {
              type: "doc",
              id: "configuration/connecting-to-data-stores/new-relic",
              label: "New Relic",
            },
            {
              type: "doc",
              id: "configuration/connecting-to-data-stores/awsxray",
              label: "AWS X-Ray",
            },
            {
              type: "doc",
              id: "configuration/connecting-to-data-stores/datadog",
              label: "Datadog",
            },
          ],
        },
        {
          type: "doc",
          id: "configuration/opentelemetry-collector-configuration-file-reference",
          label: "OpenTelemetry Collector Configuration File Reference",
        },
        {
          type: "doc",
          id: "configuration/trace-polling",
          label: "Trace Polling",
        },
        {
          type: "doc",
          id: "configuration/demo",
          label: "Demo Applications",
        },
        {
          type: "doc",
          id: "configuration/analytics",
          label: "Analytics",
        },
      ],
    },
    {
      type: "category",
      label: "Deployment",
      items: [
        {
          type: "doc",
          id: "deployment/overview",
          label: "Deployment Overview",
        },
        // {
        //   type: "doc",
        //   id: "deployment/production-checklist",
        //   label: "Production checklist",
        // },
        {
          type: "doc",
          id: "deployment/docker",
          label: "Docker",
        },
        {
          type: "doc",
          id: "deployment/kubernetes",
          label: "Kubernetes",
        },
      ],
    },
    {
      type: "category",
      label: "Concepts",
      items: [
        {
          type: "doc",
          id: "concepts/what-is-trace-based-testing",
          label: "What is trace-based testing",
        },
        // {
        //   type: "doc",
        //   id: "concepts/what-is-tracing",
        //   label: "What is tracing",
        // },
        {
          type: "doc",
          id: "concepts/architecture",
          label: "Architecture",
        },
        {
          type: "doc",
          id: "concepts/assertions",
          label: "Assertions",
        },
        // {
        //   type: "doc",
        //   id: "concepts/data-stores",
        //   label: "Data Stores",
        // },
        {
          type: "doc",
          id: "concepts/environments",
          label: "Environments",
        },
        {
          type: "doc",
          id: "concepts/selectors",
          label: "Selectors",
        },
        // {
        //   type: "doc",
        //   id: "concepts/tests",
        //   label: "Tests",
        // },
        {
          type: "doc",
          id: "concepts/expressions",
          label: "Expressions",
        },
        {
          type: "doc",
          id: "concepts/transactions",
          label: "Transactions",
        },
        {
          type: "doc",
          id: "concepts/versioning",
          label: "Versioning",
        },
      ],
    },
    {
      type: "category",
      label: "Web UI",
      items: [
        // {
        //   type: "doc",
        //   id: "web-ui/creating-environments",
        //   label: "Creating environments",
        // },
        {
          type: "doc",
          id: "web-ui/creating-tests",
          label: "Creating Tests",
        },
        {
          type: "doc",
          id: "web-ui/creating-test-specifications",
          label: "Creating Test Specifications",
        },
        {
          type: "doc",
          id: "web-ui/creating-test-outputs",
          label: "Creating Test Outputs",
        },
        {
          type: "doc",
          id: "web-ui/test-results",
          label: "Test Results",
        },
        // {
        //   type: "doc",
        //   id: "web-ui/creating-transactions",
        //   label: "Creating transactions",
        // },
        {
          type: "doc",
          id: "web-ui/exporting-tests",
          label: "Exporting Tests",
        },
        {
          type: "doc",
          id: "web-ui/undefined-variables",
          label: "Using Undefined Variables",
        },
      ],
    },
    {
      type: "category",
      label: "CLI",
      items: [
        {
          type: "doc",
          id: "cli/configuring-your-cli",
          label: "Configuring your CLI",
        },
        {
          type: "doc",
          id: "cli/creating-data-stores",
          label: "Creating Data Stores",
        },
        // {
        //   type: "doc",
        //   id: "cli/creating-environments",
        //   label: "Creating environments",
        // },
        {
          type: "doc",
          id: "cli/creating-tests",
          label: "Creating Tests",
        },
        {
          type: "doc",
          id: "cli/running-tests",
          label: "Running Tests",
        },        
        // {
        //   type: "doc",
        //   id: "cli/creating-transactions",
        //   label: "Creating transactions",
        // },
        // {
        //   type: "doc",
        //   id: "cli/exporting-tests",
        //   label: "Exporting tests",
        // },
        {
          type: "category",
          label: "Reference",
          items: cliGeneratedPages,
        },
      ],
    },
    {
      type: "category",
      label: "CI/CD automation",
      items: [
        {
          type: "doc",
          id: "ci-cd-automation/github-actions-pipeline",
          label: "GitHub actions pipeline",
        },
      ],
    },
    {
      type: "category",
      label: "Tools & Integrations",
      items: [
        {
          type: "doc",
          id: "tools-and-integrations/overview",
          label: "Overview",
        },
        {
          type: "doc",
          id: "tools-and-integrations/keptn",
          label: "Keptn",
        },
        {
          type: "doc",
          id: "tools-and-integrations/k6",
          label: "K6",
        },
        {
          type: "doc",
          id: "tools-and-integrations/testkube",
          label: "Testkube",
        },
      ],
    },
    {
      type: "category",
      label: "Examples & Tutorials",
      items: [
        {
          type: "doc",
          id: "examples-tutorials/overview",
          label: "Overview",
        },
        {
          type: "doc",
          id: "examples-tutorials/recipes",
          label: "Recipes",
        },
        {
          type: "doc",
          id: "examples-tutorials/recipes/running-tracetest-without-a-trace-data-store",
          label: "Node.js and OpenTelemetry Collector",
        },
        {
          type: "doc",
          id: "examples-tutorials/recipes/running-tracetest-with-jaeger",
          label: "Node.js and Jaeger",
        },
        {
          type: "doc",
          id: "examples-tutorials/recipes/running-tracetest-with-opensearch",
          label: "Node.js and OpenSearch",
        },
        {
          type: "doc",
          id: "examples-tutorials/recipes/running-tracetest-with-tempo",
          label: "Node.js and Tempo",
        },
        {
          type: "doc",
          id: "examples-tutorials/recipes/running-tracetest-with-lightstep",
          label: "OpenTelemetry Demo and Lightstep",
        },
        {
          type: "doc",
          id: "examples-tutorials/recipes/running-tracetest-with-new-relic",
          label: "OpenTelemetry Demo and New Relic",
        },
        {
          type: "doc",
          id: "examples-tutorials/recipes/running-tracetest-with-elasticapm",
          label: "Node.js and Elastic APM",
        },
        {
          type: "doc",
          id: "examples-tutorials/recipes/running-tracetest-with-aws-x-ray",
          label: "X-Ray",
        },
        {
          type: "doc",
          id: "examples-tutorials/recipes/running-tracetest-with-aws-x-ray-adot",
          label: "X-Ray and AWS Distro for OpenTelemetry",
        },
        {
          type: "doc",
          id: "examples-tutorials/recipes/running-tracetest-with-aws-x-ray-pokeshop",
          label: "X-Ray, AWS Distro for OpenTelemetry & Pokeshop API",
        },
        {
          type: "doc",
          id: "examples-tutorials/recipes/running-tracetest-with-aws-terraform",
          label: "AWS Fargate and Terraform",
        },
        {
          type: "doc",
          id: "examples-tutorials/recipes/running-tracetest-with-step-functions-terraform",
          label: "AWS Step Functions, AWS X-Ray and Terraform",
        },
        {
          type: "doc",
          id: "examples-tutorials/recipes/running-tracetest-with-datadog",
          label: "OpenTelemetry Demo and Datadog",
        },
      ],
    },
    {
      type: "category",
      label: "Live examples",
      items: [
        {
          type: "category",
          label: "Pokemon API Demo",
          items: [
            {
              type: "doc",
              id: "live-examples/pokeshop/overview",
              label: "Overview",
            },
            {
              type: "category",
              label: "Use Cases",
              items: [
                {
                  type: "doc",
                  id: "live-examples/pokeshop/use-cases/add-pokemon",
                  label: "Add Pokemon",
                },
                {
                  type: "doc",
                  id: "live-examples/pokeshop/use-cases/list-pokemon",
                  label: "List Pokemon",
                },
                {
                  type: "doc",
                  id: "live-examples/pokeshop/use-cases/get-pokemon-by-id",
                  label: "Get Pokemon by ID",
                },
                {
                  type: "doc",
                  id: "live-examples/pokeshop/use-cases/import-pokemon",
                  label: "Import Pokemon",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "OpenTelemetry Store Demo",
          items: [
            {
              type: "doc",
              id: "live-examples/opentelemetry-store/overview",
              label: "Overview",
            },
            {
              type: "category",
              label: "Use Cases",
              items: [
                {
                  type: "doc",
                  id: "live-examples/opentelemetry-store/use-cases/add-item-into-shopping-cart",
                  label: "Add item into shopping cart",
                },
                {
                  type: "doc",
                  id: "live-examples/opentelemetry-store/use-cases/check-shopping-cart-contents",
                  label: "Check shopping cart contents",
                },
                {
                  type: "doc",
                  id: "live-examples/opentelemetry-store/use-cases/checkout",
                  label: "Checkout",
                },
                {
                  type: "doc",
                  id: "live-examples/opentelemetry-store/use-cases/get-recommended-products",
                  label: "Get recommended products",
                },
                {
                  type: "doc",
                  id: "live-examples/opentelemetry-store/use-cases/user-purchasing-products",
                  label: "User purchasing products",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "link",
      label: "Tracetest Open API definition",
      href: "/openapi",
    },
  ],
};

module.exports = sidebars;
