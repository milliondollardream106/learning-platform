// content/cs103-1-2.ts

interface LessonContent {
  courseCode: string;
  unit: string;
  title: string;
  description: string;
  imagePath: string;
  sections: Section[];
}

interface Section {
  id: string;
  title: string;
  items: SectionItem[];
}

interface SectionItem {
  title: string;
  sectionId: string;
  content?: string;
  imagePath?: string | null;
}



// content/cs103-1-2.ts
export const lessonContent: LessonContent = {
  courseCode: "CS103",
  unit: "Unit 1",
  title: "Designing Computer Architecture",
  description: "Designing a computer architecture might seem like a daunting task, but at its core, the principles of how a computer works are relatively straightforward.",
  imagePath: "/courses/cs103/cs103.svg",
  sections: [
    {
      id: "Designing Computer Architecture",
      title: "Designing Computer Architecture",
      items: [
        {
          title: "The Von Neumann Model",
          sectionId: "The-Von-Neumann-Model",
          content: `
           When we talk about computer architecture, one model stands above the rest—the Von Neumann Architecture.

            This model was proposed in 1945 by John von Neumann, a Hungarian-American physicist, mathematician, and computer scientist. His architecture is still the foundation of most modern computers today.

            // add image here and center the image

            In simple terms, the Von Neumann Architecture defines how a computer is structured:

            1. Central Processing Unit (CPU):
               \n\n* The CPU is the "brain" of the computer, consisting of two main parts:
                  * The Arithmetic Logic Unit (ALU): Think of this as the computer’s "calculator," which performs all the arithmetic and logical operations.
                  * The Control Unit: This part manages the execution of programs, telling the system what tasks to perform and coordinating between the components.

            2. Memory Unit:
               \n\n* The computer also needs a memory unit to store both data and instructions. This is where the CPU retrieves information when performing tasks.

            3. Input and Output Devices:
              \n\n\* Input devices allow us to feed data and instructions into the computer, such as keyboards and mice.
              \n\n\* Output devices display the results or perform tasks, like monitors or printers.
            `,
          imagePath: "/courses/cs103/von-neumann.svg",
        },

        {
          title: "Limitations of the Von Neumann Architecture",
          sectionId: "Limitations of the Von Neumann Architecture",
          content: `
          While the Von Neumann model has been highly effective, it does come with a few limitations:

          1. Single Memory Source:
          \n\n* In this architecture, both the data and the program instructions are stored in the same memory. This means that the CPU can only access one piece of information at a time, slowing down the system.

          2. CPU Bottleneck:
          \n\n* The CPU cannot read and write data simultaneously. This creates what’s known as the "Von Neumann bottleneck," where the speed of the system is limited by how quickly the CPU can read from and write to memory.

            `,
          imagePath: "/courses/cs103/von-neumann.svg",
        },

        {
          title: "The Harvard Architecture: A Modern Improvement",
          sectionId: "The Harvard Architecture: A Modern Improvement",
          content: `
            To address the limitations of the Von Neumann model, the Harvard Architecture was introduced.
            In this architecture, the CPU can read from one memory source while writing to another at the same time. This allows for faster and more efficient processing, as instructions and data can be handled separately. Many modern computers, especially in specialized systems like embedded devices, use variations of the Harvard Architecture.

           // add image here and center the image

            By understanding these basic models, you’ll have a clearer view of how computers process data and manage tasks. As we continue exploring, we’ll dive deeper into how these architectures evolve to meet the demands of modern computing.
            `,
          imagePath: "/courses/cs103/harvard.svg",
        }
      ]
    },
    
  ]
};
