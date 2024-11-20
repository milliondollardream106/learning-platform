
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
  
  // content/cs103-3-1.ts
  export const lessonContent: LessonContent = {
    courseCode: "CS103",
    unit: "Unit 3",
    title: "Introduction to Computer Memory",
    description: "This unit explores the fundamental concepts of computer memory systems, their organization, and their critical role in computer operations. Understanding memory architecture is essential for comprehending how computers store and process information.",
    imagePath: "/courses/cs103/motherboard.svg",
  
    sections: [
      {
        id: "Introduction to Computer Memory",
        title: "Introduction to Computer Memory",
        items: [
          {
            title: "What is a Memory Unit?",
            sectionId: "what-is-a-memory-unit",
            content: `A memory unit is a fundamental component of computer systems that stores both data and instructions. This hardware component provides the computer with the capability to retain digital information for both immediate use and long-term storage.
            \n\n\  
            Memory units operate through electronic circuits that can maintain binary states, storing information as patterns of 1s and 0s. These units serve as the workspace where the computer keeps actively used programs and data, enabling rapid access by the processor during program execution.
            \n\n\  
            The basic structure of a memory unit consists of numerous storage locations, each with a unique address. This addressing system allows the computer to precisely locate and retrieve stored information when needed, forming the basis for efficient data access and program execution.`
          },
  
          {
            title: "What is the Purpose of Memory?",
            sectionId: "what-is-the-purpose-of-memory",
            content: `Computer memory serves several critical functions in the operation of computer systems. Its primary purpose is to provide storage for both the instructions that tell the computer what to do and the data being processed.
            \n\n\  
            During program execution, memory holds the active program instructions, enabling the CPU to quickly fetch and execute them in sequence. It also stores the data being actively processed, providing fast access for computational operations. This rapid access capability is essential for maintaining efficient program execution.
            \n\n\  
            Memory also serves as a buffer between the fast processor and slower storage devices, helping to bridge the speed gap between different components of the computer system. This intermediary role is crucial for maintaining optimal system performance.`
          },
  
          {
            title: "Words and Bytes in Memory",
            sectionId: "words-and-bytes-in-memory",
            content: `In computer memory architecture, data is organized into fundamental units of bytes and words. A byte consists of 8 bits and represents the basic addressable unit of memory. A word is a larger unit that represents the natural data size for a given computer architecture.
             \n\n\ 
            Word size varies by computer architecture, with common sizes being 32 bits (4 bytes) or 64 bits (8 bytes). This word size determines several key characteristics of the computer system, including the maximum amount of memory that can be directly addressed and the precision of arithmetic operations.
             \n\n\ 
            Memory addresses refer to specific byte locations, allowing precise access to stored data. The relationship between bytes and words is fundamental to understanding how memory is organized and accessed by the processor during program execution.`
          },
  
          {
            title: "How Memory Works",
            sectionId: "how-memory-works",
            content: `Computer memory operates through a sophisticated system of electronic circuits that can maintain different states to represent binary data. The process involves three primary operations: reading, writing, and maintaining stored data.
            \n\n\  
            During a write operation, electrical signals set the state of memory circuits to represent specific binary values. The read operation retrieves these stored values by detecting the current state of the circuits. These operations are controlled by precise timing signals and address decoders that ensure accurate data access.
             \n\n\ 
            Memory access is managed by the memory controller, which coordinates data transfer between the CPU and memory. This controller ensures proper timing and handles refresh operations necessary for maintaining data integrity in dynamic memory systems.`
          },
  
          {
            title: "How Memory is Organized",
            sectionId: "how-memory-is-organized",
            content: `Computer memory is organized in a hierarchical structure to balance speed, cost, and capacity requirements. This organization creates a memory hierarchy that ranges from small, fast, expensive memory near the processor to larger, slower, less expensive memory further from the processor.
            \n\n\  
            At the top of the hierarchy are registers and cache memory, providing the fastest access times but limited capacity. The main memory (RAM) provides larger storage capacity with slightly slower access times. This hierarchical arrangement optimizes system performance by keeping frequently accessed data in faster memory levels.
            \n\n\ 
            Memory is also organized into banks and arrays, with specific addressing schemes that enable efficient access to stored data. This organization includes error detection and correction mechanisms to ensure data integrity.`
          },
  
          {
            title: "Primary vs Secondary Memory",
            sectionId: "primary-vs-secondary-memory",
            content: `Computer systems utilize two main categories of memory: primary (main) memory and secondary memory. Each serves distinct purposes in the computer's operation.
            \n\n\  
            Primary memory, typically implemented as RAM, provides fast, direct access storage for active programs and data. This volatile memory maintains data only while power is supplied, enabling rapid access for current processing needs. Primary memory works directly with the CPU, facilitating immediate program execution and data manipulation.
            \n\n\  
            Secondary memory, such as hard drives and SSDs, provides non-volatile storage for long-term data retention. This type of memory maintains data even without power, offering larger storage capacity at the cost of slower access times. Secondary memory serves as the permanent storage solution for programs, files, and data when they are not actively in use.`
          },
  
          {
            title: "Why Memory Size Matters",
            sectionId: "why-memory-size-matters",
            content: `Memory size significantly impacts computer system performance and capabilities. The amount of available memory affects both the system's ability to handle multiple tasks simultaneously and its overall processing efficiency.
             \n\n\ 
            Sufficient memory capacity enables the system to keep more programs and data readily accessible, reducing the need for slower disk access operations. This directly affects system responsiveness and the ability to run complex applications that require large amounts of working memory.
             \n\n\ 
            Memory size also influences the system's capacity for handling larger datasets and more demanding applications. Understanding these relationships helps in making informed decisions about system requirements and configurations for specific computing needs.`
          }
        ]
      }
    ]
  };