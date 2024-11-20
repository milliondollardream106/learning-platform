
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
  }
  
  // content/cs103-1-1.ts
  export const lessonContent: LessonContent = {
    courseCode: "CS103",
    unit: "Unit 1",
    title: "Introduction to Digital and Computer Architecture",
    description: "This course introduces the fundamental principles of computer architecture, exploring how computer systems are structured and how their components work together to process information.",
    imagePath: "/courses/cs103/cs103.svg",
  
    sections: [
      {
        id: "Introduction to Digital and Computer Architecture",
        title: "Digital Architecture",
        items: [
          {
            title: "What is Computer Architecture?",
            sectionId: "computer-architecture-fundamentals",
            content: `Computer architecture refers to the organizational structure and design of computer systems. It encompasses both the physical hardware components and their logical organization. This foundational concept in computer science defines how computer systems process instructions and manage data flow between different components.
            \n\n  
            Computer architecture establishes the fundamental rules and methods that determine how hardware components interact with software. It provides the framework for understanding how computers execute programs and process data, forming the basis for modern computing systems.`
          },
  
          {
            title: "Core Components of Computer Architecture",
            sectionId: "core-components",
            content: `Computer systems are built around several essential components that work together to process and store information. The Central Processing Unit (CPU) serves as the primary computational engine, executing instructions and performing arithmetic and logical operations. It contains the control unit for instruction processing and the arithmetic logic unit (ALU) for mathematical computations.
            \n\n  
            Random Access Memory (RAM) functions as the system's primary working memory, providing fast, temporary storage for active programs and data. This volatile memory enables rapid data access for the CPU during program execution. The memory hierarchy extends to secondary storage devices such as Hard Disk Drives (HDD) or Solid State Drives (SSD), which provide permanent data storage.
            \n\n  
            Input/Output (I/O) systems facilitate communication between the computer and external devices. These systems manage data transfer between the CPU, memory, and peripheral devices through standardized interfaces and protocols. The system bus architecture connects these components, enabling coordinated data transfer and communication.`
          },
  
          {
            title: "Component Integration and Operation",
            sectionId: "component-integration",
            content: `The interaction between computer components follows specific protocols and timing mechanisms. When executing a program, the CPU retrieves instructions from memory through the fetch-execute cycle. This process involves reading instructions from RAM, decoding them in the control unit, and executing them using the appropriate computational units.
            \n\n
            Data flow between components is managed through the system bus architecture, which includes the address bus, data bus, and control bus. This architecture ensures proper timing and coordination of data transfer operations. The memory controller manages access to RAM, coordinating read and write operations between the CPU and memory system.`
          },
  
          {
            title: "Digital Logic Fundamentals",
            sectionId: "digital-logic-fundamentals",
            content: `Digital logic forms the foundation of computer operations through binary-based calculations. The CPU implements complex operations using combinations of basic logic gates, which process binary signals. These fundamental operations, based on Boolean algebra, enable all higher-level computational tasks.
            \n\n
            Modern processors contain millions of transistors configured as logic gates, which perform operations on binary data. These gates are organized into more complex circuits that can execute arithmetic operations, control program flow, and manage data transfer. Understanding this digital logic foundation is crucial for comprehending how computers process information at the hardware level.`
          },
  
          {
            title: "Architectural Significance",
            sectionId: "architectural-significance",
            content: `Computer architecture principles directly influence system performance, efficiency, and capability. The design decisions in computer architecture affect how effectively a system can execute programs and manage resources. Understanding these principles is essential for software developers to write efficient programs and for system designers to create effective computing systems.
              \n\n
            The evolution of computer architecture continues to shape modern computing, from personal computers to mobile devices and cloud systems. Each advancement in architectural design enables new capabilities while building upon these fundamental principles. This understanding provides the foundation for future innovations in computing technology.`
          }
        ]
      }
    ]
  };