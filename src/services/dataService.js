export default class DataService {
  _data = {
    projectRepo: 'https://github.com/erkmenesen/erkmenesen.com',
    react95Repo: 'https://github.com/React95/React95',
    items: [
      {
        id: 'about',
        name: 'About.txt',
        icon: 'user',
        content: {
          paragraphs: [
            "Hi, I'm Erkmen!",
            "I am a Tech Lead based in Hamburg📍. For the last several years I've been working as a Tech/Team Lead in big Research companies.",
            "I was developing mods for games in high school and I started programming with a forum site that I wrote to showcase these modes.",
            'I have been developing software professionally for 9 years. In the last 5 years of this period, I was the software team leader and chief developer of a research company in Istanbul.',
            'Between 2014 and 2015, I worked in e-Transformation and e-Invoice projects nationwide in Turkey and worked in a special R&D team at Istanbul Technical University.',
            'In my professional life, I had the chance to develop projects for worldwide companies such as Coca-Cola, Bosch, Nestle, and MediaMarkt.',
            'Although my main instrument is C#, I have worked with many different languages (for example, this site was developed with React..)',
            'By the way, did I mention I make music?'
            
          ],
        },
      },
      {
        id: 'photos',
        name: 'Photos.jpg',
        icon: 'progman_24',
      },
      {
        id: 'resume',
        name: 'Resume.txt',
        icon: 'notepad_2',
        content: {
          resumeLink:
            'https://drive.google.com/file/d/1mFCumSTDk9dqph-SY1J5gj4B6dgmI0Mb/view?usp=sharing',
          workExperience: [
            {
              jobTitle: 'Tech Lead',
              company: 'DEPT®',
              location: 'Hamburg',
              period: 'JAN 2023 – PRESENT',
              accomplishments: [
                'Management of the Developer Team',
                'End-to-End Project Design and Management Architecture, Algorithm and Library Design',
                'Core Coding',
                'Lead Development',
                'Cloud Management (Azure, AWS)',
                'Technologies used: C#, JS, ASP.NET, SQL Server, Redis, MongoDB, Azure, Docker',
              ],
            },
            {
              jobTitle: 'Software Development Team Lead',
              company: 'Akademetre',
              location: 'Istanbul',
              period: 'OCT 2016 – SEP 2022',
              accomplishments: [
                'Management of the Developer Team',
                'End-to-End Project Design and Management Architecture, Algorithm and Library Design',
                'Core Coding',
                'Lead Development',
                'Cloud Management (Azure, AWS)',
                'Technologies used: C#, JS, ASP.NET, SQL Server, Redis, MongoDB, Azure, Docker',
              ],
            },
            {
              jobTitle: '.NET Developer',
              company: 'E-Cozum',
              location: 'Istanbul',
              period: 'AUG 2015 – AUG 2016',
              accomplishments: [
                'Coding Payment System Projects',
                'Coding Integrations between Banks and Payment Systems Coding VirtualPos Integrations between Banks',
                'UI Designing',
                'Technologies used: C#, ASP.NET, SQL Server, JQuery, WCF/REST/SOAP Services',
              ],
            },
          ],
        },
      },
      {
        id: 'projects',
        name: 'Projects.txt',
        icon: 'flying_through_space_100',
        content: {
          projects: [
            {
              title: 'VanillaPrice',
              description:
                'VanillaPrice is a software that allows you to regularly monitor your competitors in Online and Conventional markets and stay ahead of the competition. It allows you to objectively see your own market situation according to the players in the market, to identify the points where you lose margin and to take action quickly.',
              myRole:
                'Creator.',
              techStack:
                'C#, ASP.NET Core, SQL Server, JS, Azure, Selenium, HTMLAgilityPack, Web Bots'
            },
            {
              title: 'Agrimetre',
              description:
                'Agrimetre is an cloud-based platform that draws the Turkey s economic and agricultural map with the data obtained from foreign sources and Turkey s official sources. The technology visualize all the agricultural activity data of the Turkey from the field until the supermarket shelves.',
              myRole:
                'Team Lead / Developer.',
              techStack:
                'C#, ASP.NET Core, SQL Server, JS, Azure, Selenium, HTMLAgilityPack, Web Bots'
            },
            {
              title: 'FinRota Netahsilat',
              description:
                'Turkey s Largest B2B Online Collection Platform. Netahsilat is an online credit card collection system. With the Netahsilat dealer collection system integrated with all bank virtual POS, companies can receive their collections online from their dealers, sub-dealers and customers.',
              myRole:
                'Developer.',
              techStack:
                'C#, ASP.NET, SQL Server, JS, jQuery'
            },
            {
              title: 'erkmenesen.com',
              description:
                'A unique approach to the conventional developer websites.',
              techStack: 'React',
              repo: 'https://github.com/erkmenesen/erkmenesen.com',
            },
          ],
        },
      },
      {
        id: 'skills',
        name: 'Skills.txt',
        icon: 'progman_11',
        content: {
          hard: [
            {
              name: 'C# .NET',
              progress: 100,
            },
            {
              name: 'SQL Server',
              progress: 100,
            },
            {
              name: 'JavaScript',
              progress: 100,
            },
            {
              name: 'Selenium',
              progress: 100,
            },
            {
              name: 'WebBots',
              progress: 100,
            },
            {
              name: 'jQuery',
              progress: 100,
            },
            {
              name: 'Microservices',
              progress: 95,
            },
            {
              name: 'Redis',
              progress: 90,
            },
            {
              name: 'Docker',
              progress: 80,
            },
            {
              name: 'MongoDB',
              progress: 80,
            },
            {
              name: 'Azure',
              progress: 75,
            }
          ],
          soft: 'I am a fast learner. I know how to experience moments of chaos, how to be cold-blooded and find solutions. I want help in moments of blockage, I know that realizing and accepting this is the hardest part of the job. I like to lead and inspire like Jean-Luc Picard, not to direct.🖖',
        },
      },
      {
        id: 'contact',
        name: 'Contact.txt',
        icon: 'inetcfg_2301',
        content: {
          emailText:
            'If you want to contact me about professional topics or maybe just chat about star trek... idk. anyway do not hesitate! ',
          email: 'mail@erkmenesen.com',
          socialText: 'Or you can reach me out through social media:',
          social: [
            {
              name: 'FaLinkedin',
              link: 'https://www.linkedin.com/in/erkmenesen/',
            },
            {
              name: 'FaGithub',
              link: 'https://github.com/erkmenesen',
            },
            {
              name: 'FaInstagram',
              link: 'https://www.instagram.com/erkmenthemighty',
            },
          ],
        },
      },
    ],
  };

  getItems() {
    return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
  }

  getItem(id) {
    return this._data.items.find((x) => x.id === id);
  }

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      react95Repo: this._data.react95Repo,
    };
  }
}
