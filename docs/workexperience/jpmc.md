# My Experience at JPMC

## Introduction

I had the opportunity to work as a full stack developer at JPMorgan Chase & Co (JPMC) for a period of three years. During my time at JPMC, I primarily focused on the development of the firm's Intraday Liquidity tool. In this markdown file, I will discuss the importance of monitoring intraday liquidity and how it was created after the 2008 recession. Additionally, I will outline and explain my three key experiences during my tenure at JPMC.

## Importance of Monitoring Intraday Liquidity

Monitoring intraday liquidity is crucial for financial institutions like JPMC to ensure the smooth functioning of their operations and mitigate potential risks. It involves tracking and analyzing the movement of funds and the availability of liquid assets throughout the trading day. By monitoring intraday liquidity, JPMC can:

1. **Optimize liquidity management:** Real-time visibility into liquidity positions helps JPMC make informed decisions regarding cash flow, funding requirements, and investment strategies, ensuring optimal utilization of available funds.

2. **Meet regulatory requirements:** Regulatory authorities require financial institutions to maintain adequate levels of liquidity to withstand market shocks. Intraday liquidity monitoring helps JPMC comply with these regulations and provide transparent reporting on liquidity positions.

3. **Mitigate operational risks:** By continuously monitoring intraday liquidity, JPMC can identify potential liquidity shortfalls or bottlenecks in payment flows, allowing for proactive measures to mitigate operational risks and maintain uninterrupted services to clients.

## Creation of the Intraday Liquidity Tool after the 2008 Recession

After the 2008 financial crisis, the importance of monitoring and managing intraday liquidity became evident. In response to this, JPMC developed the Intraday Liquidity tool to enhance its liquidity risk management capabilities. The tool was designed to provide real-time visibility into liquidity positions across different business lines and enable:

- Accurate tracking of cash flows and liquidity sources
- Identification of potential liquidity gaps or excesses
- Stress testing and scenario analysis for assessing liquidity risks
- Compliance with regulatory requirements for reporting and monitoring liquidity metrics

The Intraday Liquidity tool played a significant role in strengthening JPMC's ability to manage liquidity effectively and ensure financial stability.

## Experiences at JPMC

### Associate, Software Developer (Jan 2022 – Jul 2022)

#### Watchtower Project (Role: Application Owner)

Watchtower is a novel application used by project managers to track deliverables worth $72 Million. The tool was ideated and developed entirely by myself after noticing a lack of standardized project reporting to senior management.
- Functionality
  - UI : Watchtower UI allowed users (Project managers) to input key details about project status such as RAG status, Executive message, Recent achivement, Risks & Issues and milestones using a REACT UI.
  - Database : Project data was stored in a cloud hosted MySQL Database
  - **Novelty** : Watchtower automated the generation of **Weekly Powerpoints** by extracting the stored information and presenting it using a standardized template.
  - Recognized by the CBT with an excellence award in innovation for my work on this project.

#### Intraday Liquidity tool (Role: Application infrastructure  & Feature Development)
- Migrated 50 TB of live data leveraged by 12 Spring Boot Microservices from ORACLE Exadata to a cloud-hosted database to boost query performance by 15%.
  - Coordinated with Operations and buisness to outline an implementation plan that required minimum downtime
  - A migration of this size was among the first in the firm and made the front page on the internal company website
  - Migrated the application across 3 dev , 5 UAT , Production Parallel and Production environments.

- Led the migration of SWIFT message format from MT to MX across 3 major currencies within strict goto market deadlines
  - MT-MX is a major on going message format migration in SWIFT as such the GO-LIVE dates required corrdination across multiple teams 

#### Force for good
- Gathered requirements and understood the current process in coordination with Bal Utsav officials.
- Architected a salesforce solution that leveraged free licences provided by Salesforce for Non profit organizations.
- Led a team of 5 developers in implementing  the solution following AGILE methodology to automate a scholarship program run by the NGO "Bal Utsav" for 10,000 students across the nation.


### Software Engineer (Jul 2019 – Jan 2022)

#### Intraday Liquidity tool (Role: Data management microservices & Feature Development)

- Architected a gateway module using Java and Spring Boot that exposed REST endpoints and communicated real-time account end-of-day summary data over IBM MQ for balance justification purposes.
- Implemented an early alerting mechanism using a periodically fired SQL from Geneos to detect incoming feed lag automatically, reducing the number of reported production incidents during US hours by 75%.
- Engineered a workflow to onboard multiple high volume data entities consisting of 1.5M records daily (1.2GB) from a web API to an Oracle database.

### Software Development Intern (Feb 2019 - Jul 2019)

#### Smart360
- Designed APIs to cumulate test results from multiple testing platforms and display them onto a dashboard.
- Collated results from 4 testing tools that were previously being collected manually saving QA teams several manhours.

