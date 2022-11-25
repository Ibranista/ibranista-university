/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */

const teacherWrapper = document.querySelector('.wrapper');

let Data = [
  {
    name: 'Ebenezor Don',
    figure: './src/assets/Ebenezer.jpeg',
    alt: 'Ebenezor Don',
    profession: 'Creator of genius-labs in Nigeria',
    about: 'Ebenezor is a Software Engineer, NewDev.io Founder and Technical Content Creator. He has an excellent skill of breaking down complex topics into their simplest forms.',
    class: '',
  },
  {
    name: 'Paula Hendrikson',
    figure: './src/assets/paula.jpeg',
    alt: 'Paula',
    profession: 'Creator of genius-labs in Nigeria',
    about: '   Paula is a Software Engineer, NewDev.io Founder and Technical Content Creator. He has an excellent skill of breaking down complex topics into their simplest forms.',
    class: '',
  },
  {
    name: 'Justin Junkins',
    figure: './src/assets/instructor-1.jpeg',
    alt: 'Junkins',
    profession: 'Creator of genius-labs in Nigeria',
    about: 'Junkins is a Software Engineer, NewDev.io Founder and Technical Content Creator. He has an excellent skill of breaking down complex topics into their simplest forms.',
    class: 'hidden md:flex',
  },
  {
    name: 'Morten Ran-Hendrikson',
    figure: './src/assets/morten.jpg',
    alt: 'Morten',
    profession: ' Senior stuff instructor',
    about: 'Morten help the web make sense by helping people understand and get the most out of the web, and contribute to the debates about ownership.',
    class: 'hidden md:flex',
  },
  {
    name: 'Morten Ran-Justin',
    figure: './src/assets/instructor-2.jpeg',
    alt: 'Morten',
    profession: ' Senior Author',
    about: 'Morten help the web make sense by helping people understand and get the most out of the web, and contribute to the debates about ownership.',
    class: 'hidden md:flex',
  },
  {
    name: 'Justin Ran-Justin',
    figure: './src/assets/instructor-1.jpeg',
    alt: 'Morten',
    profession: ' Senior Author',
    about: 'Morten help the web make sense by helping people understand and get the most out of the web, and contribute to the debates about ownership.',
    class: 'hidden md:flex',
  },
];

let instructors = '';

// eslint-disable-next-line no-restricted-syntax
for (Data of Data) {
  instructors += `
    <div
              class="teachers-wrapper flex gap-4 justify-between mb-5 md:ml-5 ${Data.class}"
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