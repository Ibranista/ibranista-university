/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */

const teacherWrapper = document.querySelector('.wrapper');

let Data = [
  {
    name: 'Alex Banks',
    figure: './src/assets/alexBanks.jpg',
    alt: 'Alex Banks',
    profession: 'Senior instructor and content creator',
    about: 'Alex Banks is a true JavaScript believer. He’s taught JavaScript for two decades and co-founded Moon Highway in 2012 to design and deliver JavaScript curriculums for enterprise companies.',
  },
  {
    name: 'Ebenezor Don',
    figure: './src/assets/Ebenezer.jpeg',
    alt: 'Ebenezor Don',
    profession: 'Creator of genius-labs in Nigeria',
    about: '   Ebenezor is a Software Engineer, NewDev.io Founder and Technical Content Creator. He has an excellent skill of breaking down complex topics into their simplest forms.',
  },
  {
    name: 'Paula Hendrikson',
    figure: './src/assets/paula.jpeg',
    alt: 'Paula',
    profession: 'Creator of genius-labs in Nigeria',
    about: '   Paula is a Software Engineer, NewDev.io Founder and Technical Content Creator. He has an excellent skill of breaking down complex topics into their simplest forms.',
  },
  {
    name: 'Justin Junkins',
    figure: './src/assets/instructor-1.jpeg',
    alt: 'Junkins',
    profession: 'Creator of genius-labs in Nigeria',
    about: 'Junkins is a Software Engineer, NewDev.io Founder and Technical Content Creator. He has an excellent skill of breaking down complex topics into their simplest forms.',
  },
  {
    name: 'Morten Ran-Hendrikson',
    figure: './src/assets/morten.jpg',
    alt: 'Morten',
    profession: ' Senior stuff instructor',
    about: 'Morten help the web make sense by helping people understand and get the most out of the web, and contribute to the debates about ownership.',
  },
  {
    name: 'Morten Ran-Justin',
    figure: './src/assets/instructor-2.jpeg',
    alt: 'Morten',
    profession: ' Senior Author',
    about: 'Morten help the web make sense by helping people understand and get the most out of the web, and contribute to the debates about ownership.',
  },
];

let instructors = '';

// eslint-disable-next-line no-restricted-syntax
for (Data of Data) {
  instructors += `
    <div
              class="teachers-wrapper md:flex gap-2 justify-between mb-5 hidden md:ml-5"
            >
              <figure>
                <img
                  src=${Data.figure}
                  class="w-[400px]"
                  alt=${Data.about}
                />
              </figure>
              <div class="desc">
                <h2 class="font-bold text-2xl font-lato">
                  ${Data.name}
                </h2>
                <p class="active-anchor font-semibold mb-2 md:mb-auto">
                  ${Data.profession}
                </p>
                <p>
                 ${Data.about}
                </p>
              </div>
            </div>
    `;
}

teacherWrapper.innerHTML = instructors;